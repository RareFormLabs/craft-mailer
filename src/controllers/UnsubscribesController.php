<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\controllers;

use Craft;
use craft\web\Controller;
use rareform\mailer\helpers\AddressParser;
use rareform\mailer\Plugin;
use rareform\mailer\web\assets\cp\MailerCpAsset;
use yii\web\Response;

/**
 * Manages the list of people who have unsubscribed.
 */
class UnsubscribesController extends Controller
{
    private const PER_PAGE = 50;

    /**
     * @inheritdoc
     */
    public function beforeAction($action): bool
    {
        if (!parent::beforeAction($action)) {
            return false;
        }

        $this->requireCpRequest();
        $this->requirePermission(Plugin::PERMISSION_VIEW_LOGS);

        return true;
    }

    /**
     * Lists unsubscribes.
     */
    public function actionIndex(): Response
    {
        $search = trim((string)$this->request->getQueryParam('search', ''));
        $query = Plugin::getInstance()->getUnsubscribes()->createQuery($search);
        $total = (int)$query->count();
        $totalPages = max(1, (int)ceil($total / self::PER_PAGE));
        $page = min($totalPages, max(1, (int)$this->request->getQueryParam('page', 1)));

        $this->getView()->registerAssetBundle(MailerCpAsset::class);

        return $this->renderTemplate('mailer/unsubscribes/index', [
            // Database dates are UTC
            'unsubscribes' => array_map(
                fn(array $row) => array_merge($row, ['dateCreated' => \craft\helpers\DateTimeHelper::toDateTime($row['dateCreated'])]),
                $query->offset(($page - 1) * self::PER_PAGE)->limit(self::PER_PAGE)->all(),
            ),
            'search' => $search,
            'total' => $total,
            'page' => $page,
            'totalPages' => $totalPages,
            'canManage' => Craft::$app->getUser()->checkPermission(Plugin::PERMISSION_MANAGE_LOGS),
        ]);
    }

    /**
     * Adds an email address to the unsubscribe list.
     */
    public function actionAdd(): ?Response
    {
        $this->requirePostRequest();
        $this->requirePermission(Plugin::PERMISSION_MANAGE_LOGS);
        $email = trim((string)$this->request->getRequiredBodyParam('email'));

        if (!AddressParser::isValidEmail($email)) {
            return $this->asFailure(Craft::t('mailer', '“{address}” is not a valid email address.', ['address' => $email]));
        }

        Plugin::getInstance()->getUnsubscribes()->unsubscribe($email);

        return $this->asSuccess(Craft::t('mailer', '{email} unsubscribed.', ['email' => $email]));
    }

    /**
     * Removes an address from the unsubscribe list, so it receives emails again.
     */
    public function actionRemove(): ?Response
    {
        $this->requirePostRequest();
        $this->requirePermission(Plugin::PERMISSION_MANAGE_LOGS);

        if (!Plugin::getInstance()->getUnsubscribes()->remove((int)$this->request->getRequiredBodyParam('id'))) {
            return $this->asFailure(Craft::t('mailer', 'Couldn’t resubscribe that address.'));
        }

        return $this->asSuccess(Craft::t('mailer', 'Resubscribed.'));
    }
}
