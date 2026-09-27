<?php

namespace rareform\mailer\tests\helpers;

use PHPUnit\Framework\TestCase;
use rareform\mailer\helpers\SandboxTwig;

class SandboxTwigTest extends TestCase
{
    private array $context = ['user' => ['firstName' => 'Jane', 'lastName' => '<Doe>', 'email' => 'j@example.com', 'username' => 'jane']];

    public function testRendersVariablesAndFilters(): void
    {
        $this->assertSame('Hi JANE', SandboxTwig::render('Hi {{ user.firstName|upper }}', $this->context, false));
        $this->assertSame('Hi friend', SandboxTwig::render('Hi {{ user.nickname|default("friend") }}', $this->context, false));
        $this->assertSame('yes', SandboxTwig::render('{% if user.firstName == "Jane" %}yes{% endif %}', $this->context, false));
    }

    public function testEscapesHtmlOutput(): void
    {
        $this->assertSame('<p>&lt;Doe&gt;</p>', SandboxTwig::render('<p>{{ user.lastName }}</p>', $this->context, true));
        $this->assertSame('<Doe>', SandboxTwig::render('{{ user.lastName }}', $this->context, false));
    }

    public function testDecodesEntitiesInsideDelimiters(): void
    {
        $html = '<p>Hi {{ user.nickname|default(&quot;friend&quot;) }} &amp; welcome</p>';

        $this->assertSame('<p>Hi friend &amp; welcome</p>', SandboxTwig::render($html, $this->context, true));
    }

    /**
     * @dataProvider disallowedProvider
     */
    public function testRejectsDisallowedSyntax(string $template): void
    {
        $this->assertNotNull(SandboxTwig::validate($template, $this->context, true));
    }

    public static function disallowedProvider(): array
    {
        return [
            'include' => ['{% include "foo" %}'],
            'for' => ['{% for i in [1,2] %}{{ i }}{% endfor %}'],
            'constant' => ['{{ constant("PHP_VERSION") }}'],
            'dump' => ['{{ dump() }}'],
            'range function' => ['{{ range(1, 5)|join }}'],
            'range operator' => ['{{ (1..100000000)|length }}'],
            'raw filter' => ['{{ user.lastName|raw }}'],
            'source' => ['{{ source("foo") }}'],
            'macro' => ['{% macro foo() %}{% endmacro %}'],
            'syntax error' => ['{{ user.firstName '],
            'undefined variable' => ['{{ craft.app.config }}'],
        ];
    }

    public function testRenderingIgnoresUndefinedVariables(): void
    {
        $this->assertSame('Hi ', SandboxTwig::render('Hi {{ craft.app }}', $this->context, false));
        $this->assertNull(SandboxTwig::validate('Hi {{ user.nickname|default("x") }}', $this->context, false));
    }

    public function testAllowsDotsInsideStrings(): void
    {
        $this->assertSame('Jane...', SandboxTwig::render('{{ user.firstName ~ "..." }}', $this->context, false));
    }
}
