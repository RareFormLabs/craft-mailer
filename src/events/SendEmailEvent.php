<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\events;

use craft\events\CancelableEvent;
use craft\mail\Message;
use rareform\mailer\models\RecipientData;
use rareform\mailer\models\Send;

/**
 * Triggered before (cancelable) and after each individual email is sent.
 */
class SendEmailEvent extends CancelableEvent
{
    public Message $message;

    public RecipientData $recipient;

    /**
     * @var Send|null The send, or `null` for test emails.
     */
    public ?Send $send = null;

    /**
     * @var array The variables the message was rendered with.
     */
    public array $variables = [];

    /**
     * @var bool Whether the email was sent (after-send only).
     */
    public bool $success = false;

    /**
     * @var string|null The error message, if sending failed (after-send only).
     */
    public ?string $error = null;
}
