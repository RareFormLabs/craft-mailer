<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\controllers;

use Craft;
use craft\web\Controller;
use rareform\mailer\models\ComposeForm;
use rareform\mailer\Plugin;
use rareform\mailer\services\Saved;
use rareform\mailer\web\assets\cp\MailerCpAsset;
use yii\web\Response;

/**
 * Drafts and templates.
 */
class SavedController extends Controller
{
    /**
     * @inheritdoc
     */
    public function beforeAction($action): bool
    {
        if (!parent::beforeAction($action)) {
            return false;
        }

        $this->requireCpRequest();
        $this->requirePermission(Plugin::PERMISSION_SEND);

        return true;
    }

    /**
     * Lists the current user’s drafts.
     */
    public function actionDrafts(): Response
    {
        $this->getView()->registerAssetBundle(MailerCpAsset::class);

        return $this->renderTemplate('mailer/saved/drafts', [
            'drafts' => Plugin::getInstance()->getSaved()->getAll(Saved::KIND_DRAFT, static::currentUser()?->id),
        ]);
    }

    /**
     * Lists templates.
     */
    public function actionTemplates(): Response
    {
        $this->getView()->registerAssetBundle(MailerCpAsset::class);

        return $this->renderTemplate('mailer/saved/templates', [
            'templates' => Plugin::getInstance()->getSaved()->getAll(Saved::KIND_TEMPLATE),
            'canManage' => Craft::$app->getUser()->checkPermission(Plugin::PERMISSION_MANAGE_TEMPLATES),
        ]);
    }

    /**
     * Autosaves the compose form as a draft.
     */
    public function actionSaveDraft(): Response
    {
        $this->requirePostRequest();
        $this->requireAcceptsJson();

        $draftId = (int)$this->request->getBodyParam('draftId') ?: null;
        $id = Plugin::getInstance()->getSaved()->saveDraft(ComposeForm::fromRequest(), (int)static::currentUser()?->id, $draftId);

        return $this->asJson([
            'draftId' => $id,
            'savedAt' => Craft::$app->getFormatter()->asTime(new \DateTime(), 'short'),
        ]);
    }

    /**
     * Deletes one of the current user’s drafts.
     */
    public function actionDeleteDraft(): ?Response
    {
        $this->requirePostRequest();
        $id = (int)$this->request->getRequiredBodyParam('id');

        if (!Plugin::getInstance()->getSaved()->delete($id, Saved::KIND_DRAFT, static::currentUser()?->id)) {
            return $this->asFailure(Craft::t('mailer', 'The draft couldn’t be deleted.'));
        }

        return $this->asSuccess(Craft::t('mailer', 'Draft deleted.'));
    }

    /**
     * Saves the compose form’s message as a template.
     */
    public function actionSaveTemplate(): Response
    {
        $this->requirePostRequest();
        $this->requireAcceptsJson();
        $this->requirePermission(Plugin::PERMISSION_MANAGE_TEMPLATES);

        $name = trim((string)$this->request->getBodyParam('templateName', ''));

        if ($name === '') {
            return $this->asFailure(Craft::t('mailer', 'Give the template a name.'));
        }

        $id = Plugin::getInstance()->getSaved()->saveTemplate(ComposeForm::fromRequest(), $name, (int)static::currentUser()?->id);

        return $this->asSuccess(Craft::t('mailer', 'Template “{name}” saved.', ['name' => $name]), [
            'templateId' => $id,
            'name' => $name,
        ]);
    }

    /**
     * Returns a template’s message, for loading into the compose screen.
     */
    public function actionTemplateData(): Response
    {
        $this->requirePostRequest();
        $this->requireAcceptsJson();

        $data = Plugin::getInstance()->getSaved()->getData((int)$this->request->getRequiredBodyParam('id'), Saved::KIND_TEMPLATE);

        if ($data === null) {
            return $this->asFailure(Craft::t('mailer', 'That template no longer exists.'));
        }

        if (!Craft::$app->getUser()->checkPermission(Plugin::PERMISSION_CHANGE_SENDER)) {
            unset($data['fromName'], $data['fromEmail']);
        }

        return $this->asJson($data);
    }

    /**
     * Deletes a template.
     */
    public function actionDeleteTemplate(): ?Response
    {
        $this->requirePostRequest();
        $this->requirePermission(Plugin::PERMISSION_MANAGE_TEMPLATES);
        $id = (int)$this->request->getRequiredBodyParam('id');

        if (!Plugin::getInstance()->getSaved()->delete($id, Saved::KIND_TEMPLATE)) {
            return $this->asFailure(Craft::t('mailer', 'The template couldn’t be deleted.'));
        }

        return $this->asSuccess(Craft::t('mailer', 'Template deleted.'));
    }
}
