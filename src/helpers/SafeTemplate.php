<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\helpers;

/**
 * Safe-mode templating: substitutes a fixed set of `{{ token }}` variables without running Twig.
 */
class SafeTemplate
{
    /**
     * Whitespace allowed inside the braces: regular whitespace, non-breaking spaces and `&nbsp;` entities.
     */
    private const SPACE = '(?:\s|\x{00A0}|&nbsp;|&#160;)*';

    /**
     * Returns the regex that matches any of the given variable tokens, e.g. `{{ user.firstName }}`.
     *
     * @param string[] $tokens Variable paths such as `user.firstName`
     */
    public static function pattern(array $tokens): string
    {
        $alternatives = implode('|', array_map(fn(string $token) => preg_quote($token, '/'), $tokens));

        if ($alternatives === '') {
            // Matches nothing
            return '/(?!)/u';
        }

        return '/\{\{' . self::SPACE . '(' . $alternatives . ')' . self::SPACE . '\}\}/u';
    }

    /**
     * Replaces variable tokens with their values.
     *
     * @param string $template
     * @param array<string, scalar|null> $values Values indexed by token, e.g. `['user.firstName' => 'Jane']`
     * @param bool $html Whether values should be HTML-encoded
     */
    public static function render(string $template, array $values, bool $html): string
    {
        if ($template === '' || !str_contains($template, '{{')) {
            return $template;
        }

        return preg_replace_callback(self::pattern(array_keys($values)), function(array $match) use ($values, $html) {
            $value = (string)($values[$match[1]] ?? '');

            return $html ? htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML5, 'UTF-8') : $value;
        }, $template) ?? $template;
    }

    /**
     * Returns snippets of any Twig syntax left over once the allowed tokens are removed.
     *
     * @param string $template
     * @param string[] $tokens
     * @param int $limit The maximum number of snippets to return
     * @return string[]
     */
    public static function leftovers(string $template, array $tokens, int $limit = 5): array
    {
        $stripped = preg_replace(self::pattern($tokens), ' ', $template) ?? $template;

        if (!preg_match_all('/\{\{|\}\}|\{%|%\}|\{#|#\}/', $stripped, $matches, PREG_OFFSET_CAPTURE)) {
            return [];
        }

        $snippets = [];

        foreach ($matches[0] as [, $offset]) {
            $start = max(0, $offset - 20);
            $snippet = substr($stripped, $start, 50);
            $snippet = trim(preg_replace('/\s+/u', ' ', strip_tags(html_entity_decode($snippet, ENT_QUOTES | ENT_HTML5, 'UTF-8'))) ?? '');
            $snippet = mb_scrub($snippet, 'UTF-8');

            if ($snippet !== '' && !in_array($snippet, $snippets, true)) {
                $snippets[] = $snippet;
            }

            if (count($snippets) >= $limit) {
                break;
            }
        }

        return $snippets ?: ['{{'];
    }
}
