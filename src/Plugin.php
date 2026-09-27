<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer;

use Craft;
use craft\base\Model;
use craft\events\RegisterUrlRulesEvent;
use craft\events\RegisterUserPermissionsEvent;
use craft\services\Gc;
use craft\services\UserPermissions;
use craft\web\UrlManager;
use rareform\mailer\models\Settings;
use rareform\mailer\services\Attachments;
use rareform\mailer\services\Delivery;
use rareform\mailer\services\Images;
use rareform\mailer\services\Recipients;
use rareform\mailer\services\Renderer;
use rareform\mailer\services\Sends;
use rareform\mailer\web\assets\cp\MailerCpAsset;
use yii\base\Event;

/**
 * Mailer: send emails to users, user groups and custom recipients from the control panel.
 *
 * @property-read Attachments $attachments
 * @property-read Delivery $delivery
 * @property-read Images $images
 * @property-read Recipients $recipients
 * @property-read Renderer $renderer
 * @property-read Sends $sends
 * @method Settings getSettings()
 */
class Plugin extends \craft\base\Plugin
{
    public const PERMISSION_SEND = 'mailer-send';
    public const PERMISSION_CHANGE_SENDER = 'mailer-changeSender';
    public const PERMISSION_EXPORT = 'mailer-exportUsers';
    public const PERMISSION_VIEW_LOGS = 'mailer-viewLogs';
    public const PERMISSION_MANAGE_LOGS = 'mailer-manageLogs';

    /**
     * @inheritdoc
     */
    public string $schemaVersion = '1.0.0';

    /**
     * @inheritdoc
     */
    public bool $hasCpSection = true;

    /**
     * @inheritdoc
     */
    public bool $hasCpSettings = true;

    /**
     * @inheritdoc
     */
    public static function config(): array
    {
        return [
            'components' => [
                'attachments' => Attachments::class,
                'delivery' => Delivery::class,
                'images' => Images::class,
                'recipients' => Recipients::class,
                'renderer' => Renderer::class,
                'sends' => Sends::class,
            ],
        ];
    }

    /**
     * @inheritdoc
     */
    public function init(): void
    {
        parent::init();

        $this->name = $this->getSettings()->name ?: 'Mailer';

        Event::on(Gc::class, Gc::EVENT_RUN, function() {
            $this->getAttachments()->gc();
        });

        $this->registerPermissions();

        if (Craft::$app->getRequest()->getIsCpRequest()) {
            $this->registerCpRoutes();
        }
    }

    public function getAttachments(): Attachments
    {
        return $this->get('attachments');
    }

    public function getDelivery(): Delivery
    {
        return $this->get('delivery');
    }

    public function getImages(): Images
    {
        return $this->get('images');
    }

    public function getRecipients(): Recipients
    {
        return $this->get('recipients');
    }

    public function getRenderer(): Renderer
    {
        return $this->get('renderer');
    }

    public function getSends(): Sends
    {
        return $this->get('sends');
    }

    /**
     * @inheritdoc
     */
    public function getCpNavItem(): ?array
    {
        $user = Craft::$app->getUser();
        $canSend = $user->checkPermission(self::PERMISSION_SEND);
        $canViewLogs = $user->checkPermission(self::PERMISSION_VIEW_LOGS);

        if (!$canSend && !$canViewLogs) {
            return null;
        }

        $item = parent::getCpNavItem();
        $item['label'] = Craft::t('mailer', $this->getSettings()->name ?: 'Mailer');
        $item['url'] = $canSend ? 'mailer' : 'mailer/logs';
        $item['subnav'] = [];

        if ($canSend) {
            $item['subnav']['compose'] = ['label' => Craft::t('mailer', 'Compose'), 'url' => 'mailer'];
        }

        if ($canViewLogs) {
            $item['subnav']['logs'] = ['label' => Craft::t('mailer', 'Logs'), 'url' => 'mailer/logs'];
        }

        return $item;
    }

    /**
     * @inheritdoc
     */
    protected function createSettingsModel(): ?Model
    {
        return new Settings();
    }

    /**
     * @inheritdoc
     */
    protected function settingsHtml(): ?string
    {
        Craft::$app->getView()->registerAssetBundle(MailerCpAsset::class);

        return Craft::$app->getView()->renderTemplate('mailer/settings', [
            'settings' => $this->getSettings(),
            'overrides' => array_keys(Craft::$app->getConfig()->getConfigFromFile($this->handle)),
        ]);
    }

    private function registerCpRoutes(): void
    {
        Event::on(UrlManager::class, UrlManager::EVENT_REGISTER_CP_URL_RULES, function(RegisterUrlRulesEvent $event) {
            $event->rules['mailer'] = 'mailer/compose/index';
            $event->rules['mailer/logs'] = 'mailer/logs/index';
            $event->rules['mailer/logs/<sendId:\d+>'] = 'mailer/logs/view';
        });
    }

    private function registerPermissions(): void
    {
        Event::on(UserPermissions::class, UserPermissions::EVENT_REGISTER_PERMISSIONS, function(RegisterUserPermissionsEvent $event) {
            $event->permissions[] = [
                'heading' => Craft::t('mailer', 'Mailer'),
                'permissions' => [
                    self::PERMISSION_SEND => [
                        'label' => Craft::t('mailer', 'Send emails'),
                        'nested' => [
                            self::PERMISSION_CHANGE_SENDER => [
                                'label' => Craft::t('mailer', 'Change the sender name and email'),
                                'warning' => Craft::t('mailer', 'Allows sending emails from any address.'),
                            ],
                            self::PERMISSION_EXPORT => [
                                'label' => Craft::t('mailer', 'Export selected users as CSV'),
                            ],
                        ],
                    ],
                    self::PERMISSION_VIEW_LOGS => [
                        'label' => Craft::t('mailer', 'View logs'),
                        'nested' => [
                            self::PERMISSION_MANAGE_LOGS => [
                                'label' => Craft::t('mailer', 'Cancel, resume and delete sends'),
                            ],
                        ],
                    ],
                ],
            ];
        });
    }
}
