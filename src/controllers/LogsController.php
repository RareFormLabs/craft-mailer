<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\controllers;

use Craft;
use craft\web\Controller;
use rareform\mailer\models\RecipientData;
use rareform\mailer\Plugin;
use rareform\mailer\services\Attachments;
use rareform\mailer\web\assets\cp\MailerCpAsset;
use yii\web\NotFoundHttpException;
use yii\web\Response;

/**
 * Send logs.
 */
class LogsController extends Controller
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
     * Lists sends.
     */
    public function actionIndex(): Response
    {
        $sendsService = Plugin::getInstance()->getSends();
        $total = $sendsService->getTotalSends();
        [$page, $totalPages] = $this->page($total);

        $this->getView()->registerAssetBundle(MailerCpAsset::class);

        return $this->renderTemplate('mailer/logs/index', [
            'sends' => $sendsService->getSends(($page - 1) * self::PER_PAGE, self::PER_PAGE),
            'page' => $page,
            'totalPages' => $totalPages,
            'total' => $total,
            'canManage' => Craft::$app->getUser()->checkPermission(Plugin::PERMISSION_MANAGE_LOGS),
            'canSend' => Craft::$app->getUser()->checkPermission(Plugin::PERMISSION_SEND),
        ]);
    }

    /**
     * Shows a send’s details.
     */
    public function actionView(int $sendId): Response
    {
        $sendsService = Plugin::getInstance()->getSends();
        $send = $sendsService->getSendById($sendId);

        if (!$send) {
            throw new NotFoundHttpException('Send not found');
        }

        $status = $this->request->getQueryParam('status');
        $status = in_array($status, [RecipientData::STATUS_PENDING, RecipientData::STATUS_SENT, RecipientData::STATUS_FAILED, RecipientData::STATUS_SKIPPED], true) ? $status : null;
        $query = $sendsService->createRecipientQuery($send->id, $status);
        $total = (int)$query->count();
        [$page, $totalPages] = $this->page($total);
        $rows = $query->offset(($page - 1) * self::PER_PAGE)->limit(self::PER_PAGE)->all();

        $this->getView()->registerAssetBundle(MailerCpAsset::class);

        return $this->renderTemplate('mailer/logs/view', [
            'send' => $send,
            'previewHtml' => Plugin::getInstance()->getRenderer()->wrap(Plugin::getInstance()->getImages()->prepareForDisplay(
                (string)$send->bodyHtml,
                array_flip(Attachments::cidsByAssetId($send->attachments)),
            ), [
                'fromEmail' => $send->fromEmail,
                'fromName' => $send->fromName,
                'replyToEmail' => $send->replyTo,
            ]),
            'sender' => $send->getSender(),
            'recipients' => array_map([RecipientData::class, 'fromRow'], $rows),
            'status' => $status,
            'page' => $page,
            'totalPages' => $totalPages,
            'total' => $total,
            'isStalled' => $sendsService->isStalled($send),
            'canManage' => Craft::$app->getUser()->checkPermission(Plugin::PERMISSION_MANAGE_LOGS),
            'canSend' => Craft::$app->getUser()->checkPermission(Plugin::PERMISSION_SEND),
        ]);
    }

    /**
     * Cancels an active send.
     */
    public function actionCancel(): ?Response
    {
        $this->requirePostRequest();
        $this->requirePermission(Plugin::PERMISSION_MANAGE_LOGS);
        $sendId = (int)$this->request->getRequiredBodyParam('sendId');

        if (!Plugin::getInstance()->getSends()->cancel($sendId)) {
            return $this->asFailure(Craft::t('mailer', 'The send couldn’t be cancelled.'));
        }

        return $this->asSuccess(Craft::t('mailer', 'Send cancelled.'));
    }

    /**
     * Resumes a stalled send.
     */
    public function actionResume(): ?Response
    {
        $this->requirePostRequest();
        $this->requirePermission(Plugin::PERMISSION_MANAGE_LOGS);
        $sendId = (int)$this->request->getRequiredBodyParam('sendId');

        if (!Plugin::getInstance()->getSends()->resume($sendId)) {
            return $this->asFailure(Craft::t('mailer', 'The send couldn’t be resumed.'));
        }

        return $this->asSuccess(Craft::t('mailer', 'Send resumed.'));
    }

    /**
     * Deletes a completed send’s log.
     */
    public function actionDelete(): ?Response
    {
        $this->requirePostRequest();
        $this->requirePermission(Plugin::PERMISSION_MANAGE_LOGS);
        $sendId = (int)$this->request->getRequiredBodyParam('sendId');

        if (!Plugin::getInstance()->getSends()->deleteSend($sendId)) {
            return $this->asFailure(Craft::t('mailer', 'The log couldn’t be deleted.'));
        }

        return $this->asSuccess(Craft::t('mailer', 'Log deleted.'), [], 'mailer/logs');
    }

    /**
     * Deletes the logs of all completed sends.
     */
    public function actionClear(): ?Response
    {
        $this->requirePostRequest();
        $this->requirePermission(Plugin::PERMISSION_MANAGE_LOGS);

        $count = Plugin::getInstance()->getSends()->clearLogs();

        return $this->asSuccess(Craft::t('mailer', '{num, number} {num, plural, =1{log} other{logs}} deleted.', ['num' => $count]), [], 'mailer/logs');
    }

    /**
     * @return array{0: int, 1: int} The current page and the total number of pages
     */
    private function page(int $total): array
    {
        $totalPages = max(1, (int)ceil($total / self::PER_PAGE));
        $page = min($totalPages, max(1, (int)$this->request->getQueryParam('page', 1)));

        return [$page, $totalPages];
    }
}
