<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\helpers;

use Twig\Environment;
use Twig\Error\Error as TwigError;
use Twig\Extension\CoreExtension;
use Twig\Extension\SandboxExtension;
use Twig\Loader\ArrayLoader;
use Twig\Sandbox\SecurityPolicy;

/**
 * Renders message templates in an isolated, sandboxed Twig environment.
 *
 * The environment has none of Craft’s extensions, globals or template loaders. Only a small set of tags,
 * filters and tests are allowed, and no functions, methods or object properties can be used — the context
 * should only ever contain scalars and arrays.
 */
class SandboxTwig
{
    /**
     * The maximum template size, in bytes.
     */
    public const MAX_LENGTH = 512000;

    public const ALLOWED_TAGS = ['if', 'set'];

    public const ALLOWED_FILTERS = [
        'capitalize', 'date', 'default', 'e', 'escape', 'first', 'format', 'join', 'last', 'length', 'lower',
        'nl2br', 'number_format', 'replace', 'round', 'split', 'striptags', 'title', 'trim', 'upper', 'url_encode',
    ];

    public const ALLOWED_TESTS = ['defined', 'empty', 'null', 'none', 'same as', 'divisible by', 'even', 'odd'];

    /**
     * Renders a template.
     *
     * @param string $template
     * @param array $context Scalars and arrays only
     * @param bool $html Whether output should be HTML-escaped (for HTML bodies)
     * @param string|null $timezone
     * @throws TwigError
     */
    public static function render(string $template, array $context, bool $html, ?string $timezone = null): string
    {
        self::guard($template);

        if ($html) {
            $template = self::decodeDelimiters($template);
        }

        $twig = self::createEnvironment($html, $timezone);

        return $twig->createTemplate($template)->render($context);
    }

    /**
     * Validates a template by compiling and rendering it with the given context.
     *
     * @return string|null The error message, or `null` if the template is valid.
     */
    public static function validate(string $template, array $context, bool $html, ?string $timezone = null): ?string
    {
        try {
            self::render($template, $context, $html, $timezone);
        } catch (TwigError $e) {
            return $e->getRawMessage() . ($e->getTemplateLine() > 0 ? sprintf(' (line %d)', $e->getTemplateLine()) : '');
        }

        return null;
    }

    /**
     * Creates the sandboxed environment.
     */
    public static function createEnvironment(bool $html, ?string $timezone = null): Environment
    {
        $twig = new Environment(new ArrayLoader(), [
            'autoescape' => $html ? 'html' : false,
            'strict_variables' => false,
            'cache' => false,
            'optimizations' => -1,
        ]);

        if ($timezone) {
            $twig->getExtension(CoreExtension::class)->setTimezone($timezone);
        }

        $policy = new SecurityPolicy(self::ALLOWED_TAGS, self::ALLOWED_FILTERS, [], [], [], self::ALLOWED_TESTS);
        $twig->addExtension(new SandboxExtension($policy, true));

        return $twig;
    }

    /**
     * Decodes HTML entities inside Twig delimiters only.
     *
     * The rich text editor escapes quotes and ampersands in text (`&quot;`), which would otherwise break
     * expressions like `{{ user.firstName|default("friend") }}`.
     */
    public static function decodeDelimiters(string $html): string
    {
        return preg_replace_callback(
            '/\{\{.*?\}\}|\{%.*?%\}/su',
            fn(array $match) => html_entity_decode($match[0], ENT_QUOTES | ENT_HTML5, 'UTF-8'),
            $html,
        ) ?? $html;
    }

    /**
     * Rejects templates that are too large or use range expressions (`1..1000000`), which the sandbox can’t restrict.
     *
     * @throws TwigError
     */
    private static function guard(string $template): void
    {
        if (strlen($template) > self::MAX_LENGTH) {
            throw new TwigError('The message is too long.');
        }

        if (preg_match_all('/\{\{.*?\}\}|\{%.*?%\}/su', $template, $matches)) {
            foreach ($matches[0] as $expression) {
                // Ignore dots inside string literals
                $withoutStrings = preg_replace('/"(?:[^"\\\\]|\\\\.)*"|\'(?:[^\'\\\\]|\\\\.)*\'/su', '""', $expression) ?? $expression;

                if (str_contains($withoutStrings, '..')) {
                    throw new TwigError('Range expressions (“..”) are not allowed.');
                }
            }
        }
    }
}
