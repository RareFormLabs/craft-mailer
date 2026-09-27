<?php

namespace rareform\mailer\tests\integration;

use craft\elements\conditions\users\GroupConditionRule;
use craft\elements\User;
use rareform\mailer\models\ComposeForm;
use rareform\mailer\models\RecipientData;

class RecipientsTest extends IntegrationTestCase
{
    public function testCombinesAndDedupesRecipientsWithSkipReasons(): void
    {
        $members = $this->createGroup('members');
        $ada = $this->createUser('ada', [], [$members]);
        $grace = $this->createUser('grace', [], [$members]);
        $this->createUser('sam', ['suspended' => true], [$members]);
        $this->createUser('pat', ['active' => false, 'pending' => true], [$members]);
        $linus = $this->createUser('linus', [], [$members]);
        $this->plugin->getUnsubscribes()->unsubscribe($linus->email);

        $form = $this->form([
            'sendToCustom' => true,
            'customTo' => 'Jane <jane@example.org>, ada@example.com',
            'customCc' => 'JANE@example.org, boss@example.org',
            'sendToGroups' => true,
            'groupIds' => [(string)$members->id],
            'sendToUsers' => true,
            'userIds' => [$grace->id],
        ]);

        $byEmail = [];
        foreach ($this->plugin->getRecipients()->resolve($form) as $recipient) {
            $byEmail[$recipient->email] = $recipient;
        }

        // One custom email; the duplicate CC address is dropped
        $custom = $byEmail['jane@example.org'];
        $this->assertSame(RecipientData::TYPE_CUSTOM, $custom->type);
        $this->assertSame(['boss@example.org'], array_column($custom->addresses['cc'], 'email'));

        // Individually selected users win over groups
        $this->assertSame(RecipientData::SOURCE_USER, $byEmail[$grace->email]->source);

        $this->assertSkipped($byEmail[$ada->email], 'Already included in the custom email');
        $this->assertSkipped($byEmail['sam@example.com'], 'User is suspended');
        $this->assertSkipped($byEmail['pat@example.com'], 'User is pending activation');
        $this->assertSkipped($byEmail[$linus->email], 'Unsubscribed');
    }

    public function testCanIgnoreUnsubscribes(): void
    {
        $user = $this->createUser('important');
        $this->plugin->getUnsubscribes()->unsubscribe($user->email);

        $form = $this->form(['sendToUsers' => true, 'userIds' => [$user->id], 'respectUnsubscribes' => false]);
        $recipients = $this->plugin->getRecipients()->resolve($form);

        $this->assertSame(RecipientData::STATUS_PENDING, $recipients[0]->status);
    }

    public function testResolvesUsersMatchingConditions(): void
    {
        $board = $this->createGroup('board');
        $katherine = $this->createUser('katherine', [], [$board]);
        $this->createUser('outsider');

        $form = $this->form([
            'sendToCondition' => true,
            'userConditionConfig' => [
                'elementType' => User::class,
                'conditionRules' => [['class' => GroupConditionRule::class, 'operator' => 'in', 'values' => [$board->uid]]],
            ],
        ]);

        $this->assertTrue($form->validate(), json_encode($form->getErrors()));
        $recipients = $this->plugin->getRecipients()->resolve($form);

        $this->assertSame([$katherine->email], array_map(fn(RecipientData $r) => $r->email, $recipients));
        $this->assertSame(RecipientData::SOURCE_CONDITION, $recipients[0]->source);

        // The condition survives being stored and restored (drafts, scheduled sends)
        $restored = ComposeForm::fromData($form->toData());
        $this->assertCount(1, $this->plugin->getRecipients()->resolve($restored));
    }

    public function testConditionsNeedAtLeastOneRule(): void
    {
        $form = $this->form(['sendToCondition' => true, 'userConditionConfig' => ['elementType' => User::class]]);

        $this->assertFalse($form->validate());
        $this->assertNotEmpty($form->getErrors('userCondition'));
    }

    private function assertSkipped(RecipientData $recipient, string $reason): void
    {
        $this->assertSame(RecipientData::STATUS_SKIPPED, $recipient->status, "$recipient->email is skipped");
        $this->assertSame($reason, $recipient->error);
    }
}
