<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\controllers;

use Craft;
use craft\web\Controller;
use craft\web\View;
use rareform\mailer\Plugin;
use yii\web\Response;

/**
 * Public unsubscribe page, linked from emails.
 *
 * Supports one-click unsubscribes from email clients (RFC 8058), which POST without a CSRF token. Requests are
 * authorized by the signed token in the URL instead.
 */
class UnsubscribeController extends Controller
{
    /**
     * @inheritdoc
     */
    protected array|int|bool $allowAnonymous = self::ALLOW_ANONYMOUS_LIVE | self::ALLOW_ANONYMOUS_OFFLINE;

    /**
     * @inheritdoc
     */
    public $enableCsrfValidation = false;

    /**
     * Shows the unsubscribe confirmation (GET), or unsubscribes (POST).
     */
    public function actionIndex(string $code = ''): Response
    {
        $unsubscribes = Plugin::getInstance()->getUnsubscribes();
        // (`code`, not `token`: Craft reserves the `token` query param for its own tokens)
        $token = $code ?: (string)$this->request->getBodyParam('code', '');
        $data = $token !== '' ? $unsubscribes->parseToken($token) : null;

        if (!$data) {
            $this->response->setStatusCode(400);

            return $this->page('invalid');
        }

        if ($this->request->getIsPost()) {
            $unsubscribes->unsubscribe($data['email'], null, $data['sendId']);

            // Email clients’ one-click requests just need a success response
            if ($this->request->getBodyParam('List-Unsubscribe') === 'One-Click') {
                return $this->asRaw('');
            }

            return $this->page('done', $data['email']);
        }

        return $this->page($unsubscribes->isUnsubscribed($data['email']) ? 'done' : 'confirm', $data['email'], $token);
    }

    private function page(string $state, ?string $email = null, ?string $token = null): Response
    {
        return $this->renderTemplate('mailer/unsubscribe', [
            'state' => $state,
            'email' => $email,
            'token' => $token,
            'siteName' => Craft::$app->getSites()->getPrimarySite()->getName(),
        ], View::TEMPLATE_MODE_CP);
    }
}
