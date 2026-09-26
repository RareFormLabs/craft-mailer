<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\services;

use Craft;
use craft\elements\User;
use craft\mail\Message;
use rareform\mailer\events\SendEmailEvent;
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
            $message = $this->buildMessage(
                $send->fromEmail,
                $send->fromName,
                $send->replyTo,
                $this->recipientAddresses($recipient),
                $renderer->personalize($send->subject, $variables, false, $safeMode),
                $renderer->personalize((string)$send->bodyHtml, $variables, true, $safeMode),
                $renderer->personalize((string)$send->bodyText, $variables, false, $safeMode),
                $send->attachments,
            );
        } catch (Throwable $e) {
            Craft::error("Mailer couldn’t build the email for {$recipient->email}: {$e->getMessage()}", __METHOD__);

            return ['status' => RecipientData::STATUS_FAILED, 'error' => $e->getMessage()];
        }

        return $this->deliver($message, $recipient, $send, $variables);
    }

    /**
     * Renders a preview of a compose form for the given user.
     *
     * @return array{subject: string, html: string, text: string}
     * @throws Throwable
     */
    public function preview(ComposeForm $form, User $user): array
    {
        $renderer = Plugin::getInstance()->getRenderer();
        $recipient = $this->currentUserRecipient($user);
        $variables = $renderer->getContext($user, $recipient);
        $content = $form->getBodyContent();
        $html = $renderer->personalize($renderer->contentToHtml($content), $variables, true);

        return [
            'subject' => self::singleLine($renderer->personalize($form->subject, $variables, false)),
            'html' => $renderer->wrap($html, [
                'fromEmail' => $form->fromEmail,
                'fromName' => $form->fromName,
                'replyToEmail' => $form->replyTo ?: null,
            ]),
            'text' => $renderer->personalize($renderer->contentToText($content), $variables, false),
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
            $message = $this->buildMessage(
                $form->fromEmail,
                $form->fromName,
                $form->replyTo ?: null,
                ['to' => [(string)$user->email => $user->getFullName() ?: null]],
                Craft::t('mailer', '[Test]') . ' ' . $renderer->personalize($form->subject, $variables, false),
                $renderer->personalize($renderer->contentToHtml($content), $variables, true),
                $renderer->personalize($renderer->contentToText($content), $variables, false),
                $attachmentsService->store($form, $key),
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

        try {
            $success = Craft::$app->getMailer()->send($message);

            if (!$success) {
                $error = Craft::t('mailer', self::TRANSPORT_ERROR);
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
