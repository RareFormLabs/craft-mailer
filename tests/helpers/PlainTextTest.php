<?php

namespace rareform\mailer\tests\helpers;

use PHPUnit\Framework\TestCase;
use rareform\mailer\helpers\PlainText;

class PlainTextTest extends TestCase
{
    public function testConvertsCommonNodes(): void
    {
        $content = [
            ['type' => 'heading', 'attrs' => ['level' => 2], 'content' => [['type' => 'text', 'text' => 'Hello']]],
            ['type' => 'paragraph', 'content' => [
                ['type' => 'text', 'text' => 'Hi {{ user.firstName }}, read '],
                ['type' => 'text', 'text' => 'this', 'marks' => [['type' => 'link', 'attrs' => ['href' => 'https://example.com']]]],
                ['type' => 'hardBreak'],
                ['type' => 'text', 'text' => 'Thanks'],
            ]],
            ['type' => 'bulletList', 'content' => [
                ['type' => 'listItem', 'content' => [['type' => 'paragraph', 'content' => [['type' => 'text', 'text' => 'One']]]]],
                ['type' => 'listItem', 'content' => [['type' => 'paragraph', 'content' => [['type' => 'text', 'text' => 'Two']]]]],
            ]],
            ['type' => 'orderedList', 'content' => [
                ['type' => 'listItem', 'content' => [['type' => 'paragraph', 'content' => [['type' => 'text', 'text' => 'First']]]]],
            ]],
            ['type' => 'blockquote', 'content' => [['type' => 'paragraph', 'content' => [['type' => 'text', 'text' => 'Quote']]]]],
            ['type' => 'horizontalRule'],
        ];

        $this->assertSame(
            "Hello\n-----\n\nHi {{ user.firstName }}, read this (https://example.com)\nThanks\n\n- One\n- Two\n\n1. First\n\n> Quote\n\n----",
            PlainText::fromContent($content),
        );
    }

    public function testReturnsEmptyStringForEmptyContent(): void
    {
        $this->assertSame('', PlainText::fromContent([]));
    }
}
