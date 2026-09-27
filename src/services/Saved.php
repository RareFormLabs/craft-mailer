<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\services;

use craft\db\Query;
use craft\helpers\DateTimeHelper;
use craft\helpers\Db;
use craft\helpers\Json;
use rareform\mailer\db\Table;
use rareform\mailer\models\ComposeForm;
use yii\base\Component;

/**
 * Drafts (autosaved, per user) and templates (named, shared).
 */
class Saved extends Component
{
    public const KIND_DRAFT = 'draft';
    public const KIND_TEMPLATE = 'template';

    /**
     * Keys of form data kept in templates. Recipients, schedule and attachments aren’t part of a template.
     */
    private const TEMPLATE_KEYS = ['subject', 'bodyJson', 'fromName', 'fromEmail', 'replyTo', 'embedImages'];

    /**
     * Saves a draft, returning its ID.
     */
    public function saveDraft(ComposeForm $form, int $userId, ?int $draftId = null): int
    {
        $data = $form->toData();
        $name = mb_substr($form->subject, 0, 255) ?: null;

        if ($draftId && $this->getRow($draftId, self::KIND_DRAFT, $userId)) {
            Db::update(Table::SAVED, ['name' => $name, 'data' => Json::encode($data)], ['id' => $draftId]);

            return $draftId;
        }

        Db::insert(Table::SAVED, [
            'kind' => self::KIND_DRAFT,
            'name' => $name,
            'creatorId' => $userId,
            'data' => Json::encode($data),
        ]);

        return (int)\Craft::$app->getDb()->getLastInsertID();
    }

    /**
     * Saves a template, returning its ID.
     */
    public function saveTemplate(ComposeForm $form, string $name, int $userId, ?int $templateId = null): int
    {
        $data = array_intersect_key($form->toData(), array_flip(self::TEMPLATE_KEYS));
        $name = mb_substr(trim($name), 0, 255);

        if ($templateId && $this->getRow($templateId, self::KIND_TEMPLATE)) {
            Db::update(Table::SAVED, ['name' => $name, 'data' => Json::encode($data)], ['id' => $templateId]);

            return $templateId;
        }

        Db::insert(Table::SAVED, [
            'kind' => self::KIND_TEMPLATE,
            'name' => $name,
            'creatorId' => $userId,
            'data' => Json::encode($data),
        ]);

        return (int)\Craft::$app->getDb()->getLastInsertID();
    }

    /**
     * Returns a draft or template’s form data.
     *
     * @param int|null $userId Only return drafts belonging to this user
     */
    public function getData(int $id, string $kind, ?int $userId = null): ?array
    {
        $row = $this->getRow($id, $kind, $userId);

        return $row ? (Json::decodeIfJson($row['data']) ?: []) : null;
    }

    /**
     * Returns drafts or templates, most recently updated first.
     *
     * @return array<int, array{id: int, name: string|null, creatorId: int|null, dateUpdated: \DateTime, dateCreated: \DateTime}>
     */
    public function getAll(string $kind, ?int $userId = null): array
    {
        $rows = (new Query())
            ->select(['id', 'name', 'creatorId', 'dateCreated', 'dateUpdated'])
            ->from(Table::SAVED)
            ->where(['kind' => $kind])
            ->andFilterWhere(['creatorId' => $userId])
            ->orderBy($kind === self::KIND_TEMPLATE ? ['name' => SORT_ASC] : ['dateUpdated' => SORT_DESC])
            ->all();

        // Database dates are UTC
        return array_map(fn(array $row) => array_merge($row, [
            'dateCreated' => DateTimeHelper::toDateTime($row['dateCreated']),
            'dateUpdated' => DateTimeHelper::toDateTime($row['dateUpdated']),
        ]), $rows);
    }

    /**
     * Deletes a draft or template.
     *
     * @param int|null $userId Only delete drafts belonging to this user
     */
    public function delete(int $id, string $kind, ?int $userId = null): bool
    {
        if (!$this->getRow($id, $kind, $userId)) {
            return false;
        }

        return (bool)Db::delete(Table::SAVED, ['id' => $id]);
    }

    private function getRow(int $id, string $kind, ?int $userId = null): ?array
    {
        return (new Query())
            ->from(Table::SAVED)
            ->where(['id' => $id, 'kind' => $kind])
            ->andFilterWhere(['creatorId' => $userId])
            ->one() ?: null;
    }
}
