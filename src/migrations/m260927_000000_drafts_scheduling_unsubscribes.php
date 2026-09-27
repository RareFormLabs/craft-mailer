<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\migrations;

use craft\db\Migration;
use rareform\mailer\db\Table;

/**
 * Adds scheduled/paused send details, drafts and templates, and unsubscribes.
 */
class m260927_000000_drafts_scheduling_unsubscribes extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp(): bool
    {
        if (!$this->db->columnExists(Table::SENDS, 'scheduledFor')) {
            $this->addColumn(Table::SENDS, 'scheduledFor', $this->dateTime()->after('skippedCount'));
        }

        if (!$this->db->columnExists(Table::SENDS, 'statusMessage')) {
            $this->addColumn(Table::SENDS, 'statusMessage', $this->string()->after('scheduledFor'));
        }

        if (!$this->db->tableExists(Table::SAVED)) {
            Install::createSavedAndUnsubscribeTables($this);
        }

        return true;
    }

    /**
     * @inheritdoc
     */
    public function safeDown(): bool
    {
        echo "m260927_000000_drafts_scheduling_unsubscribes cannot be reverted.\n";
        return false;
    }
}
