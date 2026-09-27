<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\services;

use Craft;
use craft\elements\User;
use craft\enums\CmsEdition;
use craft\helpers\App;
use craft\helpers\Template;
use craft\web\View;
use rareform\mailer\events\DefineVariablesEvent;
use rareform\mailer\events\RegisterVariablesEvent;
use rareform\mailer\helpers\PlainText;
use rareform\mailer\helpers\SafeTemplate;
use rareform\mailer\helpers\SandboxTwig;
use rareform\mailer\models\ComposeForm;
use rareform\mailer\models\RecipientData;
use rareform\mailer\Plugin;
use Throwable;
use verbb\tiptap\EditorFactory;
use verbb\tiptap\Normalizer;
use yii\base\Component;

/**
 * Renders message bodies, personalizes them per recipient and wraps them in the email template.
 */
class Renderer extends Component
{
    /**
     * @event RegisterVariablesEvent The event triggered when registering the variables available in messages.
     *
     * Registered variables are listed in the compose screen and are the only ones allowed in safe mode.
     * Provide their values with [[EVENT_DEFINE_VARIABLES]].
     */
    public const EVENT_REGISTER_VARIABLES = 'registerVariables';

    /**
     * @event DefineVariablesEvent The event triggered when defining the variables for a recipient.
     */
    public const EVENT_DEFINE_VARIABLES = 'defineVariables';

    /**
     * The placeholder used to render the email template once and reuse it for every recipient.
     */
    private const BODY_PLACEHOLDER = '<!--mailer:body-->';

    /**
     * @var array<int, array{token: string, label: string}>|null
     */
    private ?array $_variables = null;

    /**
     * @var array<string, string|false> Rendered email templates, indexed by their variables.
     */
    private array $_wrappers = [];

    /**
     * Returns the variables available in messages.
     *
     * @return array<int, array{token: string, label: string}>
     */
    public function getVariables(): array
    {
        if ($this->_variables !== null) {
            return $this->_variables;
        }

        $event = new RegisterVariablesEvent([
            'variables' => [
                ['token' => 'user.firstName', 'label' => Craft::t('mailer', 'First name')],
                ['token' => 'user.lastName', 'label' => Craft::t('mailer', 'Last name')],
                ['token' => 'user.fullName', 'label' => Craft::t('mailer', 'Full name')],
                ['token' => 'user.email', 'label' => Craft::t('mailer', 'Email')],
                ['token' => 'user.username', 'label' => Craft::t('mailer', 'Username')],
            ],
        ]);
        $this->trigger(self::EVENT_REGISTER_VARIABLES, $event);

        return $this->_variables = array_values(array_filter(
            $event->variables,
            fn($variable) => is_array($variable) && isset($variable['token']) && preg_match('/^[a-zA-Z_][\w.]*$/', $variable['token']),
        ));
    }

    /**
     * Returns the registered variable tokens, e.g. `user.firstName`.
     *
     * @return string[]
     */
    public function getTokens(): array
    {
        return array_column($this->getVariables(), 'token');
    }

    /**
     * Returns the registered variable tokens used in a template.
     *
     * @return string[]
     */
    public function getUsedTokens(string $template): array
    {
        if (!preg_match_all(SafeTemplate::pattern($this->getTokens()), $template, $matches)) {
            return [];
        }

        return array_values(array_unique($matches[1]));
    }

    /**
     * Returns the value of a variable token (e.g. `user.firstName`) from a recipient’s variables.
     */
    public function getValue(array $context, string $token): string
    {
        return self::valueAt($context, $token);
    }

    /**
     * Renders a TipTap content array to HTML.
     */
    public function contentToHtml(array $content): string
    {
        return Normalizer::stripInvisibleChars(EditorFactory::contentToHtml($content));
    }

    /**
     * Renders a TipTap content array to plain text.
     */
    public function contentToText(array $content): string
    {
        return PlainText::fromContent($content);
    }

    /**
     * Returns the variables a message is rendered with for a recipient.
     *
     * The `user` variable is a plain array (never the element), so templates can’t reach anything else.
     */
    public function getContext(?User $user, RecipientData $recipient): array
    {
        // Custom emails use the first To address’s user account, if there is one
        if ($user === null && $recipient->getIsCustom() && $recipient->email !== '') {
            $user = User::find()->email($recipient->email)->status(null)->one();
        }

        $variables = [
            'user' => [
                'id' => $user?->id,
                'firstName' => (string)($user->firstName ?? ''),
                'lastName' => (string)($user->lastName ?? ''),
                'fullName' => (string)($user->fullName ?? $recipient->name ?? ''),
                'email' => (string)($user->email ?? $recipient->email),
                'username' => (string)($user->username ?? ''),
            ],
        ];

        if ($this->hasEventHandlers(self::EVENT_DEFINE_VARIABLES)) {
            $event = new DefineVariablesEvent([
                'user' => $user,
                'recipient' => $recipient,
                'variables' => $variables,
            ]);
            $this->trigger(self::EVENT_DEFINE_VARIABLES, $event);
            $variables = self::scalarsOnly($event->variables);
        }

        return $variables;
    }

    /**
     * Personalizes a template for a recipient.
     *
     * @param string $template The subject, HTML body or text body
     * @param array $context The recipient’s variables (see [[getContext()]])
     * @param bool $html Whether the template is HTML
     * @param bool|null $safeMode Whether to use safe mode (defaults to the plugin setting)
     * @throws Throwable if the template can’t be rendered
     */
    public function personalize(string $template, array $context, bool $html, ?bool $safeMode = null): string
    {
        $safeMode ??= Plugin::getInstance()->getSettings()->safeMode;

        if ($safeMode) {
            $values = [];

            foreach ($this->getTokens() as $token) {
                $values[$token] = self::valueAt($context, $token);
            }

            return SafeTemplate::render($template, $values, $html);
        }

        return SandboxTwig::render($template, $context, $html, Craft::$app->getTimeZone());
    }

    /**
     * Validates a template, returning an error message if it’s invalid.
     */
    public function validateTemplate(string $template, array $context, bool $html, ?bool $safeMode = null): ?string
    {
        $safeMode ??= Plugin::getInstance()->getSettings()->safeMode;

        if ($safeMode) {
            $tokens = $this->getTokens();
            $errors = [];

            foreach (SafeTemplate::leftovers($template, $tokens) as $snippet) {
                $errors[] = SafeTemplate::isFormattedToken($snippet, $tokens)
                    ? Craft::t('mailer', 'Remove the formatting inside “{snippet}”.', ['snippet' => $snippet])
                    : Craft::t('mailer', '“{snippet}” isn’t an available variable.', ['snippet' => $snippet]);
            }

            return $errors ? implode(' ', $errors) . ' ' . Craft::t('mailer', 'Only the listed variables can be used in safe mode.') : null;
        }

        return SandboxTwig::validate($template, $context, $html, Craft::$app->getTimeZone());
    }

    /**
     * Validates the subject and body of a compose form, adding errors to it.
     *
     * @return bool Whether the templates are valid
     */
    public function validateForm(ComposeForm $form, User $currentUser): bool
    {
        $context = $this->getContext($currentUser, new RecipientData([
            'userId' => $currentUser->id,
            'email' => (string)$currentUser->email,
        ]));

        if ($form->subject !== '' && ($error = $this->validateTemplate($form->subject, $context, false))) {
            $form->addError('subject', $error);
        }

        $content = $form->getBodyContent();

        if ($content !== []) {
            if ($error = $this->validateTemplate($this->contentToHtml($content), $context, true)) {
                $form->addError('bodyJson', $error);
            } elseif ($error = $this->validateTemplate($this->contentToText($content), $context, false)) {
                $form->addError('bodyJson', $error);
            }
        }

        return !$form->hasErrors('subject') && !$form->hasErrors('bodyJson');
    }

    /**
     * Wraps a personalized HTML body in the system email template.
     *
     * Mirrors how Craft renders system messages: a custom HTML template on Pro (with per-site overrides),
     * otherwise the default `_special/email.twig` template.
     *
     * @param string $bodyHtml
     * @param array{fromEmail?: string, fromName?: string|null, replyToEmail?: string|null} $variables
     */
    public function wrap(string $bodyHtml, array $variables = []): string
    {
        if (!Plugin::getInstance()->getSettings()->useEmailTemplate) {
            return $this->basicDocument($bodyHtml);
        }

        $key = md5(serialize($variables));

        if (!array_key_exists($key, $this->_wrappers)) {
            $wrapper = $this->renderEmailTemplate(self::BODY_PLACEHOLDER, $variables);
            $this->_wrappers[$key] = $wrapper !== null && str_contains($wrapper, self::BODY_PLACEHOLDER) ? $wrapper : false;
        }

        if ($this->_wrappers[$key] !== false) {
            return str_replace(self::BODY_PLACEHOLDER, $bodyHtml, $this->_wrappers[$key]);
        }

        // The template transforms the body, so it has to be rendered for every recipient
        return $this->renderEmailTemplate($bodyHtml, $variables) ?? $this->basicDocument($bodyHtml);
    }

    /**
     * Clears the rendered email template cache.
     */
    public function reset(): void
    {
        $this->_wrappers = [];
    }

    private function renderEmailTemplate(string $bodyHtml, array $variables): ?string
    {
        $mailer = Craft::$app->getMailer();
        $template = $mailer->template ?? null;
        $overrides = $mailer->siteOverrides[Craft::$app->getSites()->getCurrentSite()->uid] ?? [];

        if (isset($overrides['template'])) {
            $template = $overrides['template'];
        }

        $template = $template ? App::parseEnv($template) : null;

        if (Craft::$app->edition->value >= CmsEdition::Pro->value && $template) {
            $templateMode = View::TEMPLATE_MODE_SITE;
        } else {
            $template = '_special/email.twig';
            $templateMode = View::TEMPLATE_MODE_CP;
        }

        $settings = App::mailSettings();

        try {
            return Craft::$app->getView()->renderTemplate($template, [
                'body' => Template::raw($bodyHtml),
                'emailKey' => 'mailer',
                'language' => Craft::$app->language,
                'fromEmail' => $variables['fromEmail'] ?? App::parseEnv($settings->fromEmail),
                'fromName' => $variables['fromName'] ?? App::parseEnv($settings->fromName),
                'replyToEmail' => $variables['replyToEmail'] ?? App::parseEnv($settings->replyToEmail),
            ], $templateMode);
        } catch (Throwable $e) {
            Craft::warning("Error rendering email template “{$template}”: {$e->getMessage()}", __METHOD__);
            return null;
        }
    }

    private function basicDocument(string $bodyHtml): string
    {
        $language = htmlspecialchars(Craft::$app->language, ENT_QUOTES);

        return "<!DOCTYPE html>\n<html lang=\"{$language}\">\n<head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"></head>\n<body>\n{$bodyHtml}\n</body>\n</html>";
    }

    /**
     * Returns the value at a dotted path, e.g. `user.firstName`.
     */
    private static function valueAt(array $context, string $path): string
    {
        $value = $context;

        foreach (explode('.', $path) as $segment) {
            if (!is_array($value) || !array_key_exists($segment, $value)) {
                return '';
            }

            $value = $value[$segment];
        }

        return is_scalar($value) ? (string)$value : '';
    }

    /**
     * Removes anything that isn’t a scalar or array, so templates can’t call methods on objects.
     */
    private static function scalarsOnly(array $variables): array
    {
        $clean = [];

        foreach ($variables as $key => $value) {
            if (is_array($value)) {
                $clean[$key] = self::scalarsOnly($value);
            } elseif (is_scalar($value) || $value === null) {
                $clean[$key] = $value;
            } elseif ($value instanceof \Stringable) {
                $clean[$key] = (string)$value;
            }
        }

        return $clean;
    }
}
