<?php

namespace rareform\mailer\tests\helpers;

use PHPUnit\Framework\TestCase;
use rareform\mailer\helpers\Csv;

class CsvTest extends TestCase
{
    public function testBuildsSemicolonSeparatedCsvWithBom(): void
    {
        $csv = Csv::build([['First name', 'Email'], ['Jane; "J"', 'j@example.com']]);

        $this->assertSame("\xEF\xBB\xBF\"First name\";Email\n\"Jane; \"\"J\"\"\";j@example.com\n", $csv);
    }

    public function testNeutralizesFormulas(): void
    {
        $csv = Csv::build([['=HYPERLINK("x")', '+1', '-2', '@SUM(A1)', 'safe']], ',', false);

        $this->assertSame("\"'=HYPERLINK(\"\"x\"\")\",'+1,'-2,'@SUM(A1),safe\n", $csv);
    }
}
