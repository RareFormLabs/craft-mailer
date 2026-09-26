<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\records;

use craft\db\ActiveRecord;
use rareform\mailer\db\Table;

/**
 * One email within a send: either a user or the single custom (To/CC/BCC) email.
 *
 * @property int $id
 * @property int $sendId
 * @property string $type
 * @property int|null $userId
 * @property string $email
 * @property string|null $name
 * @property array|string|null $addresses
 * @property string $source
 * @property string $status
 * @property string|null $error
 * @property string|null $dateSent
 * @property string $dateCreated
 * @property string $dateUpdated
 * @property string $uid
 */
class RecipientRecord extends ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName(): string
    {
        return Table::RECIPIENTS;
    }
}
