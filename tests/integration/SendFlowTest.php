<?php

namespace rareform\mailer\tests\integration;

use Craft;
use craft\mail\Mailer;
use FailingTransport;
use rareform\mailer\models\RecipientData;
use rareform\mailer\models\Send;
use yii\web\UploadedFile;

class SendFlowTest extends IntegrationTestCase
{
    public function testSendsPersonalizedEmailsWithAttachmentsAndUnsubscribeLinks(): void
    {
        $group = $this->createGroup('club');
        $ada = $this->createUser('ada', [], [$group]);
        $this->createUser('grace', [], [$group]);

        $file = tempnam(sys_get_temp_dir(), 'mailer');
        file_put_contents($file, 'Agenda');

        $form = $this->form(
            ['sendToGroups' => true, 'groupIds' => [(string)$group->id], 'replyTo' => 'replies@example.com'],
            '<p>Hi {{ user.firstName }}, <a href="https://example.com/rsvp?email={{ user.email }}">RSVP</a></p>',
        );
        $form->uploads = [new UploadedFile(['name' => 'agenda.txt', 'tempName' => $file, 'type' => 'text/plain', 'size' => 6, 'error' => UPLOAD_ERR_OK])];

        $send = $this->runSend($this->createSend($form));

        $this->assertSame(Send::STATUS_FINISHED, $send->status);
        $this->assertSame(2, $send->sentCount);
        $this->assertDirectoryDoesNotExist($this->plugin->getAttachments()->getDirectory($send->uid), 'Attachments are cleaned up');

        $email = $this->sentEmails()[$ada->email];
        $symfony = $email->getSymfonyEmail();

        $this->assertSame('Hi Ada', $email->getSubject());
        $this->assertSame(['replies@example.com'], array_keys($email->getReplyTo()));
        $this->assertStringContainsString('email=ada%40example.com', $symfony->getHtmlBody());
        $this->assertStringContainsString('Unsubscribe', $symfony->getHtmlBody());
        $this->assertStringContainsString('Unsubscribe:', $symfony->getTextBody());
        $this->assertMatchesRegularExpression('#^<https?://.+mailer/unsubscribe.+code=[\w-]+>$#', $symfony->getHeaders()->get('List-Unsubscribe')->getBodyAsString());
        $this->assertSame('List-Unsubscribe=One-Click', $symfony->getHeaders()->get('List-Unsubscribe-Post')->getBodyAsString());
        $this->assertSame(['agenda.txt'], array_map(fn($part) => $part->getFilename(), $symfony->getAttachments()));
    }

    public function testCustomEmailsHaveNoUnsubscribeLink(): void
    {
        $form = $this->form(['sendToCustom' => true, 'customTo' => 'someone@example.org', 'customCc' => 'cc@example.org']);
        $this->runSend($this->createSend($form));

        $email = $this->sentEmails()['someone@example.org'];

        $this->assertSame(['cc@example.org'], array_keys($email->getCc()));
        $this->assertNull($email->getSymfonyEmail()->getHeaders()->get('List-Unsubscribe'));
        $this->assertStringNotContainsString('Unsubscribe', $email->getSymfonyEmail()->getHtmlBody());
    }

    public function testPausesAfterRepeatedFailuresAndResumes(): void
    {
        $group = $this->createGroup('outage');
        foreach (['one', 'two', 'three', 'four'] as $username) {
            $this->createUser($username, [], [$group]);
        }

        $this->plugin->getSettings()->maxConsecutiveFailures = 2;
        $testMailer = Craft::$app->getMailer();
        Craft::$app->set('mailer', new Mailer(['transport' => new FailingTransport(), 'messageClass' => \craft\mail\Message::class]));

        try {
            $send = $this->runSend($this->createSend($this->form(['sendToGroups' => true, 'groupIds' => [(string)$group->id]])));
        } finally {
            Craft::$app->set('mailer', $testMailer);
        }

        $this->assertSame(Send::STATUS_PAUSED, $send->status);
        $this->assertSame(2, $send->failedCount);
        $this->assertStringContainsString('550 Mailbox unavailable', (string)$send->statusMessage);

        $failed = $this->plugin->getSends()->createRecipientQuery($send->id, RecipientData::STATUS_FAILED)->one();
        $this->assertStringContainsString('550 Mailbox unavailable', $failed['error'], 'The transport’s error is recorded');

        // Resume once the mail server is back
        $this->assertTrue($this->plugin->getSends()->resume($send->id));
        $send = $this->runSend($send);

        $this->assertSame(Send::STATUS_PARTIAL, $send->status);
        $this->assertSame(2, $send->sentCount);

        // Retry just the failed recipients
        $retry = $this->runSend($this->plugin->getSends()->retryFailed($send, $this->admin));

        $this->assertSame(Send::STATUS_FINISHED, $retry->status);
        $this->assertSame(2, $retry->totalRecipients);
        $this->assertSame(2, $retry->sentCount);
    }

    public function testCancellingSkipsRemainingRecipients(): void
    {
        $group = $this->createGroup('cancelled');
        $this->createUser('first', [], [$group]);
        $this->createUser('second', [], [$group]);

        $send = $this->createSend($this->form(['sendToGroups' => true, 'groupIds' => [(string)$group->id]]));
        $this->assertTrue($this->plugin->getSends()->cancel($send->id));
        $send = $this->runSend($send);

        $this->assertSame(Send::STATUS_CANCELLED, $send->status);
        $this->assertSame(0, $send->sentCount);
        $this->assertSame(2, $send->skippedCount);
        $this->assertEmpty($this->sentEmails());
    }

    public function testScheduledSendsWorkOutRecipientsWhenTheyStart(): void
    {
        $group = $this->createGroup('later');
        $this->createUser('early', [], [$group]);

        $send = $this->createSend($this->form([
            'sendToGroups' => true,
            'groupIds' => [(string)$group->id],
            'sendAt' => new \DateTime('+1 hour'),
        ]));

        $this->assertSame(Send::STATUS_SCHEDULED, $send->status);
        $this->assertSame(1, $send->totalRecipients);

        // Someone joins before it starts
        $late = $this->createUser('late', [], [$group]);
        $send = $this->runSend($send);

        $this->assertSame(Send::STATUS_FINISHED, $send->status);
        $this->assertSame(2, $send->sentCount);
        $this->assertArrayHasKey($late->email, $this->sentEmails());
    }
}
