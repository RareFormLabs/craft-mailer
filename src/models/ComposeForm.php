<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\models;

use Craft;
use craft\base\Model;
use craft\elements\conditions\users\UserCondition;
use craft\elements\User;
use craft\helpers\DateTimeHelper;
use craft\helpers\Json;
use DateTime;
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

    /**
     * @var DateTime|null When to send, or `null` to send right away.
     */
    public ?DateTime $sendAt = null;

    /**
     * @var bool Whether images in the body are embedded in each email instead of linked.
     */
    public bool $embedImages = false;

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

    public bool $sendToCondition = false;

    /**
     * @var bool Whether people who have unsubscribed are skipped. Turn off for important notices.
     */
    public bool $respectUnsubscribes = true;

    /**
     * @var array The user condition builder’s config.
     */
    public array $userConditionConfig = [];

    /**
     * @var int[]
     */
    public array $assetIds = [];

    /**
     * @var UploadedFile[]
     */
    public array $uploads = [];

    /**
     * @var UserCondition|false|null
     */
    private UserCondition|false|null $_userCondition = null;

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
            'embedImages' => (bool)$request->getBodyParam('embedImages', false),
            'sendAt' => DateTimeHelper::toDateTime($request->getBodyParam('sendAt'), true) ?: null,
            'sendToCustom' => !empty($modes['custom']),
            'customTo' => (string)$request->getBodyParam('customTo', ''),
            'customCc' => (string)$request->getBodyParam('customCc', ''),
            'customBcc' => (string)$request->getBodyParam('customBcc', ''),
            'sendToGroups' => !empty($modes['groups']),
            'groupIds' => array_values(array_filter((array)$request->getBodyParam('groupIds', []), fn($id) => $id !== '' && $id !== null)),
            'sendToUsers' => !empty($modes['users']),
            'userIds' => self::ids($request->getBodyParam('userIds', [])),
            'sendToCondition' => !empty($modes['condition']),
            'respectUnsubscribes' => (bool)$request->getBodyParam('respectUnsubscribes', true),
            'userConditionConfig' => (array)$request->getBodyParam('userCondition', []),
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
        $form = self::fromRecipientsConfig($send->recipientsConfig);
        $form->subject = $send->subject;
        $form->bodyJson = $send->bodyJson ?: '[]';
        $form->fromName = (string)$send->fromName;
        $form->fromEmail = $send->fromEmail;
        $form->replyTo = (string)$send->replyTo;
        $form->embedImages = (bool)($send->settingsSnapshot['embedImages'] ?? false);
        $form->assetIds = array_values(array_filter(array_map(
            fn(array $attachment) => $attachment['assetId'] ?? null,
            array_filter($send->attachments, fn(array $attachment) => ($attachment['source'] ?? null) === 'asset'),
        )));

        return $form;
    }


    /**
     * Returns the form’s data for saving as a draft or template. Uploads aren’t included.
     */
    public function toData(): array
    {
        return [
            'subject' => $this->subject,
            'bodyJson' => $this->bodyJson,
            'fromName' => $this->fromName,
            'fromEmail' => $this->fromEmail,
            'replyTo' => $this->replyTo,
            'embedImages' => $this->embedImages,
            'sendAt' => $this->sendAt?->format(DATE_ATOM),
            'recipientsConfig' => $this->getRecipientsConfig(),
            'assetIds' => $this->assetIds,
        ];
    }

    /**
     * Creates a form from saved draft or template data.
     */
    public static function fromData(array $data): self
    {
        $config = $data['recipientsConfig'] ?? [];
        $form = self::fromRecipientsConfig($config);
        $form->subject = (string)($data['subject'] ?? '');
        $form->bodyJson = (string)($data['bodyJson'] ?? '[]');
        $form->fromName = (string)($data['fromName'] ?? '');
        $form->fromEmail = (string)($data['fromEmail'] ?? '');
        $form->replyTo = (string)($data['replyTo'] ?? '');
        $form->embedImages = (bool)($data['embedImages'] ?? false);
        $form->sendAt = !empty($data['sendAt']) ? (DateTimeHelper::toDateTime($data['sendAt']) ?: null) : null;
        $form->assetIds = array_values(array_map('intval', (array)($data['assetIds'] ?? [])));

        return $form;
    }

    /**
     * Creates a form with the recipients from a stored recipients config.
     */
    private static function fromRecipientsConfig(array $config): self
    {
        return new self([
            'sendToCustom' => !empty($config['custom']['enabled']),
            'customTo' => implode(', ', array_map([AddressParser::class, 'format'], $config['custom']['to'] ?? [])),
            'customCc' => implode(', ', array_map([AddressParser::class, 'format'], $config['custom']['cc'] ?? [])),
            'customBcc' => implode(', ', array_map([AddressParser::class, 'format'], $config['custom']['bcc'] ?? [])),
            'sendToGroups' => !empty($config['groups']['enabled']),
            'groupIds' => $config['groups']['ids'] ?? [],
            'sendToUsers' => !empty($config['users']['enabled']),
            'userIds' => $config['users']['ids'] ?? [],
            'sendToCondition' => !empty($config['condition']['enabled']),
            'userConditionConfig' => $config['condition']['config'] ?? [],
            'respectUnsubscribes' => (bool)($config['respectUnsubscribes'] ?? true),
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
            'condition' => [
                'enabled' => $this->sendToCondition,
                'config' => $this->sendToCondition ? ($this->getUserCondition()?->getConfig() ?? []) : [],
            ],
            'respectUnsubscribes' => $this->respectUnsubscribes,
        ];
    }

    /**
     * Returns the user condition, creating an empty one if there’s no config yet.
     *
     * Returns `null` if the posted config is invalid.
     */
    public function getUserCondition(): ?UserCondition
    {
        if ($this->_userCondition === null) {
            try {
                $config = $this->userConditionConfig;
                $condition = $config
                    ? Craft::$app->getConditions()->createCondition(['class' => UserCondition::class] + $config)
                    : User::createCondition();
                $this->_userCondition = $condition instanceof UserCondition ? $condition : false;
            } catch (\Throwable $e) {
                Craft::warning('Invalid user condition: ' . $e->getMessage(), __METHOD__);
                $this->_userCondition = false;
            }
        }

        return $this->_userCondition ?: null;
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
            'sendAt' => Craft::t('mailer', 'Send Later'),
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
            [['sendAt'], fn() => $this->validateSendAt()],
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

    private function validateSendAt(): void
    {
        if ($this->sendAt === null) {
            return;
        }

        $timestamp = $this->sendAt->getTimestamp();

        if ($timestamp < time() + 60) {
            $this->addError('sendAt', Craft::t('mailer', 'Choose a time in the future, or leave this blank to send now.'));
        } elseif ($timestamp > time() + 366 * 86400) {
            $this->addError('sendAt', Craft::t('mailer', 'Emails can’t be scheduled more than a year ahead.'));
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
        if (!$this->sendToCustom && !$this->sendToGroups && !$this->sendToUsers && !$this->sendToCondition) {
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

        if ($this->sendToCondition) {
            $condition = $this->getUserCondition();

            if (!$condition) {
                $this->addError('userCondition', Craft::t('mailer', 'The conditions couldn’t be read. Please set them again.'));
            } elseif (!$condition->getConditionRules()) {
                $this->addError('userCondition', Craft::t('mailer', 'Add at least one rule.'));
            }
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
