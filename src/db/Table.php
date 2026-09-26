<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\db;

/**
 * Database table names.
 */
abstract class Table
{
    public const SENDS = '{{%mailer_sends}}';
    public const RECIPIENTS = '{{%mailer_recipients}}';
}
