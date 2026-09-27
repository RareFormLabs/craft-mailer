<?php

namespace rareform\mailer\tests\integration;

use Craft;
use craft\test\TestCase;
use rareform\mailer\db\Table;
use rareform\mailer\Plugin;

class InstallTest extends TestCase
{
    public function testPluginIsInstalledWithItsTables(): void
    {
        $this->assertInstanceOf(Plugin::class, Plugin::getInstance());

        foreach ([Table::SENDS, Table::RECIPIENTS, Table::SAVED, Table::UNSUBSCRIBES] as $table) {
            $this->assertTrue(Craft::$app->getDb()->tableExists($table), "$table exists");
        }
    }
}
