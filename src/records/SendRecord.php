<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\records;

use craft\db\ActiveRecord;
use rareform\mailer\db\Table;

/**
 * A single compose submission and its delivery progress.
 *
 * @property int $id
 * @property int|null $senderId
 * @property string $status
 * @property string|null $description
 * @property string|null $fromName
 * @property string $fromEmail
 * @property string|null $replyTo
 * @property string $subject
 * @property string|null $bodyJson
 * @property string|null $bodyHtml
 * @property string|null $bodyText
 * @property array|string|null $recipientsConfig
 * @property array|string|null $attachments
 * @property array|string|null $settingsSnapshot
 * @property int $totalRecipients
 * @property int $sentCount
 * @property int $failedCount
 * @property int $skippedCount
 * @property string|null $dateStarted
 * @property string|null $dateFinished
 * @property string $dateCreated
 * @property string $dateUpdated
 * @property string $uid
 */
class SendRecord extends ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName(): string
    {
        return Table::SENDS;
    }
}
