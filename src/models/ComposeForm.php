<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\models;

use Craft;
use craft\base\Model;
use craft\helpers\Json;
use rareform\mailer\helpers\AddressParser;
use verbb\tiptap\Normalizer;
use yii\web\UploadedFile;

/**
 * The compose form.
 */
class ComposeForm extends Model
{
    /**
     * The maximum number of addresses per To/CC/BCC field.
     */
    public const MAX_CUSTOM_ADDRESSES = 50;

    /**
     * The pseudo user group ID for admins.
     */
    public const ADMINS = 'admins';

    public string $subject = '';

    /**
     * @var string The message body as a TipTap content JSON string.
     */
    public string $bodyJson = '[]';

    public string $fromName = '';

    public string $fromEmail = '';

    public string $replyTo = '';

    public bool $sendToCustom = false;

    public string $customTo = '';

    public string $customCc = '';

    public string $customBcc = '';

    public bool $sendToGroups = false;

    /**
     * @var array<int|string> User group IDs, and/or `admins`.
     */
    public array $groupIds = [];

    public bool $sendToUsers = false;

    /**
     * @var int[]
     */
    public array $userIds = [];

    /**
     * @var int[]
     */
    public array $assetIds = [];

    /**
     * @var UploadedFile[]
     */
    public array $uploads = [];

    /**
     * @var array|null Parsed custom addresses, memoized.
     */
    private ?array $_customAddresses = null;

    /**
     * Creates a form from a request’s body params.
     */
    public static function fromRequest(): self
    {
        $request = Craft::$app->getRequest();
        $modes = (array)$request->getBodyParam('modes', []);

        $form = new self([
            'subject' => trim((string)$request->getBodyParam('subject', '')),
            'bodyJson' => (string)$request->getBodyParam('bodyJson', '[]'),
            'fromName' => trim((string)$request->getBodyParam('fromName', '')),
            'fromEmail' => trim((string)$request->getBodyParam('fromEmail', '')),
            'replyTo' => trim((string)$request->getBodyParam('replyTo', '')),
            'sendToCustom' => !empty($modes['custom']),
            'customTo' => (string)$request->getBodyParam('customTo', ''),
            'customCc' => (string)$request->getBodyParam('customCc', ''),
            'customBcc' => (string)$request->getBodyParam('customBcc', ''),
            'sendToGroups' => !empty($modes['groups']),
            'groupIds' => array_values(array_filter((array)$request->getBodyParam('groupIds', []), fn($id) => $id !== '' && $id !== null)),
            'sendToUsers' => !empty($modes['users']),
            'userIds' => self::ids($request->getBodyParam('userIds', [])),
            'assetIds' => self::ids($request->getBodyParam('assetIds', [])),
        ]);

        $form->uploads = array_values(array_filter(
            UploadedFile::getInstancesByName('uploads'),
            fn(UploadedFile $file) => $file->error !== UPLOAD_ERR_NO_FILE,
        ));

        return $form;
    }

    /**
     * Creates a form prefilled from a previous send (“Use as template”).
     */
    public static function fromSend(Send $send): self
    {
        $config = $send->recipientsConfig;

        return new self([
            'subject' => $send->subject,
            'bodyJson' => $send->bodyJson ?: '[]',
            'fromName' => (string)$send->fromName,
            'fromEmail' => $send->fromEmail,
            'replyTo' => (string)$send->replyTo,
            'sendToCustom' => !empty($config['custom']['enabled']),
            'customTo' => implode(', ', array_map([AddressParser::class, 'format'], $config['custom']['to'] ?? [])),
            'customCc' => implode(', ', array_map([AddressParser::class, 'format'], $config['custom']['cc'] ?? [])),
            'customBcc' => implode(', ', array_map([AddressParser::class, 'format'], $config['custom']['bcc'] ?? [])),
            'sendToGroups' => !empty($config['groups']['enabled']),
            'groupIds' => $config['groups']['ids'] ?? [],
            'sendToUsers' => !empty($config['users']['enabled']),
            'userIds' => $config['users']['ids'] ?? [],
            'assetIds' => array_values(array_filter(array_map(
                fn(array $attachment) => $attachment['assetId'] ?? null,
                $send->attachments,
            ))),
        ]);
    }

    /**
     * Returns the body as a normalized TipTap content array.
     */
    public function getBodyContent(): array
    {
        try {
            $decoded = Json::decode($this->bodyJson ?: '[]');
        } catch (\Throwable) {
            return [];
        }

        return Normalizer::normalizeContentArray(Normalizer::normalize($decoded));
    }

    /**
     * Returns whether the body has any visible content.
     */
    public function hasBody(): bool
    {
        $content = $this->getBodyContent();

        if ($content === []) {
            return false;
        }

        $hasContent = false;
        array_walk_recursive($content, function($value, $key) use (&$hasContent) {
            if (($key === 'text' && trim((string)$value) !== '') || ($key === 'type' && in_array($value, ['horizontalRule', 'table', 'image'], true))) {
                $hasContent = true;
            }
        });

        return $hasContent;
    }

    /**
     * Returns the parsed custom addresses, de-duplicated across To, CC and BCC (To wins over CC, CC over BCC).
     *
     * @return array{to: array, cc: array, bcc: array, errors: array{to: string[], cc: string[], bcc: string[]}, overflow: array{to: bool, cc: bool, bcc: bool}}
     */
    public function getCustomAddresses(): array
    {
        if ($this->_customAddresses !== null) {
            return $this->_customAddresses;
        }

        $to = AddressParser::parse($this->customTo, self::MAX_CUSTOM_ADDRESSES);
        $cc = AddressParser::parse($this->customCc, self::MAX_CUSTOM_ADDRESSES);
        $bcc = AddressParser::parse($this->customBcc, self::MAX_CUSTOM_ADDRESSES);

        $ccAddresses = AddressParser::without($cc['addresses'], $to['addresses']);
        $bccAddresses = AddressParser::without($bcc['addresses'], $to['addresses'], $ccAddresses);

        return $this->_customAddresses = [
            'to' => $to['addresses'],
            'cc' => $ccAddresses,
            'bcc' => $bccAddresses,
            'errors' => [
                'to' => $to['errors'],
                'cc' => $cc['errors'],
                'bcc' => $bcc['errors'],
            ],
            'overflow' => [
                'to' => $to['overflow'],
                'cc' => $cc['overflow'],
                'bcc' => $bcc['overflow'],
            ],
        ];
    }

    /**
     * Returns the recipients configuration stored with a send.
     */
    public function getRecipientsConfig(): array
    {
        $custom = $this->getCustomAddresses();

        return [
            'custom' => [
                'enabled' => $this->sendToCustom,
                'to' => $this->sendToCustom ? $custom['to'] : [],
                'cc' => $this->sendToCustom ? $custom['cc'] : [],
                'bcc' => $this->sendToCustom ? $custom['bcc'] : [],
            ],
            'groups' => [
                'enabled' => $this->sendToGroups,
                'ids' => $this->sendToGroups ? $this->normalizedGroupIds() : [],
            ],
            'users' => [
                'enabled' => $this->sendToUsers,
                'ids' => $this->sendToUsers ? $this->userIds : [],
            ],
        ];
    }

    /**
     * Returns the selected group IDs as integers, plus `admins` if selected.
     *
     * @return array<int|string>
     */
    public function normalizedGroupIds(): array
    {
        $ids = [];

        foreach ($this->groupIds as $id) {
            if ($id === self::ADMINS) {
                $ids[] = self::ADMINS;
            } elseif (is_numeric($id)) {
                $ids[] = (int)$id;
            }
        }

        return array_values(array_unique($ids, SORT_REGULAR));
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels(): array
    {
        return [
            'subject' => Craft::t('mailer', 'Subject'),
            'bodyJson' => Craft::t('mailer', 'Message'),
            'fromName' => Craft::t('mailer', 'Sender Name'),
            'fromEmail' => Craft::t('mailer', 'Sender Email'),
            'replyTo' => Craft::t('mailer', 'Reply-To'),
            'customTo' => Craft::t('mailer', 'To'),
            'customCc' => Craft::t('mailer', 'CC'),
            'customBcc' => Craft::t('mailer', 'BCC'),
            'groupIds' => Craft::t('mailer', 'User Groups'),
            'userIds' => Craft::t('mailer', 'Users'),
        ];
    }

    /**
     * @inheritdoc
     */
    protected function defineRules(): array
    {
        return [
            [['subject', 'fromEmail'], 'required'],
            [['subject', 'fromName', 'fromEmail', 'replyTo'], 'string', 'max' => 255],
            [['subject', 'fromName'], 'match', 'not' => true, 'pattern' => '/[\r\n]/', 'message' => Craft::t('mailer', '{attribute} cannot contain line breaks.')],
            [['fromEmail', 'replyTo'], fn(string $attribute) => $this->validateEmail($attribute)],
            [['bodyJson'], fn() => $this->validateBody()],
            [['customTo'], fn() => $this->validateRecipients(), 'skipOnEmpty' => false],
        ];
    }

    private function validateEmail(string $attribute): void
    {
        $value = $this->$attribute;

        if ($value !== '' && !AddressParser::isValidEmail($value)) {
            $this->addError($attribute, Craft::t('mailer', '{attribute} is not a valid email address.', [
                'attribute' => $this->getAttributeLabel($attribute),
            ]));
        }
    }

    private function validateBody(): void
    {
        if (strlen($this->bodyJson) > 1048576) {
            $this->addError('bodyJson', Craft::t('mailer', 'The message is too long.'));
        } elseif (!$this->hasBody()) {
            $this->addError('bodyJson', Craft::t('mailer', 'Message cannot be blank.'));
        }
    }

    private function validateRecipients(): void
    {
        if (!$this->sendToCustom && !$this->sendToGroups && !$this->sendToUsers) {
            $this->addError('recipients', Craft::t('mailer', 'Choose at least one type of recipient.'));
            return;
        }

        if ($this->sendToCustom) {
            $custom = $this->getCustomAddresses();

            if (empty($custom['to']) && empty($custom['errors']['to'])) {
                $this->addError('customTo', Craft::t('mailer', 'Enter at least one To address.'));
            }

            foreach (['to' => 'customTo', 'cc' => 'customCc', 'bcc' => 'customBcc'] as $key => $attribute) {
                foreach ($custom['errors'][$key] as $invalid) {
                    $this->addError($attribute, Craft::t('mailer', '“{address}” is not a valid email address.', ['address' => $invalid]));
                }

                if ($custom['overflow'][$key]) {
                    $this->addError($attribute, Craft::t('mailer', 'Enter no more than {max} addresses.', ['max' => self::MAX_CUSTOM_ADDRESSES]));
                }
            }
        }

        if ($this->sendToGroups && empty($this->normalizedGroupIds())) {
            $this->addError('groupIds', Craft::t('mailer', 'Select at least one user group.'));
        }

        if ($this->sendToUsers && empty($this->userIds)) {
            $this->addError('userIds', Craft::t('mailer', 'Select at least one user.'));
        }
    }

    /**
     * @return int[]
     */
    private static function ids(mixed $value): array
    {
        if (!is_array($value)) {
            $value = $value === '' || $value === null ? [] : [$value];
        }

        return array_values(array_unique(array_map('intval', array_filter($value, 'is_numeric'))));
    }
}
