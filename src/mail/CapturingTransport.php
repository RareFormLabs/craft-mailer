<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\mail;

use Symfony\Component\Mailer\Envelope;
use Symfony\Component\Mailer\SentMessage;
use Symfony\Component\Mailer\Transport\TransportInterface;
use Symfony\Component\Mime\RawMessage;
use Throwable;

/**
 * Wraps a mail transport to remember why a message was rejected.
 *
 * Craft’s mailer catches transport exceptions and only returns `false`, so without this the reason
 * (e.g. “550 Mailbox unavailable”) never reaches Mailer’s logs.
 */
class CapturingTransport implements TransportInterface
{
    /**
     * @var string|null The error from the last failed send.
     */
    public ?string $lastError = null;

    public function __construct(
        public readonly TransportInterface $inner,
    ) {
    }

    /**
     * @inheritdoc
     */
    public function send(RawMessage $message, ?Envelope $envelope = null): ?SentMessage
    {
        $this->lastError = null;

        try {
            return $this->inner->send($message, $envelope);
        } catch (Throwable $e) {
            $this->lastError = trim($e->getMessage()) ?: get_class($e);
            throw $e;
        }
    }

    public function __toString(): string
    {
        return (string)$this->inner;
    }
}
