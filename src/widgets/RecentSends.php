<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\widgets;

use Craft;
use craft\base\Widget;
use rareform\mailer\models\Send;
use rareform\mailer\Plugin;

/**
 * Dashboard widget showing recent and in-progress sends.
 */
class RecentSends extends Widget
{
    /**
     * @var int The number of sends to show.
     */
    public int $limit = 5;

    /**
     * @inheritdoc
     */
    public static function displayName(): string
    {
        return Craft::t('mailer', 'Recent Emails');
    }

    /**
     * @inheritdoc
     */
    public static function icon(): ?string
    {
        return Craft::getAlias('@rareform/mailer/icon-mask.svg');
    }

    /**
     * @inheritdoc
     */
    public static function isSelectable(): bool
    {
        return Craft::$app->getUser()->checkPermission(Plugin::PERMISSION_VIEW_LOGS);
    }

    /**
     * @inheritdoc
     */
    protected function defineRules(): array
    {
        $rules = parent::defineRules();
        $rules[] = [['limit'], 'integer', 'min' => 1, 'max' => 20];

        return $rules;
    }

    /**
     * @inheritdoc
     */
    public function getSettingsHtml(): ?string
    {
        return Craft::$app->getView()->renderString(
            "{% import '_includes/forms' as forms %}{{ forms.textField({label: label, id: 'limit', name: 'limit', type: 'number', min: 1, max: 20, value: limit, errors: errors}) }}",
            ['label' => Craft::t('mailer', 'Number of emails'), 'limit' => $this->limit, 'errors' => $this->getErrors('limit')],
            \craft\web\View::TEMPLATE_MODE_CP,
        );
    }

    /**
     * @inheritdoc
     */
    public function getBodyHtml(): ?string
    {
        if (!Craft::$app->getUser()->checkPermission(Plugin::PERMISSION_VIEW_LOGS)) {
            return null;
        }

        $sends = Plugin::getInstance()->getSends()->getSends(0, $this->limit);

        return Craft::$app->getView()->renderTemplate('mailer/_widgets/recent-sends', [
            'sends' => $sends,
            'active' => array_filter($sends, fn(Send $send) => $send->getIsActive()),
        ]);
    }
}
