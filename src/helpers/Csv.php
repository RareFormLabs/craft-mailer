<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\helpers;

/**
 * Builds CSV files that open cleanly in spreadsheet apps.
 */
class Csv
{
    /**
     * Builds a CSV string.
     *
     * Values that a spreadsheet would treat as a formula (starting with `=`, `+`, `-`, `@`, tab or carriage return)
     * are prefixed with an apostrophe.
     *
     * @param array<int, array<int, scalar|null>> $rows
     * @param string $delimiter
     * @param bool $bom Whether to prepend a UTF-8 byte order mark (helps Excel detect the encoding)
     */
    public static function build(array $rows, string $delimiter = ';', bool $bom = true): string
    {
        $handle = fopen('php://temp', 'r+');

        foreach ($rows as $row) {
            fputcsv($handle, array_map([self::class, 'sanitize'], $row), $delimiter, '"', '');
        }

        rewind($handle);
        $csv = stream_get_contents($handle);
        fclose($handle);

        return ($bom ? "\xEF\xBB\xBF" : '') . $csv;
    }

    /**
     * Neutralizes values that spreadsheet apps would evaluate as formulas.
     */
    public static function sanitize(mixed $value): string
    {
        $value = (string)$value;

        if ($value !== '' && in_array($value[0], ['=', '+', '-', '@', "\t", "\r"], true)) {
            return "'" . $value;
        }

        return $value;
    }
}
