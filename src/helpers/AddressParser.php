<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\helpers;

use Egulias\EmailValidator\EmailValidator;
use Egulias\EmailValidator\Validation\NoRFCWarningsValidation;
use Symfony\Component\Mime\Address;
use Throwable;

/**
 * Parses free-form address lists such as `a@example.com, "Doe, Jane" <jane@example.com>; b@example.com`.
 */
class AddressParser
{
    /**
     * Parses an address list.
     *
     * Addresses may be separated by commas, semicolons or new lines, and may include a display name
     * (`Jane Doe <jane@example.com>`). Duplicates are removed case-insensitively.
     *
     * @param string|null $input
     * @param int $max The maximum number of addresses allowed
     * @return array{addresses: array<int, array{email: string, name: string|null}>, errors: string[], overflow: bool}
     * `errors` lists the invalid tokens; `overflow` is true when there are more than `$max` addresses.
     */
    public static function parse(?string $input, int $max = 50): array
    {
        $addresses = [];
        $errors = [];
        $seen = [];

        foreach (self::split((string)$input) as $token) {
            $address = self::parseOne($token);

            if ($address === null) {
                $errors[] = $token;
                continue;
            }

            $key = strtolower($address['email']);

            if (isset($seen[$key])) {
                continue;
            }

            $seen[$key] = true;
            $addresses[] = $address;
        }

        return ['addresses' => $addresses, 'errors' => $errors, 'overflow' => count($addresses) > $max];
    }

    /**
     * Parses a single address, returning `null` if it is invalid.
     *
     * @return array{email: string, name: string|null}|null
     */
    public static function parseOne(string $token): ?array
    {
        $token = trim($token);

        if ($token === '') {
            return null;
        }

        try {
            $address = Address::create($token);
        } catch (Throwable) {
            return null;
        }

        $email = $address->getAddress();

        if (!self::isValidEmail($email)) {
            return null;
        }

        $name = trim($address->getName(), " \t\"'");

        return [
            'email' => $email,
            'name' => $name !== '' ? $name : null,
        ];
    }

    /**
     * Returns whether an email address is valid and deliverable-looking (RFC compliant, with a dotted domain).
     */
    public static function isValidEmail(string $email): bool
    {
        if ($email === '' || !str_contains($email, '@')) {
            return false;
        }

        return (new EmailValidator())->isValid($email, new NoRFCWarningsValidation());
    }

    /**
     * Removes addresses from `$list` that already appear in any of the `$exclude` lists.
     *
     * @param array<int, array{email: string, name: string|null}> $list
     * @param array<int, array{email: string, name: string|null}> ...$exclude
     * @return array<int, array{email: string, name: string|null}>
     */
    public static function without(array $list, array ...$exclude): array
    {
        $taken = [];

        foreach ($exclude as $addresses) {
            foreach ($addresses as $address) {
                $taken[strtolower($address['email'])] = true;
            }
        }

        return array_values(array_filter($list, fn(array $address) => !isset($taken[strtolower($address['email'])])));
    }

    /**
     * Formats a parsed address for display, e.g. `Jane Doe <jane@example.com>`.
     *
     * @param array{email: string, name: string|null} $address
     */
    public static function format(array $address): string
    {
        return $address['name'] ? sprintf('%s <%s>', $address['name'], $address['email']) : $address['email'];
    }

    /**
     * Splits an address list on commas, semicolons and new lines, ignoring separators inside quotes or angle brackets.
     *
     * @return string[]
     */
    public static function split(string $input): array
    {
        $tokens = [];
        $current = '';
        $inQuotes = false;
        $inAngles = false;
        $length = strlen($input);

        for ($i = 0; $i < $length; $i++) {
            $char = $input[$i];

            if ($char === '"' && !$inAngles) {
                $inQuotes = !$inQuotes;
            } elseif ($char === '<' && !$inQuotes) {
                $inAngles = true;
            } elseif ($char === '>' && !$inQuotes) {
                $inAngles = false;
            } elseif (!$inQuotes && !$inAngles && in_array($char, [',', ';', "\n", "\r"], true)) {
                $tokens[] = $current;
                $current = '';
                continue;
            }

            $current .= $char;
        }

        $tokens[] = $current;

        return array_values(array_filter(array_map('trim', $tokens), fn(string $token) => $token !== ''));
    }
}
