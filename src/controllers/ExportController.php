<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\controllers;

use Craft;
use craft\web\Controller;
use rareform\mailer\helpers\Csv;
use rareform\mailer\models\ComposeForm;
use rareform\mailer\Plugin;
use yii\web\Response;

/**
 * Exports the selected users as CSV.
 */
class ExportController extends Controller
{
    /**
     * Downloads the users selected in the compose form (user groups and individual users) as a CSV file.
     */
    public function actionUsers(): Response
    {
        $this->requireCpRequest();
        $this->requirePostRequest();
        $this->requirePermission(Plugin::PERMISSION_SEND);
        $this->requirePermission(Plugin::PERMISSION_EXPORT);

        $form = ComposeForm::fromRequest();
        $users = Plugin::getInstance()->getRecipients()->getSelectedUsers($form);

        if (!$users) {
            return $this->asFailure(Craft::t('mailer', 'Select at least one user group or user to export.'));
        }

        $rows = [[
            Craft::t('mailer', 'First name'),
            Craft::t('mailer', 'Last name'),
            Craft::t('mailer', 'Username'),
            Craft::t('mailer', 'Email'),
            Craft::t('mailer', 'Status'),
        ]];

        foreach ($users as $user) {
            $rows[] = [$user->firstName, $user->lastName, $user->username, $user->email, $user->getStatus()];
        }

        return $this->response->sendContentAsFile(Csv::build($rows), 'mailer-users-' . date('Y-m-d-His') . '.csv', [
            'mimeType' => 'text/csv',
        ]);
    }
}
