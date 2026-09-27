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
    public const SAVED = '{{%mailer_saved}}';
    public const UNSUBSCRIBES = '{{%mailer_unsubscribes}}';
}
