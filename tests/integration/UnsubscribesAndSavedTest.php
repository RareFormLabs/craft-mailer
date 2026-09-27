<?php

namespace rareform\mailer\tests\integration;

use craft\helpers\StringHelper;
use rareform\mailer\services\Saved;

class UnsubscribesAndSavedTest extends IntegrationTestCase
{
    public function testUnsubscribeTokensRoundTripAndCantBeForged(): void
    {
        $unsubscribes = $this->plugin->getUnsubscribes();
        $token = $unsubscribes->createToken('Jane@Example.com', 12);

        $this->assertSame(['email' => 'jane@example.com', 'sendId' => 12], $unsubscribes->parseToken($token));

        $payload = StringHelper::base64UrlDecode($token);
        $forged = StringHelper::base64UrlEncode(str_replace('jane@', 'john@', $payload));
        $this->assertNull($unsubscribes->parseToken($forged));
        $this->assertNull($unsubscribes->parseToken('not-a-token'));
    }

    public function testUnsubscribingIsCaseInsensitiveAndReversible(): void
    {
        $unsubscribes = $this->plugin->getUnsubscribes();
        $user = $this->createUser('optout');

        $unsubscribes->unsubscribe('OPTOUT@example.com');
        $unsubscribes->unsubscribe('optout@example.com');

        $this->assertTrue($unsubscribes->isUnsubscribed($user->email));
        $row = $unsubscribes->createQuery()->one();
        $this->assertSame($user->id, (int)$row['userId'], 'Linked to the user account');
        $this->assertSame(1, (int)$unsubscribes->createQuery()->count(), 'Only stored once');

        $this->assertTrue($unsubscribes->remove((int)$row['id']));
        $this->assertFalse($unsubscribes->isUnsubscribed($user->email));
    }

    public function testDraftsBelongToTheirAuthor(): void
    {
        $saved = $this->plugin->getSaved();
        $other = $this->createUser('someoneelse');
        $form = $this->form(['sendToCustom' => true, 'customTo' => 'a@example.org', 'sendAt' => new \DateTime('+1 day')]);

        $id = $saved->saveDraft($form, $this->admin->id);
        $this->assertSame($id, $saved->saveDraft($form, $this->admin->id, $id), 'Saving again updates the same draft');

        $data = $saved->getData($id, Saved::KIND_DRAFT, $this->admin->id);
        $this->assertSame('Hi {{ user.firstName }}', $data['subject']);
        $this->assertTrue($data['recipientsConfig']['custom']['enabled']);
        $this->assertNotEmpty($data['sendAt']);

        $this->assertNull($saved->getData($id, Saved::KIND_DRAFT, $other->id));
        $this->assertFalse($saved->delete($id, Saved::KIND_DRAFT, $other->id));
        $this->assertTrue($saved->delete($id, Saved::KIND_DRAFT, $this->admin->id));
    }

    public function testTemplatesOnlyKeepTheMessage(): void
    {
        $saved = $this->plugin->getSaved();
        $form = $this->form(['sendToCustom' => true, 'customTo' => 'a@example.org', 'replyTo' => 'r@example.org']);

        $id = $saved->saveTemplate($form, 'Monthly update', $this->admin->id);
        $data = $saved->getData($id, Saved::KIND_TEMPLATE);

        $this->assertSame(['subject', 'bodyJson', 'fromName', 'fromEmail', 'replyTo', 'embedImages'], array_keys($data));
        $this->assertSame('Monthly update', $saved->getAll(Saved::KIND_TEMPLATE)[0]['name']);
    }
}
