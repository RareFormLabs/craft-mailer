<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\helpers;

/**
 * Replaces variables inside link URLs (`href` attributes), URL-encoding their values.
 *
 * - After a `?` or `#` (query strings and fragments), values are fully URL-encoded.
 * - In the path, values are URL-encoded but slashes are kept.
 * - A variable at the very start of a URL is inserted as-is, and the URL is dropped unless the result is an
 *   `http(s)`, `mailto` or `tel` URL.
 */
class LinkVariables
{
    /**
     * @param string $html
     * @param callable(string $expression): (string|null) $resolve Returns the value of a variable expression
     *   (e.g. `user.email`), or `null` to leave it untouched.
     */
    public static function apply(string $html, callable $resolve): string
    {
        if (!str_contains($html, 'href="')) {
            return $html;
        }

        return preg_replace_callback('/(\shref=")([^"]*)(")/i', function(array $match) use ($resolve) {
            $href = html_entity_decode($match[2], ENT_QUOTES | ENT_HTML5, 'UTF-8');
            $href = self::decodeBraces($href);

            if (!str_contains($href, '{{')) {
                return $match[0];
            }

            return $match[1] . htmlspecialchars(self::replace($href, $resolve), ENT_QUOTES | ENT_HTML5, 'UTF-8') . $match[3];
        }, $html) ?? $html;
    }

    /**
     * Replaces the variables in a single (decoded) URL.
     *
     * @param callable(string $expression): (string|null) $resolve
     */
    public static function replace(string $href, callable $resolve): string
    {
        $startsWithVariable = (bool)preg_match('/^\s*\{\{/', $href);

        $result = preg_replace_callback('/\{\{\s*(.+?)\s*\}\}/s', function(array $match) use ($href, $resolve) {
            $value = $resolve($match[1]);

            if ($value === null) {
                return $match[0];
            }

            $offset = strpos($href, $match[0]);
            $before = substr($href, 0, (int)$offset);

            if ($offset === 0) {
                return trim($value);
            }

            if (preg_match('/[?#]/', $before)) {
                return rawurlencode($value);
            }

            return str_replace('%2F', '/', rawurlencode($value));
        }, $href) ?? $href;

        if ($startsWithVariable && !preg_match('/^(https?:\/\/|mailto:|tel:)/i', $result)) {
            return '#';
        }

        return $result;
    }

    /**
     * Turns URL-encoded variable delimiters (`%7B%7B user.email %7D%7D`) back into `{{ user.email }}`.
     */
    private static function decodeBraces(string $href): string
    {
        if (!preg_match('/%7B%7B/i', $href)) {
            return $href;
        }

        return preg_replace_callback('/%7B%7B(.*?)%7D%7D/i', fn(array $match) => '{{' . rawurldecode($match[1]) . '}}', $href) ?? $href;
    }
}
