<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\models;

use craft\base\Model;
use craft\helpers\DateTimeHelper;
use craft\helpers\Json;

/**
 * A resolved recipient: one email to one user, or the single custom (To/CC/BCC) email.
 */
class RecipientData extends Model
{
    public const TYPE_CUSTOM = 'custom';
    public const TYPE_USER = 'user';

    public const SOURCE_CUSTOM = 'custom';
    public const SOURCE_GROUP = 'group';
    public const SOURCE_ADMINS = 'admins';
    public const SOURCE_USER = 'user';
    public const SOURCE_CONDITION = 'condition';

    public const STATUS_PENDING = 'pending';
    public const STATUS_SENDING = 'sending';
    public const STATUS_SENT = 'sent';
    public const STATUS_FAILED = 'failed';
    public const STATUS_SKIPPED = 'skipped';

    public ?int $id = null;

    public ?int $sendId = null;

    public string $type = self::TYPE_USER;

    public ?int $userId = null;

    /**
     * @var string The recipient’s email address (the first To address for custom emails).
     */
    public string $email = '';

    public ?string $name = null;

    /**
     * @var array{to: array, cc: array, bcc: array}|null The custom email’s addresses.
     */
    public ?array $addresses = null;

    public string $source = self::SOURCE_USER;

    public string $status = self::STATUS_PENDING;

    /**
     * @var string|null Why the recipient was skipped, or why sending failed.
     */
    public ?string $error = null;

    public mixed $dateSent = null;

    /**
     * Creates a recipient from a database row.
     */
    public static function fromRow(array $row): self
    {
        $addresses = $row['addresses'] ?? null;

        return new self([
            'id' => (int)$row['id'],
            'sendId' => (int)$row['sendId'],
            'type' => $row['type'],
            'userId' => $row['userId'] ? (int)$row['userId'] : null,
            'email' => $row['email'],
            'name' => $row['name'],
            'addresses' => is_string($addresses) ? Json::decodeIfJson($addresses) : $addresses,
            'source' => $row['source'],
            'status' => $row['status'],
            'error' => $row['error'],
            // Database dates are UTC
            'dateSent' => !empty($row['dateSent']) ? (DateTimeHelper::toDateTime($row['dateSent']) ?: null) : null,
        ]);
    }

    /**
     * Returns whether this is the custom (To/CC/BCC) email.
     */
    public function getIsCustom(): bool
    {
        return $this->type === self::TYPE_CUSTOM;
    }

    /**
     * Returns the email addresses of this recipient, for display.
     */
    public function getDisplayAddress(): string
    {
        if ($this->getIsCustom() && $this->addresses) {
            $to = array_column($this->addresses['to'] ?? [], 'email');
            $extra = count($this->addresses['cc'] ?? []) + count($this->addresses['bcc'] ?? []);

            return implode(', ', $to) . ($extra ? sprintf(' (+%d CC/BCC)', $extra) : '');
        }

        return $this->email;
    }

    /**
     * Returns the row to insert into the recipients table.
     */
    public function toRow(int $sendId): array
    {
        return [
            'sendId' => $sendId,
            'type' => $this->type,
            'userId' => $this->userId,
            'email' => mb_substr($this->email, 0, 255),
            'name' => $this->name !== null ? mb_substr($this->name, 0, 255) : null,
            'addresses' => $this->addresses ? Json::encode($this->addresses) : null,
            'source' => $this->source,
            'status' => $this->status,
            'error' => $this->error,
        ];
    }
}
