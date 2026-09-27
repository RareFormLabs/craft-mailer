<?php

namespace rareform\mailer\tests\integration;

use Craft;
use craft\elements\User;
use craft\mail\Message;
use craft\models\UserGroup;
use craft\test\TestCase;
use IntegrationTester;
use rareform\mailer\jobs\SendBatchJob;
use rareform\mailer\models\ComposeForm;
use rareform\mailer\models\Send;
use rareform\mailer\Plugin;
use verbb\tiptap\EditorFactory;

/**
 * Base class for integration tests, with helpers for creating users and running sends.
 */
abstract class IntegrationTestCase extends TestCase
{
    protected IntegrationTester $tester;

    protected Plugin $plugin;

    protected User $admin;

    protected function _before(): void
    {
        parent::_before();

        $this->plugin = Plugin::getInstance();
        $this->admin = User::find()->admin(true)->one();
        Craft::$app->getUser()->setIdentity($this->admin);
    }

    protected function createGroup(string $handle): UserGroup
    {
        $groups = Craft::$app->getUserGroups();
        $group = $groups->getGroupByHandle($handle) ?? new UserGroup(['handle' => $handle, 'name' => ucfirst($handle)]);

        if (!$group->id) {
            $this->assertTrue($groups->saveGroup($group), 'Group saved');
        }

        return $group;
    }

    /**
     * @param UserGroup[] $groups
     */
    protected function createUser(string $username, array $attributes = [], array $groups = []): User
    {
        $user = new User(array_merge([
            'username' => $username,
            'email' => "$username@example.com",
            'firstName' => ucfirst($username),
            'lastName' => 'Tester',
            'active' => true,
        ], $attributes));

        $this->assertTrue(Craft::$app->getElements()->saveElement($user, false), "User $username saved");

        if ($groups) {
            Craft::$app->getUsers()->assignUserToGroups($user->id, array_map(fn(UserGroup $group) => $group->id, $groups));
        }

        return $user;
    }

    /**
     * Builds a compose form with a simple subject and body.
     */
    protected function form(array $config = [], string $html = '<p>Hello {{ user.firstName }}</p>'): ComposeForm
    {
        return new ComposeForm(array_merge([
            'subject' => 'Hi {{ user.firstName }}',
            'bodyJson' => json_encode(EditorFactory::htmlToContent($html)),
            'fromName' => 'Mailer Tests',
            'fromEmail' => 'mailer@example.com',
        ], $config));
    }

    /**
     * Resolves a form’s recipients and creates the send.
     */
    protected function createSend(ComposeForm $form): Send
    {
        $send = $this->plugin->getSends()->create($form, $this->plugin->getRecipients()->resolve($form), $this->admin);
        $this->assertNotNull($send);

        return $send;
    }

    /**
     * Runs a send’s job until it’s no longer active (or stops making progress), like the queue would.
     */
    protected function runSend(Send $send, int $maxJobs = 20): Send
    {
        for ($i = 0; $i < $maxJobs; $i++) {
            (new SendBatchJob(['sendId' => $send->id]))->execute(Craft::$app->getQueue());
            $send = $this->plugin->getSends()->getSendById($send->id);

            if (!$send->getIsActive() || $send->status === Send::STATUS_PAUSED) {
                break;
            }
        }

        return $send;
    }

    /**
     * @return Message[] Emails sent through Craft’s test mailer, indexed by recipient address
     */
    protected function sentEmails(): array
    {
        $emails = [];

        foreach ($this->tester->grabSentEmails() as $message) {
            /** @var Message $message */
            $emails[implode(',', array_keys($message->getTo()))] = $message;
        }

        return $emails;
    }
}
