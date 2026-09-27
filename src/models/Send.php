<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\models;

use Craft;
use craft\base\Model;
use craft\elements\User;
use craft\helpers\DateTimeHelper;
use craft\helpers\Json;
use craft\helpers\UrlHelper;
use DateTime;
use rareform\mailer\records\SendRecord;

/**
 * A send (one compose submission) and its delivery progress.
 */
class Send extends Model
{
    public const STATUS_SCHEDULED = 'scheduled';
    public const STATUS_QUEUED = 'queued';
    public const STATUS_RUNNING = 'running';
    public const STATUS_PAUSED = 'paused';
    public const STATUS_FINISHED = 'finished';
    public const STATUS_PARTIAL = 'partial';
    public const STATUS_FAILED = 'failed';
    public const STATUS_CANCELLED = 'cancelled';

    /**
     * Statuses of sends that are still in progress.
     */
    public const ACTIVE_STATUSES = [self::STATUS_SCHEDULED, self::STATUS_QUEUED, self::STATUS_RUNNING, self::STATUS_PAUSED];

    public ?int $id = null;

    public ?string $uid = null;

    public ?int $senderId = null;

    public string $status = self::STATUS_QUEUED;

    public ?string $description = null;

    public ?string $fromName = null;

    public string $fromEmail = '';

    public ?string $replyTo = null;

    public string $subject = '';

    public ?string $bodyJson = null;

    public ?string $bodyHtml = null;

    public ?string $bodyText = null;

    public array $recipientsConfig = [];

    /**
     * @var array<int, array{source: string, assetId?: int|null, filename: string, path: string, mimeType: string|null, size: int}>
     */
    public array $attachments = [];

    public array $settingsSnapshot = [];

    public int $totalRecipients = 0;

    public int $sentCount = 0;

    public int $failedCount = 0;

    public int $skippedCount = 0;

    /**
     * @var DateTime|null When a scheduled send starts.
     */
    public ?DateTime $scheduledFor = null;

    /**
     * @var string|null Why the send is paused or failed, if relevant.
     */
    public ?string $statusMessage = null;

    public ?DateTime $dateStarted = null;

    public ?DateTime $dateFinished = null;

    public ?DateTime $dateCreated = null;

    public ?DateTime $dateUpdated = null;

    /**
     * Creates a send from a record.
     */
    public static function fromRecord(SendRecord $record): self
    {
        $decode = fn($value) => is_string($value) ? (Json::decodeIfJson($value) ?: []) : ($value ?: []);

        return new self([
            'id' => (int)$record->id,
            'uid' => $record->uid,
            'senderId' => $record->senderId ? (int)$record->senderId : null,
            'status' => $record->status,
            'description' => $record->description,
            'fromName' => $record->fromName,
            'fromEmail' => $record->fromEmail,
            'replyTo' => $record->replyTo,
            'subject' => $record->subject,
            'bodyJson' => $record->bodyJson,
            'bodyHtml' => $record->bodyHtml,
            'bodyText' => $record->bodyText,
            'recipientsConfig' => $decode($record->recipientsConfig),
            'attachments' => $decode($record->attachments),
            'settingsSnapshot' => $decode($record->settingsSnapshot),
            'totalRecipients' => (int)$record->totalRecipients,
            'sentCount' => (int)$record->sentCount,
            'failedCount' => (int)$record->failedCount,
            'skippedCount' => (int)$record->skippedCount,
            'scheduledFor' => DateTimeHelper::toDateTime($record->scheduledFor) ?: null,
            'statusMessage' => $record->statusMessage,
            'dateStarted' => DateTimeHelper::toDateTime($record->dateStarted) ?: null,
            'dateFinished' => DateTimeHelper::toDateTime($record->dateFinished) ?: null,
            'dateCreated' => DateTimeHelper::toDateTime($record->dateCreated) ?: null,
            'dateUpdated' => DateTimeHelper::toDateTime($record->dateUpdated) ?: null,
        ]);
    }

    /**
     * Returns the user who created the send.
     */
    public function getSender(): ?User
    {
        return $this->senderId ? Craft::$app->getUsers()->getUserById($this->senderId) : null;
    }

    public function getCpUrl(): string
    {
        return UrlHelper::cpUrl("mailer/logs/$this->id");
    }

    /**
     * Returns whether the send is still queued or running.
     */
    public function getIsActive(): bool
    {
        return in_array($this->status, self::ACTIVE_STATUSES, true);
    }

    /**
     * Returns the number of recipients that are still waiting to be sent.
     */
    public function getPendingCount(): int
    {
        return max(0, $this->totalRecipients - $this->sentCount - $this->failedCount - $this->skippedCount);
    }

    /**
     * Returns the status label.
     */
    public function getStatusLabel(): string
    {
        return match ($this->status) {
            self::STATUS_SCHEDULED => Craft::t('mailer', 'Scheduled'),
            self::STATUS_QUEUED => Craft::t('mailer', 'Queued'),
            self::STATUS_PAUSED => Craft::t('mailer', 'Paused'),
            self::STATUS_RUNNING => Craft::t('mailer', 'Sending'),
            self::STATUS_FINISHED => Craft::t('mailer', 'Sent'),
            self::STATUS_PARTIAL => Craft::t('mailer', 'Sent with errors'),
            self::STATUS_FAILED => Craft::t('mailer', 'Failed'),
            self::STATUS_CANCELLED => Craft::t('mailer', 'Cancelled'),
            default => ucfirst($this->status),
        };
    }

    /**
     * Returns the `pk-status` variant for the status.
     */
    public function getStatusColor(): string
    {
        return match ($this->status) {
            self::STATUS_FINISHED => 'green',
            self::STATUS_PARTIAL => 'orange',
            self::STATUS_FAILED => 'red',
            self::STATUS_RUNNING => 'blue',
            self::STATUS_QUEUED, self::STATUS_SCHEDULED => 'pending',
            self::STATUS_PAUSED => 'amber',
            default => 'disabled',
        };
    }
}
