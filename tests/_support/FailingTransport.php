<?php

use Symfony\Component\Mailer\Envelope;
use Symfony\Component\Mailer\Exception\TransportException;
use Symfony\Component\Mailer\SentMessage;
use Symfony\Component\Mailer\Transport\TransportInterface;
use Symfony\Component\Mime\RawMessage;

/**
 * A mail transport that rejects every message, for testing failure handling.
 */
class FailingTransport implements TransportInterface
{
    public function send(RawMessage $message, ?Envelope $envelope = null): ?SentMessage
    {
        throw new TransportException('550 Mailbox unavailable');
    }

    public function __toString(): string
    {
        return 'failing://';
    }
}
