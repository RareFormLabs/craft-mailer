<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\migrations;

use craft\db\Migration;
use craft\db\Table as CraftTable;
use rareform\mailer\db\Table;

/**
 * Install migration.
 */
class Install extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp(): bool
    {
        $this->createTables();
        $this->createIndexes();
        $this->addForeignKeys();

        return true;
    }

    /**
     * @inheritdoc
     */
    public function safeDown(): bool
    {
        $this->dropTableIfExists(Table::UNSUBSCRIBES);
        $this->dropTableIfExists(Table::SAVED);
        $this->dropTableIfExists(Table::RECIPIENTS);
        $this->dropTableIfExists(Table::SENDS);

        return true;
    }

    protected function createTables(): void
    {
        $this->archiveTableIfExists(Table::SENDS);
        $this->createTable(Table::SENDS, [
            'id' => $this->primaryKey(),
            'senderId' => $this->integer(),
            'status' => $this->string(20)->notNull()->defaultValue('queued'),
            'description' => $this->string(),
            'fromName' => $this->string(),
            'fromEmail' => $this->string()->notNull(),
            'replyTo' => $this->string(),
            'subject' => $this->string()->notNull(),
            'bodyJson' => $this->mediumText(),
            'bodyHtml' => $this->mediumText(),
            'bodyText' => $this->mediumText(),
            'recipientsConfig' => $this->text(),
            'attachments' => $this->text(),
            'settingsSnapshot' => $this->text(),
            'totalRecipients' => $this->integer()->notNull()->defaultValue(0),
            'sentCount' => $this->integer()->notNull()->defaultValue(0),
            'failedCount' => $this->integer()->notNull()->defaultValue(0),
            'skippedCount' => $this->integer()->notNull()->defaultValue(0),
            'scheduledFor' => $this->dateTime(),
            'statusMessage' => $this->string(),
            'dateStarted' => $this->dateTime(),
            'dateFinished' => $this->dateTime(),
            'dateCreated' => $this->dateTime()->notNull(),
            'dateUpdated' => $this->dateTime()->notNull(),
            'uid' => $this->uid(),
        ]);

        $this->archiveTableIfExists(Table::RECIPIENTS);
        $this->createTable(Table::RECIPIENTS, [
            'id' => $this->primaryKey(),
            'sendId' => $this->integer()->notNull(),
            'type' => $this->string(10)->notNull(),
            'userId' => $this->integer(),
            'email' => $this->string()->notNull(),
            'name' => $this->string(),
            'addresses' => $this->text(),
            'source' => $this->string(20)->notNull(),
            'status' => $this->string(10)->notNull()->defaultValue('pending'),
            'error' => $this->text(),
            'dateSent' => $this->dateTime(),
            'dateCreated' => $this->dateTime()->notNull(),
            'dateUpdated' => $this->dateTime()->notNull(),
            'uid' => $this->uid(),
        ]);

        self::createSavedAndUnsubscribeTables($this);
    }

    /**
     * Creates the tables added after 1.0.0 (shared with the upgrade migration).
     */
    public static function createSavedAndUnsubscribeTables(Migration $migration): void
    {
        $migration->archiveTableIfExists(Table::SAVED);
        $migration->createTable(Table::SAVED, [
            'id' => $migration->primaryKey(),
            'kind' => $migration->string(10)->notNull(),
            'name' => $migration->string(),
            'creatorId' => $migration->integer(),
            'data' => $migration->mediumText(),
            'dateCreated' => $migration->dateTime()->notNull(),
            'dateUpdated' => $migration->dateTime()->notNull(),
            'uid' => $migration->uid(),
        ]);
        $migration->createIndex(null, Table::SAVED, ['kind', 'creatorId']);
        $migration->addForeignKey(null, Table::SAVED, ['creatorId'], CraftTable::USERS, ['id'], 'SET NULL');

        $migration->archiveTableIfExists(Table::UNSUBSCRIBES);
        $migration->createTable(Table::UNSUBSCRIBES, [
            'id' => $migration->primaryKey(),
            'email' => $migration->string()->notNull(),
            'userId' => $migration->integer(),
            'sendId' => $migration->integer(),
            'dateCreated' => $migration->dateTime()->notNull(),
            'dateUpdated' => $migration->dateTime()->notNull(),
            'uid' => $migration->uid(),
        ]);
        $migration->createIndex(null, Table::UNSUBSCRIBES, ['email'], true);
        $migration->createIndex(null, Table::UNSUBSCRIBES, ['userId']);
        $migration->addForeignKey(null, Table::UNSUBSCRIBES, ['userId'], CraftTable::USERS, ['id'], 'SET NULL');
        $migration->addForeignKey(null, Table::UNSUBSCRIBES, ['sendId'], Table::SENDS, ['id'], 'SET NULL');
    }

    protected function createIndexes(): void
    {
        $this->createIndex(null, Table::SENDS, ['status']);
        $this->createIndex(null, Table::SENDS, ['dateCreated']);
        $this->createIndex(null, Table::RECIPIENTS, ['sendId', 'status']);
        $this->createIndex(null, Table::RECIPIENTS, ['sendId', 'email']);
        $this->createIndex(null, Table::RECIPIENTS, ['userId']);
    }

    protected function addForeignKeys(): void
    {
        $this->addForeignKey(null, Table::SENDS, ['senderId'], CraftTable::USERS, ['id'], 'SET NULL');
        $this->addForeignKey(null, Table::RECIPIENTS, ['sendId'], Table::SENDS, ['id'], 'CASCADE');
        $this->addForeignKey(null, Table::RECIPIENTS, ['userId'], CraftTable::USERS, ['id'], 'SET NULL');
    }
}
