<?php

namespace rareform\mailer\tests\helpers;

use PHPUnit\Framework\TestCase;
use rareform\mailer\helpers\SafeTemplate;

class SafeTemplateTest extends TestCase
{
    private const TOKENS = ['user.firstName', 'user.lastName', 'user.email', 'user.username'];

    public function testReplacesTokensWithFlexibleSpacing(): void
    {
        $values = ['user.firstName' => 'Jane', 'user.lastName' => 'Doe', 'user.email' => 'j@example.com', 'user.username' => 'jane'];
        $template = "Hi {{ user.firstName }} {{user.lastName}} {{\u{00A0}user.email&nbsp;}} {{   user.username   }}";

        $this->assertSame('Hi Jane Doe j@example.com jane', SafeTemplate::render($template, $values, false));
    }

    public function testEncodesValuesForHtml(): void
    {
        $values = ['user.firstName' => '<b>"Jane"</b>'];

        $this->assertSame('<p>&lt;b&gt;&quot;Jane&quot;&lt;/b&gt;</p>', SafeTemplate::render('<p>{{ user.firstName }}</p>', $values, true));
        $this->assertSame('<b>"Jane"</b>', SafeTemplate::render('{{ user.firstName }}', $values, false));
    }

    public function testTokensAreCaseSensitive(): void
    {
        $this->assertSame(['{{ user.firstname }}'], SafeTemplate::leftovers('{{ user.firstname }}', self::TOKENS));
    }

    public function testFindsNoLeftoversInValidTemplates(): void
    {
        $this->assertSame([], SafeTemplate::leftovers('<p>Hi {{ user.firstName }}, you saved 50% today!</p>', self::TOKENS));
    }

    public function testFindsLeftoverTwig(): void
    {
        $this->assertNotEmpty(SafeTemplate::leftovers('{{ craft.app.config }}', self::TOKENS));
        $this->assertSame(['{% if true %}', '{% endif %}'], SafeTemplate::leftovers('{% if true %}yes{% endif %}', self::TOKENS));
        $this->assertSame(['Hi {{ there'], SafeTemplate::leftovers('Hi {{ there', self::TOKENS));
        $this->assertNotEmpty(SafeTemplate::leftovers('{# comment #}', self::TOKENS));
    }

    public function testFindsTokensSplitByFormatting(): void
    {
        $leftovers = SafeTemplate::leftovers('<p>{{ user.<strong>firstName</strong> }}</p>', self::TOKENS);

        $this->assertSame(['{{ user.firstName }}'], $leftovers);
        $this->assertTrue(SafeTemplate::isFormattedToken($leftovers[0], self::TOKENS));
        $this->assertFalse(SafeTemplate::isFormattedToken('{{ craft.app }}', self::TOKENS));
    }
}
