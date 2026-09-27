<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\controllers;

use Craft;
use craft\elements\Asset;
use craft\elements\User;
use craft\helpers\App;
use craft\web\Controller;
use rareform\mailer\models\ComposeForm;
use rareform\mailer\models\RecipientData;
use rareform\mailer\Plugin;
use rareform\mailer\services\Saved;
use rareform\mailer\web\assets\cp\MailerCpAsset;
use Throwable;
use yii\web\ForbiddenHttpException;
use yii\web\Response;

/**
 * Compose screen: send, preview, test send and recipient counts.
 */
class ComposeController extends Controller
{
    /**
     * @inheritdoc
     */
    public function beforeAction($action): bool
    {
        if (!parent::beforeAction($action)) {
            return false;
        }

        $this->requireCpRequest();
        $this->requirePermission(Plugin::PERMISSION_SEND);

        return true;
    }

    /**
     * Renders the compose screen.
     *
     * @param int|null $template The ID of a previous send to use as a template
     * @param ComposeForm|null $form A form that failed validation
     */
    public function actionIndex(?int $template = null, ?int $draft = null, ?ComposeForm $form = null): Response
    {
        $plugin = Plugin::getInstance();
        $templateNotice = null;
        $draftId = $form !== null ? ((int)$this->request->getBodyParam('draftId') ?: null) : null;

        if ($form === null && $draft !== null) {
            $data = $plugin->getSaved()->getData($draft, Saved::KIND_DRAFT, $this->user()->id);

            if ($data !== null) {
                $form = ComposeForm::fromData($data);
                $draftId = $draft;
            }
        }

        if ($form === null && $template !== null) {
            $this->requirePermission(Plugin::PERMISSION_VIEW_LOGS);
            $send = $plugin->getSends()->getSendById($template);

            if ($send) {
                $form = ComposeForm::fromSend($send);

                if (array_filter($send->attachments, fn($attachment) => ($attachment['source'] ?? null) === 'upload')) {
                    $templateNotice = Craft::t('mailer', 'Uploaded attachments aren’t kept, so you’ll need to upload them again.');
                }
            }
        }

        $form ??= new ComposeForm(['embedImages' => $plugin->getSettings()->embedImages]);

        if (!$this->canChangeSender() || ($form->fromEmail === '' && $form->fromName === '')) {
            [$form->fromEmail, $form->fromName] = $this->defaultSender();
        }

        $this->getView()->registerAssetBundle(MailerCpAsset::class);

        return $this->renderTemplate('mailer/compose/index', [
            'form' => $form,
            'settings' => $plugin->getSettings(),
            'variables' => $plugin->getRenderer()->getVariables(),
            'groups' => Craft::$app->getUserGroups()->getAllGroups(),
            'users' => $form->userIds ? User::find()->id($form->userIds)->status(null)->fixedOrder()->all() : [],
            'assets' => $form->assetIds ? Asset::find()->id($form->assetIds)->status(null)->fixedOrder()->all() : [],
            'userCondition' => $this->prepareCondition($form),
            'canChangeSender' => $this->canChangeSender(),
            'canExport' => Craft::$app->getUser()->checkPermission(Plugin::PERMISSION_EXPORT),
            'testToEmailAddress' => $this->testToEmailAddress(),
            'templateNotice' => $templateNotice,
            'draftId' => $draftId,
            'templates' => $plugin->getSaved()->getAll(Saved::KIND_TEMPLATE),
            'canManageTemplates' => Craft::$app->getUser()->checkPermission(Plugin::PERMISSION_MANAGE_TEMPLATES),
        ]);
    }

    /**
     * Validates the form, creates the send and queues it.
     */
    public function actionSend(): ?Response
    {
        $this->requirePostRequest();

        $plugin = Plugin::getInstance();
        $form = $this->buildForm();
        $recipients = [];

        if ($this->validateForm($form)) {
            $recipients = $plugin->getRecipients()->resolve($form);
            $summary = $plugin->getRecipients()->summarize($recipients);

            if ($summary['sendable'] === 0) {
                $form->addError('recipients', Craft::t('mailer', 'None of the selected recipients can be emailed.'));
            }
        }

        if ($form->hasErrors()) {
            return $this->failure($form);
        }

        try {
            $send = $plugin->getSends()->create($form, $recipients, $this->user());
        } catch (Throwable $e) {
            Craft::$app->getErrorHandler()->logException($e);
            $form->addError('recipients', $e->getMessage());

            return $this->failure($form, Craft::t('mailer', 'Couldn’t queue the email.'));
        }

        if (!$send) {
            return $this->failure($form, Craft::t('mailer', 'The email was prevented from sending.'));
        }

        // The draft has been sent
        if ($draftId = (int)$this->request->getBodyParam('draftId')) {
            $plugin->getSaved()->delete($draftId, Saved::KIND_DRAFT, $this->user()->id);
        }

        $message = $send->scheduledFor
            ? Craft::t('mailer', 'Scheduled “{subject}” for {date}.', [
                'subject' => $send->subject,
                'date' => Craft::$app->getFormatter()->asDatetime($send->scheduledFor, 'short'),
            ])
            : Craft::t('mailer', 'Queued “{subject}” for {num, number} {num, plural, =1{recipient} other{recipients}}.', [
                'subject' => $send->subject,
                'num' => $send->totalRecipients - $send->skippedCount,
            ]);

        if (Craft::$app->getUser()->checkPermission(Plugin::PERMISSION_VIEW_LOGS)) {
            return $this->asSuccess($message, ['sendId' => $send->id], $send->getCpUrl());
        }

        return $this->asSuccess($message, ['sendId' => $send->id], 'mailer');
    }

    /**
     * Returns the recipient counts for the current selection.
     */
    public function actionCountRecipients(): Response
    {
        $this->requirePostRequest();
        $this->requireAcceptsJson();

        $plugin = Plugin::getInstance();
        $form = $this->buildForm();
        $recipients = $plugin->getRecipients()->resolve($form);

        return $this->asJson($plugin->getRecipients()->summarize($recipients) + [
            'testToEmailAddress' => $this->testToEmailAddress(),
        ]);
    }

    /**
     * Renders a preview of the message for the current user.
     */
    public function actionPreview(): Response
    {
        $this->requirePostRequest();
        $this->requireAcceptsJson();

        $plugin = Plugin::getInstance();
        $form = $this->buildForm();
        $form->validate(['subject', 'bodyJson']);
        $plugin->getRenderer()->validateForm($form, $this->user());

        if ($form->hasErrors()) {
            return $this->asModelFailure($form, Craft::t('mailer', 'The message can’t be previewed.'), 'form');
        }

        // Preview as the first person who’ll receive the email, preferring users over the custom email
        $recipients = array_filter(
            $plugin->getRecipients()->resolve($form),
            fn(RecipientData $recipient) => $recipient->status !== RecipientData::STATUS_SKIPPED,
        );
        usort($recipients, fn(RecipientData $a, RecipientData $b) => (int)$a->getIsCustom() <=> (int)$b->getIsCustom());
        $recipient = $recipients[0] ?? null;
        $recipientUser = $recipient?->userId ? User::find()->id($recipient->userId)->status(null)->one() : null;

        try {
            return $this->asJson($plugin->getDelivery()->preview($form, $this->user(), $recipient, $recipientUser));
        } catch (Throwable $e) {
            return $this->asFailure($e->getMessage());
        }
    }

    /**
     * Sends the message to the current user.
     */
    public function actionTestSend(): Response
    {
        $this->requirePostRequest();
        $this->requireAcceptsJson();

        $plugin = Plugin::getInstance();
        $user = $this->user();
        $form = $this->buildForm();
        $form->validate(['subject', 'bodyJson', 'fromName', 'fromEmail', 'replyTo']);
        $plugin->getRenderer()->validateForm($form, $user);
        $plugin->getImages()->validate($form);
        $plugin->getAttachments()->validate($form);

        if ($form->hasErrors()) {
            return $this->asModelFailure($form, Craft::t('mailer', 'The test email couldn’t be sent.'), 'form');
        }

        if (!$user->email) {
            return $this->asFailure(Craft::t('mailer', 'Your account doesn’t have an email address.'));
        }

        $result = $plugin->getDelivery()->sendTest($form, $user);

        if ($result['status'] !== RecipientData::STATUS_SENT) {
            return $this->asFailure(Craft::t('mailer', 'The test email couldn’t be sent: {error}', ['error' => $result['error']]));
        }

        return $this->asSuccess(Craft::t('mailer', 'Test email sent to {email}.', [
            'email' => $this->testToEmailAddress() ?? $user->email,
        ]));
    }

    /**
     * Returns the details needed to insert an image asset into the message.
     */
    public function actionImage(): Response
    {
        $this->requirePostRequest();
        $this->requireAcceptsJson();

        $assetId = (int)$this->request->getRequiredBodyParam('assetId');
        $asset = Asset::find()->id($assetId)->status(null)->one();

        if (!$asset || $asset->kind !== Asset::KIND_IMAGE) {
            return $this->asFailure(Craft::t('mailer', 'That asset isn’t an image.'));
        }

        return $this->asJson(Plugin::getInstance()->getImages()->getEditorData($asset));
    }

    private function prepareCondition(ComposeForm $form): \craft\elements\conditions\users\UserCondition
    {
        $condition = $form->getUserCondition() ?? User::createCondition();
        $condition->mainTag = 'div';
        $condition->id = 'mailer-user-condition';
        // Inputs are named `userCondition[…]`
        $condition->name = 'userCondition';
        $condition->addRuleLabel = Craft::t('mailer', 'Add a rule');

        return $condition;
    }

    /**
     * Builds the compose form from the request, enforcing the sender if the user can’t change it.
     */
    private function buildForm(): ComposeForm
    {
        $form = ComposeForm::fromRequest();

        if (!$this->canChangeSender()) {
            [$form->fromEmail, $form->fromName] = $this->defaultSender();
        }

        return $form;
    }

    private function validateForm(ComposeForm $form): bool
    {
        $plugin = Plugin::getInstance();
        $form->validate();
        $plugin->getRenderer()->validateForm($form, $this->user());
        $plugin->getImages()->validate($form);
        $plugin->getAttachments()->validate($form);

        return !$form->hasErrors();
    }

    private function failure(ComposeForm $form, ?string $message = null): ?Response
    {
        $message ??= Craft::t('mailer', 'Couldn’t send the email.');

        if ($form->uploads && !$this->request->getAcceptsJson()) {
            $message .= ' ' . Craft::t('mailer', 'Please upload your attachments again.');
            $form->uploads = [];
        }

        return $this->asModelFailure($form, $message, 'form');
    }

    private function canChangeSender(): bool
    {
        return Craft::$app->getUser()->checkPermission(Plugin::PERMISSION_CHANGE_SENDER);
    }

    /**
     * @return array{0: string, 1: string}
     */
    private function defaultSender(): array
    {
        $settings = App::mailSettings();

        return [(string)App::parseEnv($settings->fromEmail), (string)App::parseEnv($settings->fromName)];
    }

    /**
     * Returns the `testToEmailAddress` config setting as a comma-separated list, if set.
     */
    private function testToEmailAddress(): ?string
    {
        $addresses = array_keys(Craft::$app->getConfig()->getGeneral()->getTestToEmailAddress());

        return $addresses ? implode(', ', $addresses) : null;
    }

    private function user(): User
    {
        $user = static::currentUser();

        if (!$user) {
            throw new ForbiddenHttpException('User not logged in.');
        }

        return $user;
    }
}
