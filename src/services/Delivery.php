<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\services;

use Craft;
use craft\elements\User;
use craft\mail\Message;
use rareform\mailer\events\SendEmailEvent;
use rareform\mailer\mail\CapturingTransport;
use rareform\mailer\models\ComposeForm;
use rareform\mailer\models\RecipientData;
use rareform\mailer\models\Send;
use rareform\mailer\Plugin;
use Throwable;
use yii\base\Component;

/**
 * Builds and sends individual emails.
 */
class Delivery extends Component
{
    /**
     * @event SendEmailEvent The event triggered before an email is sent. Set `isValid` to `false` to skip it.
     */
    public const EVENT_BEFORE_SEND_EMAIL = 'beforeSendEmail';

    /**
     * @event SendEmailEvent The event triggered after an email is sent (or fails to send).
     */
    public const EVENT_AFTER_SEND_EMAIL = 'afterSendEmail';

    /**
     * The error recorded when the mail transport rejects a message without an exception.
     */
    private const TRANSPORT_ERROR = 'The mail transport couldn’t send this email. Check the Craft logs for details.';

    /**
     * Sends a send’s email to one recipient.
     *
     * @return array{status: string, error: string|null} The resulting recipient status (`sent`, `failed` or `skipped`)
     */
    public function sendToRecipient(Send $send, RecipientData $recipient, ?User $user = null): array
    {
        $plugin = Plugin::getInstance();
        $renderer = $plugin->getRenderer();
        $safeMode = (bool)($send->settingsSnapshot['safeMode'] ?? $plugin->getSettings()->safeMode);

        try {
            $variables = $renderer->getContext($user, $recipient);
            $unsubscribeUrl = $this->usesUnsubscribeLinks($recipient, (bool)($send->recipientsConfig['respectUnsubscribes'] ?? true))
                ? $plugin->getUnsubscribes()->getUrl($recipient->email, $send->id)
                : null;
            [$htmlTemplate, $textTemplate] = $this->withUnsubscribeFooter((string)$send->bodyHtml, (string)$send->bodyText, $unsubscribeUrl !== null);
            $variables['unsubscribeUrl'] = $unsubscribeUrl ?? '';

            $message = $this->buildMessage(
                $send->fromEmail,
                $send->fromName,
                $send->replyTo,
                $this->recipientAddresses($recipient),
                $renderer->personalize($send->subject, $variables, false, $safeMode),
                $renderer->personalize($htmlTemplate, $variables, true, $safeMode),
                $renderer->personalize($textTemplate, $variables, false, $safeMode),
                $send->attachments,
                $unsubscribeUrl,
            );
        } catch (Throwable $e) {
            Craft::error("Mailer couldn’t build the email for {$recipient->email}: {$e->getMessage()}", __METHOD__);

            return ['status' => RecipientData::STATUS_FAILED, 'error' => $e->getMessage()];
        }

        return $this->deliver($message, $recipient, $send, $variables);
    }

    /**
     * Renders a preview of a compose form, personalized for a recipient.
     *
     * @param ComposeForm $form
     * @param User $currentUser The user previewing; used when no recipient is given
     * @param RecipientData|null $recipient The recipient to personalize the preview for
     * @param User|null $recipientUser The recipient’s user account, if any
     * @return array{subject: string, html: string, text: string, previewAs: string, emptyVariables: string[]}
     * @throws Throwable
     */
    public function preview(ComposeForm $form, User $currentUser, ?RecipientData $recipient = null, ?User $recipientUser = null): array
    {
        $renderer = Plugin::getInstance()->getRenderer();

        if ($recipient === null) {
            $recipient = $this->currentUserRecipient($currentUser);
            $recipientUser = $currentUser;
        }

        $variables = $renderer->getContext($recipientUser, $recipient);
        $content = $form->getBodyContent();
        // The preview’s unsubscribe link goes nowhere, so clicking it can’t unsubscribe anyone
        [$htmlTemplate, $textTemplate] = $this->withUnsubscribeFooter(
            Plugin::getInstance()->getImages()->prepareForDisplay($renderer->contentToHtml($content)),
            $renderer->contentToText($content),
            $this->usesUnsubscribeLinks($recipient, $form->respectUnsubscribes),
        );
        $variables['unsubscribeUrl'] = $this->usesUnsubscribeLinks($recipient, $form->respectUnsubscribes) ? '#' : '';
        $html = $renderer->personalize($htmlTemplate, $variables, true);

        $emptyVariables = array_values(array_filter(
            $renderer->getUsedTokens($form->subject . "\n" . $textTemplate),
            fn(string $token) => $renderer->getValue($variables, $token) === '',
        ));

        $name = $recipientUser?->getFullName() ?: $recipient->name;

        return [
            'subject' => self::singleLine($renderer->personalize($form->subject, $variables, false)),
            'html' => $renderer->wrap($html, [
                'fromEmail' => $form->fromEmail,
                'fromName' => $form->fromName,
                'replyToEmail' => $form->replyTo ?: null,
            ]),
            'text' => $renderer->personalize($textTemplate, $variables, false),
            'previewAs' => $name ? sprintf('%s <%s>', $name, $recipient->email) : $recipient->email,
            'emptyVariables' => $emptyVariables,
        ];
    }

    /**
     * Sends a compose form as a test email to the given user.
     *
     * @return array{status: string, error: string|null}
     */
    public function sendTest(ComposeForm $form, User $user): array
    {
        $plugin = Plugin::getInstance();
        $renderer = $plugin->getRenderer();
        $attachmentsService = $plugin->getAttachments();
        $recipient = $this->currentUserRecipient($user);
        $key = $attachmentsService->createTempKey();

        try {
            $variables = $renderer->getContext($user, $recipient);
            $content = $form->getBodyContent();
            $attachments = $attachmentsService->store($form, $key);
            $unsubscribeUrl = $this->usesUnsubscribeLinks($recipient, $form->respectUnsubscribes)
                ? $plugin->getUnsubscribes()->getUrl((string)$user->email)
                : null;
            [$html, $text] = $this->withUnsubscribeFooter(
                $plugin->getImages()->prepareForEmail(
                    $renderer->contentToHtml($content),
                    $form->embedImages ? Attachments::cidsByAssetId($attachments) : null,
                ),
                $renderer->contentToText($content),
                $unsubscribeUrl !== null,
            );
            $variables['unsubscribeUrl'] = $unsubscribeUrl ?? '';
            $message = $this->buildMessage(
                $form->fromEmail,
                $form->fromName,
                $form->replyTo ?: null,
                ['to' => [(string)$user->email => $user->getFullName() ?: null]],
                Craft::t('mailer', '[Test]') . ' ' . $renderer->personalize($form->subject, $variables, false),
                $renderer->personalize($html, $variables, true),
                $renderer->personalize($text, $variables, false),
                $attachments,
                $unsubscribeUrl,
            );

            return $this->deliver($message, $recipient, null, $variables);
        } catch (Throwable $e) {
            return ['status' => RecipientData::STATUS_FAILED, 'error' => $e->getMessage()];
        } finally {
            $attachmentsService->delete($key);
        }
    }

    /**
     * Builds a message.
     *
     * @param array{to: array<string, string|null>, cc?: array<string, string|null>, bcc?: array<string, string|null>} $addresses
     * @param string $htmlBody The personalized (unwrapped) HTML body
     * @throws Throwable
     */
    private function buildMessage(
        string $fromEmail,
        ?string $fromName,
        ?string $replyTo,
        array $addresses,
        string $subject,
        string $htmlBody,
        string $textBody,
        array $attachments,
        ?string $unsubscribeUrl = null,
    ): Message {
        $plugin = Plugin::getInstance();

        /** @var Message $message */
        $message = Craft::$app->getMailer()->compose();
        $message->setFrom($fromName ? [$fromEmail => $fromName] : $fromEmail);

        if ($replyTo) {
            $message->setReplyTo($replyTo);
        }

        $message->setTo(self::addressList($addresses['to']));

        if (!empty($addresses['cc'])) {
            $message->setCc(self::addressList($addresses['cc']));
        }

        if (!empty($addresses['bcc'])) {
            $message->setBcc(self::addressList($addresses['bcc']));
        }

        $message->setSubject(self::singleLine($subject));
        $message->setHtmlBody($plugin->getRenderer()->wrap($htmlBody, [
            'fromEmail' => $fromEmail,
            'fromName' => $fromName,
            'replyToEmail' => $replyTo,
        ]));
        $message->setTextBody($textBody);

        $plugin->getAttachments()->attach($message, $attachments);

        if ($unsubscribeUrl !== null) {
            // One-click unsubscribes (RFC 8058), expected by Gmail and Yahoo for bulk email
            $message->addHeader('List-Unsubscribe', "<$unsubscribeUrl>");
            $message->addHeader('List-Unsubscribe-Post', 'List-Unsubscribe=One-Click');
        }

        return $message;
    }

    /**
     * Sends a message, triggering the before/after events.
     *
     * @return array{status: string, error: string|null}
     */
    private function deliver(Message $message, RecipientData $recipient, ?Send $send, array $variables): array
    {
        $event = new SendEmailEvent([
            'message' => $message,
            'recipient' => $recipient,
            'send' => $send,
            'variables' => $variables,
        ]);
        $this->trigger(self::EVENT_BEFORE_SEND_EMAIL, $event);

        if (!$event->isValid) {
            return ['status' => RecipientData::STATUS_SKIPPED, 'error' => $event->error ?? Craft::t('mailer', 'Skipped by a plugin')];
        }

        $error = null;
        $transport = $this->captureTransportErrors();

        try {
            $success = Craft::$app->getMailer()->send($message);

            if (!$success) {
                $error = $transport->lastError ?? Craft::t('mailer', self::TRANSPORT_ERROR);
            }
        } catch (Throwable $e) {
            $success = false;
            $error = $e->getMessage();
            Craft::error("Mailer couldn’t send to {$recipient->email}: {$error}", __METHOD__);
        }

        if ($this->hasEventHandlers(self::EVENT_AFTER_SEND_EMAIL)) {
            $this->trigger(self::EVENT_AFTER_SEND_EMAIL, new SendEmailEvent([
                'message' => $message,
                'recipient' => $recipient,
                'send' => $send,
                'variables' => $variables,
                'success' => $success,
                'error' => $error,
            ]));
        }

        return [
            'status' => $success ? RecipientData::STATUS_SENT : RecipientData::STATUS_FAILED,
            'error' => $error,
        ];
    }

    /**
     * Returns whether an email to this recipient should include an unsubscribe link.
     *
     * Only emails to users get one (not the custom email), and not when unsubscribes are being ignored.
     */
    private function usesUnsubscribeLinks(RecipientData $recipient, bool $respectUnsubscribes): bool
    {
        return Plugin::getInstance()->getSettings()->unsubscribeLinks && $respectUnsubscribes && !$recipient->getIsCustom();
    }

    /**
     * Adds an unsubscribe line to the end of the message, unless it already uses `{{ unsubscribeUrl }}`.
     *
     * @return array{0: string, 1: string} The HTML and text templates
     */
    private function withUnsubscribeFooter(string $html, string $text, bool $enabled): array
    {
        if (!$enabled || preg_match('/\{\{[^}]*\bunsubscribeUrl\b/', $html . $text)) {
            return [$html, $text];
        }

        $prompt = Craft::t('mailer', 'Don’t want to receive these emails?');
        $label = Craft::t('mailer', 'Unsubscribe');

        $html .= sprintf(
            '<p style="margin: 32px 0 0; font-size: 12px; line-height: 1.5; color: #6b7280;">%s <a href="{{ unsubscribeUrl }}" style="color: #6b7280;">%s</a></p>',
            htmlspecialchars($prompt, ENT_QUOTES),
            htmlspecialchars($label, ENT_QUOTES),
        );
        $text .= "\n\n----\n$prompt $label: {{ unsubscribeUrl }}";

        return [$html, $text];
    }

    /**
     * Wraps the mailer’s transport so rejection reasons can be recorded. Returns `null` if that isn’t possible.
     */
    private function captureTransportErrors(): ?CapturingTransport
    {
        $mailer = Craft::$app->getMailer();

        if (!$mailer instanceof \yii\symfonymailer\Mailer) {
            return null;
        }

        try {
            // The transport getter is private to the base Symfony mailer class
            $transport = \Closure::bind(fn() => $this->getTransport(), $mailer, \yii\symfonymailer\Mailer::class)();
        } catch (Throwable) {
            return null;
        }

        if ($transport instanceof CapturingTransport) {
            return $transport;
        }

        $capturing = new CapturingTransport($transport);
        $mailer->setTransport($capturing);

        return $capturing;
    }

    /**
     * @return array{to: array<string, string|null>, cc?: array<string, string|null>, bcc?: array<string, string|null>}
     */
    private function recipientAddresses(RecipientData $recipient): array
    {
        if ($recipient->getIsCustom() && $recipient->addresses) {
            $map = fn(array $list) => array_column($list, 'name', 'email');

            return [
                'to' => $map($recipient->addresses['to'] ?? []),
                'cc' => $map($recipient->addresses['cc'] ?? []),
                'bcc' => $map($recipient->addresses['bcc'] ?? []),
            ];
        }

        return ['to' => [$recipient->email => $recipient->name]];
    }

    private function currentUserRecipient(User $user): RecipientData
    {
        return new RecipientData([
            'type' => RecipientData::TYPE_USER,
            'userId' => $user->id,
            'email' => (string)$user->email,
            'name' => $user->getFullName() ?: null,
            'source' => RecipientData::SOURCE_USER,
        ]);
    }

    /**
     * Converts an email => name map into the format Craft’s mailer expects (names omitted when empty).
     *
     * @param array<string, string|null> $addresses
     * @return array<int|string, string>
     */
    private static function addressList(array $addresses): array
    {
        $list = [];

        foreach ($addresses as $email => $name) {
            if ($name) {
                $list[$email] = $name;
            } else {
                $list[] = $email;
            }
        }

        return $list;
    }

    private static function singleLine(string $value): string
    {
        return trim(preg_replace('/[\r\n]+/', ' ', $value) ?? $value);
    }
}
