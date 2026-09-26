<?php

namespace rareform\mailer\tests\helpers;

use PHPUnit\Framework\TestCase;
use rareform\mailer\helpers\AddressParser;

class AddressParserTest extends TestCase
{
    public function testSplitsOnCommasSemicolonsAndNewLines(): void
    {
        $result = AddressParser::parse("a@example.com, b@example.com; c@example.com\nd@example.com");

        $this->assertSame([], $result['errors']);
        $this->assertSame(['a@example.com', 'b@example.com', 'c@example.com', 'd@example.com'], array_column($result['addresses'], 'email'));
    }

    public function testParsesDisplayNamesIncludingQuotedCommas(): void
    {
        $result = AddressParser::parse('"Doe, Jane" <jane@example.com>, John Smith <john@example.com>');

        $this->assertSame([], $result['errors']);
        $this->assertSame([
            ['email' => 'jane@example.com', 'name' => 'Doe, Jane'],
            ['email' => 'john@example.com', 'name' => 'John Smith'],
        ], $result['addresses']);
    }

    public function testAllowsLongTlds(): void
    {
        $result = AddressParser::parse('someone@example.photography');

        $this->assertSame([], $result['errors']);
        $this->assertCount(1, $result['addresses']);
    }

    public function testRemovesDuplicatesCaseInsensitively(): void
    {
        $result = AddressParser::parse('A@Example.com, a@example.com');

        $this->assertCount(1, $result['addresses']);
    }

    public function testReportsInvalidAddresses(): void
    {
        $result = AddressParser::parse('good@example.com, not-an-email, missing@tld, @example.com');

        $this->assertSame(['not-an-email', 'missing@tld', '@example.com'], $result['errors']);
        $this->assertCount(1, $result['addresses']);
    }

    public function testEnforcesTheMaximum(): void
    {
        $result = AddressParser::parse('a@example.com, b@example.com, c@example.com', 2);

        $this->assertTrue($result['overflow']);
        $this->assertFalse(AddressParser::parse('a@example.com', 2)['overflow']);
    }

    public function testWithoutRemovesAddressesFoundInOtherLists(): void
    {
        $to = AddressParser::parse('a@example.com')['addresses'];
        $cc = AddressParser::parse('A@example.com, b@example.com')['addresses'];

        $this->assertSame(['b@example.com'], array_column(AddressParser::without($cc, $to), 'email'));
    }
}
