<?php

namespace rareform\mailer\tests\integration;

use Craft;
use craft\elements\User;
use craft\fieldlayoutelements\CustomField;
use craft\fields\Lightswitch;
use craft\fields\PlainText;
use craft\models\FieldLayoutTab;
use rareform\mailer\models\RecipientData;

class RenderingTest extends IntegrationTestCase
{
    public function testCustomUserFieldsAreVariables(): void
    {
        $fields = Craft::$app->getFields();
        $number = $fields->createField(['type' => PlainText::class, 'handle' => 'memberNumber', 'name' => 'Member Number']);
        $paid = $fields->createField(['type' => Lightswitch::class, 'handle' => 'isPaid', 'name' => 'Paid']);
        $this->assertTrue($fields->saveField($number));
        $this->assertTrue($fields->saveField($paid));

        $layout = $fields->getLayoutByType(User::class);
        $tab = new FieldLayoutTab(['name' => 'Content', 'layout' => $layout]);
        $tab->setElements([new CustomField($number), new CustomField($paid)]);
        $layout->setTabs([$tab]);
        $this->assertTrue($fields->saveLayout($layout));

        $renderer = new \rareform\mailer\services\Renderer();
        $tokens = array_column($renderer->getVariables(), 'token');
        $this->assertContains('user.memberNumber', $tokens);
        $this->assertContains('user.isPaid', $tokens);

        $user = $this->createUser('member');
        $user->setFieldValues(['memberNumber' => 'M-42', 'isPaid' => true]);
        Craft::$app->getElements()->saveElement($user, false);

        $context = $renderer->getContext($user, new RecipientData(['email' => $user->email]));
        $this->assertSame('No. M-42, paid: Yes', $renderer->personalize('No. {{ user.memberNumber }}, paid: {{ user.isPaid }}', $context, false, true));
    }

    public function testSafeModeAndSandboxValidation(): void
    {
        $renderer = $this->plugin->getRenderer();
        $context = $renderer->getContext($this->admin, new RecipientData(['email' => (string)$this->admin->email]));

        $this->assertNull($renderer->validateTemplate('Hi {{ user.firstName }}', $context, false, true));
        $this->assertNotNull($renderer->validateTemplate('{{ craft.app.config }}', $context, false, true));

        $this->assertNull($renderer->validateTemplate('{{ user.firstName|default("friend")|upper }}', $context, false, false));
        $this->assertNotNull($renderer->validateTemplate('{{ craft.app.config }}', $context, false, false), 'Undefined variables are reported');
        $this->assertNotNull($renderer->validateTemplate('{% include "_special/email" %}', $context, true, false));
    }

    public function testEmailsAreWrappedInTheEmailTemplate(): void
    {
        $html = $this->plugin->getRenderer()->wrap('<p>Body</p>', ['fromEmail' => 'a@example.com']);

        $this->assertStringContainsString('<p>Body</p>', $html);
        $this->assertStringContainsString('<html', $html);
    }
}
