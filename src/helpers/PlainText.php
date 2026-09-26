<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\helpers;

/**
 * Converts TipTap content (`doc.content`) into a readable plain-text email body.
 *
 * Unlike a naive text extraction, this keeps list markers, blockquotes, rules and link URLs.
 */
class PlainText
{
    /**
     * @param array $content The TipTap content array
     */
    public static function fromContent(array $content): string
    {
        $text = self::blocks($content);
        $text = preg_replace("/\n{3,}/", "\n\n", $text) ?? $text;

        return trim($text);
    }

    private static function blocks(array $nodes, string $separator = "\n\n"): string
    {
        $blocks = [];

        foreach ($nodes as $node) {
            if (!is_array($node)) {
                continue;
            }

            $block = self::block($node);

            if ($block !== '') {
                $blocks[] = $block;
            }
        }

        return implode($separator, $blocks);
    }

    private static function block(array $node): string
    {
        $content = is_array($node['content'] ?? null) ? $node['content'] : [];

        switch ($node['type'] ?? null) {
            case 'paragraph':
                return self::inline($content);
            case 'heading':
                $text = self::inline($content);
                $level = (int)($node['attrs']['level'] ?? 1);

                return $level <= 2 && $text !== '' ? $text . "\n" . str_repeat($level === 1 ? '=' : '-', min(mb_strlen($text), 60)) : $text;
            case 'bulletList':
                return self::listItems($content, fn() => '- ');
            case 'orderedList':
                $start = (int)($node['attrs']['start'] ?? 1);

                return self::listItems($content, function(int $i) use ($start) {
                    return ($start + $i) . '. ';
                });
            case 'blockquote':
                $inner = self::blocks($content);

                return implode("\n", array_map(fn(string $line) => rtrim('> ' . $line), explode("\n", $inner)));
            case 'horizontalRule':
                return '----';
            case 'codeBlock':
                return self::inline($content);
            case 'table':
                $rows = [];

                foreach ($content as $row) {
                    $cells = [];

                    foreach (($row['content'] ?? []) as $cell) {
                        $cells[] = str_replace("\n", ' ', self::blocks($cell['content'] ?? [], ' '));
                    }

                    $rows[] = implode("\t", $cells);
                }

                return implode("\n", $rows);
            default:
                return $content ? self::blocks($content) : self::inline([$node]);
        }
    }

    private static function listItems(array $items, callable $marker): string
    {
        $lines = [];

        foreach (array_values($items) as $i => $item) {
            $inner = self::blocks($item['content'] ?? [], "\n");
            $prefix = $marker($i);
            $indent = str_repeat(' ', strlen($prefix));
            $itemLines = explode("\n", $inner);
            $lines[] = $prefix . array_shift($itemLines);

            foreach ($itemLines as $line) {
                $lines[] = $line === '' ? '' : $indent . $line;
            }
        }

        return implode("\n", $lines);
    }

    private static function inline(array $nodes): string
    {
        $text = '';

        foreach ($nodes as $node) {
            if (!is_array($node)) {
                continue;
            }

            switch ($node['type'] ?? null) {
                case 'text':
                    $part = str_replace(["\u{200B}", "\u{2060}", "\u{FEFF}"], '', (string)($node['text'] ?? ''));
                    $href = null;

                    foreach (($node['marks'] ?? []) as $mark) {
                        if (($mark['type'] ?? null) === 'link' && !empty($mark['attrs']['href'])) {
                            $href = (string)$mark['attrs']['href'];
                        }
                    }

                    if ($href !== null && $href !== $part && !str_starts_with($href, '#') && trim($part) !== '') {
                        $display = preg_replace('/^mailto:/i', '', $href);
                        $part = $display === $part ? $part : sprintf('%s (%s)', $part, $href);
                    }

                    $text .= $part;
                    break;
                case 'hardBreak':
                    $text .= "\n";
                    break;
                case 'variableTag':
                    $text .= '{' . ($node['attrs']['value'] ?? '') . '}';
                    break;
                default:
                    if (is_array($node['content'] ?? null)) {
                        $text .= self::inline($node['content']);
                    }
            }
        }

        return $text;
    }
}
