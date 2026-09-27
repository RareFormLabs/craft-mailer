<?php

namespace rareform\mailer\tests\helpers;

use PHPUnit\Framework\TestCase;
use rareform\mailer\helpers\LinkVariables;

class LinkVariablesTest extends TestCase
{
    private function resolve(): callable
    {
        $values = ['user.email' => 'jane+test@example.com', 'user.firstName' => 'Jane & Co', 'user.website' => 'https://jane.example/blog', 'user.slug' => 'a/b c'];

        return fn(string $expression) => $values[$expression] ?? null;
    }

    public function testEncodesQueryValues(): void
    {
        $html = '<a href="https://example.com/p?email={{ user.email }}&amp;n={{user.firstName}}">Go</a>';

        $this->assertSame(
            '<a href="https://example.com/p?email=jane%2Btest%40example.com&amp;n=Jane%20%26%20Co">Go</a>',
            LinkVariables::apply($html, $this->resolve()),
        );
    }

    public function testKeepsSlashesInPaths(): void
    {
        $this->assertSame('https://example.com/a/b%20c/', LinkVariables::replace('https://example.com/{{ user.slug }}/', $this->resolve()));
    }

    public function testAllowsAFullUrlVariableAtTheStart(): void
    {
        $this->assertSame('https://jane.example/blog?x=1', LinkVariables::replace('{{ user.website }}?x=1', $this->resolve()));
        $this->assertSame('#', LinkVariables::replace('{{ user.firstName }}', $this->resolve()));
    }

    public function testDecodesEncodedBraces(): void
    {
        $html = '<a href="https://example.com/?e=%7B%7B%20user.email%20%7D%7D">Go</a>';

        $this->assertSame('<a href="https://example.com/?e=jane%2Btest%40example.com">Go</a>', LinkVariables::apply($html, $this->resolve()));
    }

    public function testLeavesUnknownExpressionsAndPlainLinks(): void
    {
        $this->assertSame('https://example.com/?x={{ craft.app }}', LinkVariables::replace('https://example.com/?x={{ craft.app }}', $this->resolve()));
        $this->assertSame('<a href="https://example.com/?a=1&amp;b=2">x</a>', LinkVariables::apply('<a href="https://example.com/?a=1&amp;b=2">x</a>', $this->resolve()));
    }
}
