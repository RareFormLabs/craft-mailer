<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\services;

use Craft;
use craft\db\Query;
use craft\elements\User;
use craft\helpers\Db;
use craft\helpers\Json;
use craft\helpers\Queue;
use craft\helpers\StringHelper;
use rareform\mailer\db\Table;
use rareform\mailer\events\SendEvent;
use rareform\mailer\jobs\SendBatchJob;
use rareform\mailer\models\ComposeForm;
use rareform\mailer\models\RecipientData;
use rareform\mailer\models\Send;
use rareform\mailer\Plugin;
use rareform\mailer\records\SendRecord;
use Throwable;
use yii\base\Component;
use yii\base\Exception;

/**
 * Creates, queues and tracks sends.
 */
class Sends extends Component
{
    /**
     * @event SendEvent The event triggered before a send is queued. Set `isValid` to `false` to prevent it.
     */
    public const EVENT_BEFORE_QUEUE = 'beforeQueue';

    /**
     * @event SendEvent The event triggered after a send completes (finished, partially failed, failed or cancelled).
     */
    public const EVENT_AFTER_COMPLETE = 'afterComplete';

    /**
     * Creates a send from a compose form and queues it.
     *
     * @param ComposeForm $form A validated form
     * @param RecipientData[] $recipients The resolved recipients
     * @param User $sender
     * @return Send|null The send, or `null` if a plugin prevented it
     * @throws Throwable
     */
    public function create(ComposeForm $form, array $recipients, User $sender): ?Send
    {
        $plugin = Plugin::getInstance();
        $settings = $plugin->getSettings();
        $renderer = $plugin->getRenderer();
        $content = $form->getBodyContent();
        $uid = StringHelper::UUID();
        $summary = $plugin->getRecipients()->summarize($recipients);

        $send = new Send([
            'uid' => $uid,
            'senderId' => $sender->id,
            'status' => Send::STATUS_QUEUED,
            'description' => $this->describe($form, $summary),
            'fromName' => $form->fromName ?: null,
            'fromEmail' => $form->fromEmail,
            'replyTo' => $form->replyTo ?: null,
            'subject' => $form->subject,
            'bodyJson' => Json::encode($content),
            'bodyHtml' => $renderer->contentToHtml($content),
            'bodyText' => $renderer->contentToText($content),
            'recipientsConfig' => $form->getRecipientsConfig(),
            'settingsSnapshot' => [
                'safeMode' => $settings->safeMode,
                'batchMode' => $settings->batchMode,
                'batchMails' => $settings->batchMails,
                'batchTime' => $settings->batchTime,
                'useEmailTemplate' => $settings->useEmailTemplate,
                'testToEmailAddress' => Craft::$app->getConfig()->getGeneral()->getTestToEmailAddress() ?: null,
            ],
            'totalRecipients' => $summary['total'],
            'skippedCount' => $summary['skipped'],
        ]);

        $event = new SendEvent(['send' => $send]);
        $this->trigger(self::EVENT_BEFORE_QUEUE, $event);

        if (!$event->isValid) {
            return null;
        }

        $send->attachments = $plugin->getAttachments()->store($form, $uid);
        $db = Craft::$app->getDb();
        $transaction = $db->beginTransaction();

        try {
            $record = new SendRecord();
            $record->uid = $uid;
            $record->senderId = $send->senderId;
            $record->status = $send->status;
            $record->description = mb_substr((string)$send->description, 0, 255);
            $record->fromName = $send->fromName;
            $record->fromEmail = $send->fromEmail;
            $record->replyTo = $send->replyTo;
            $record->subject = $send->subject;
            $record->bodyJson = $send->bodyJson;
            $record->bodyHtml = $send->bodyHtml;
            $record->bodyText = $send->bodyText;
            $record->recipientsConfig = Json::encode($send->recipientsConfig);
            $record->attachments = Json::encode($send->attachments);
            $record->settingsSnapshot = Json::encode($send->settingsSnapshot);
            $record->totalRecipients = $send->totalRecipients;
            $record->skippedCount = $send->skippedCount;

            if (!$record->save(false)) {
                throw new Exception('Couldn’t save the send.');
            }

            $send->id = (int)$record->id;

            foreach (array_chunk($recipients, 500) as $chunk) {
                Db::batchInsert(Table::RECIPIENTS, array_keys($chunk[0]->toRow($send->id)), array_map(
                    fn(RecipientData $recipient) => array_values($recipient->toRow($send->id)),
                    $chunk,
                ));
            }

            $transaction->commit();
        } catch (Throwable $e) {
            $transaction->rollBack();
            $plugin->getAttachments()->deleteForSend($send);
            throw $e;
        }

        if ($summary['sendable'] === 0) {
            $this->finalize($send->id);
        } else {
            $this->queue($send->id);
        }

        return $this->getSendById($send->id);
    }

    /**
     * Pushes a job that continues sending.
     */
    public function queue(int $sendId, int $delay = 0, array $config = []): void
    {
        Queue::push(new SendBatchJob(['sendId' => $sendId] + $config), null, $delay, Plugin::getInstance()->getSettings()->jobTtr);
    }

    /**
     * Returns a send by its ID.
     */
    public function getSendById(int $id): ?Send
    {
        $record = SendRecord::findOne($id);

        return $record ? Send::fromRecord($record) : null;
    }

    /**
     * Returns the total number of sends.
     */
    public function getTotalSends(): int
    {
        return (int)SendRecord::find()->count();
    }

    /**
     * Returns sends, newest first, without their message bodies.
     *
     * @return Send[]
     */
    public function getSends(int $offset = 0, ?int $limit = null): array
    {
        $records = SendRecord::find()
            ->select(['id', 'uid', 'senderId', 'status', 'description', 'fromName', 'fromEmail', 'replyTo', 'subject', 'attachments', 'settingsSnapshot', 'totalRecipients', 'sentCount', 'failedCount', 'skippedCount', 'dateStarted', 'dateFinished', 'dateCreated', 'dateUpdated'])
            ->orderBy(['dateCreated' => SORT_DESC, 'id' => SORT_DESC])
            ->offset($offset)
            ->limit($limit)
            ->all();

        $sends = [];

        foreach ($records as $record) {
            if ($record instanceof SendRecord) {
                $sends[] = Send::fromRecord($record);
            }
        }

        return $sends;
    }

    /**
     * Returns a query for a send’s recipients.
     */
    public function createRecipientQuery(int $sendId, ?string $status = null): Query
    {
        return (new Query())
            ->from(Table::RECIPIENTS)
            ->where(['sendId' => $sendId])
            ->andFilterWhere(['status' => $status])
            ->orderBy(['id' => SORT_ASC]);
    }

    /**
     * Updates a send’s counters from its recipients.
     */
    public function recount(int $sendId): void
    {
        $counts = (new Query())
            ->select(['status', 'count' => 'COUNT(*)'])
            ->from(Table::RECIPIENTS)
            ->where(['sendId' => $sendId])
            ->groupBy(['status'])
            ->pairs();

        Db::update(Table::SENDS, [
            'totalRecipients' => array_sum($counts),
            'sentCount' => (int)($counts[RecipientData::STATUS_SENT] ?? 0),
            'failedCount' => (int)($counts[RecipientData::STATUS_FAILED] ?? 0),
            'skippedCount' => (int)($counts[RecipientData::STATUS_SKIPPED] ?? 0),
        ], ['id' => $sendId]);
    }

    /**
     * Marks a send as complete, once no recipients are left to send.
     *
     * Safe to call more than once: only the first call changes the status and fires [[EVENT_AFTER_COMPLETE]].
     */
    public function finalize(int $sendId): void
    {
        $this->recount($sendId);
        $send = $this->getSendById($sendId);

        if (!$send) {
            return;
        }

        if ($this->hasPending($sendId)) {
            return;
        }

        if ($send->status === Send::STATUS_CANCELLED) {
            $status = Send::STATUS_CANCELLED;
            $from = [Send::STATUS_CANCELLED];
        } else {
            $status = match (true) {
                $send->failedCount === 0 => Send::STATUS_FINISHED,
                $send->sentCount > 0 => Send::STATUS_PARTIAL,
                default => Send::STATUS_FAILED,
            };
            $from = Send::ACTIVE_STATUSES;
        }

        $updated = Db::update(Table::SENDS, [
            'status' => $status,
            'dateFinished' => Db::prepareDateForDb(new \DateTime()),
        ], ['id' => $sendId, 'status' => $from, 'dateFinished' => null]);

        if (!$updated) {
            return;
        }

        $send = $this->getSendById($sendId);
        Plugin::getInstance()->getAttachments()->deleteForSend($send);

        if ($this->hasEventHandlers(self::EVENT_AFTER_COMPLETE)) {
            $this->trigger(self::EVENT_AFTER_COMPLETE, new SendEvent(['send' => $send]));
        }
    }

    /**
     * Cancels an active send. Recipients that haven’t been sent yet are skipped.
     */
    public function cancel(int $sendId): bool
    {
        $updated = Db::update(Table::SENDS, ['status' => Send::STATUS_CANCELLED], [
            'id' => $sendId,
            'status' => Send::ACTIVE_STATUSES,
        ]);

        if (!$updated) {
            return false;
        }

        Db::update(Table::RECIPIENTS, [
            'status' => RecipientData::STATUS_SKIPPED,
            'error' => Craft::t('mailer', 'Cancelled'),
        ], ['sendId' => $sendId, 'status' => RecipientData::STATUS_PENDING]);

        $this->finalize($sendId);

        return true;
    }

    /**
     * Resumes a stalled send by pushing a new job.
     */
    public function resume(int $sendId): bool
    {
        $send = $this->getSendById($sendId);

        if (!$send || !$this->isStalled($send)) {
            return false;
        }

        $this->queue($sendId);

        return true;
    }

    /**
     * Returns whether an active send has stopped progressing (e.g. its job failed or was released).
     */
    public function isStalled(Send $send): bool
    {
        if (!$send->getIsActive() || !$send->dateUpdated) {
            return false;
        }

        $snapshot = $send->settingsSnapshot;
        $settings = Plugin::getInstance()->getSettings();
        $threshold = (int)($snapshot['batchTime'] ?? $settings->batchTime) + $settings->jobTtr + 60;

        return (time() - $send->dateUpdated->getTimestamp()) > $threshold && !$this->hasQueuedJob($send->id);
    }

    /**
     * Deletes logs of completed sends. Active sends are kept.
     *
     * @return int The number of deleted sends
     */
    public function clearLogs(): int
    {
        $attachments = Plugin::getInstance()->getAttachments();
        $uids = (new Query())
            ->select(['uid'])
            ->from(Table::SENDS)
            ->where(['not', ['status' => Send::ACTIVE_STATUSES]])
            ->column();

        foreach ($uids as $uid) {
            $attachments->delete($uid);
        }

        return Db::delete(Table::SENDS, ['not', ['status' => Send::ACTIVE_STATUSES]]);
    }

    /**
     * Deletes the log of a single completed send.
     */
    public function deleteSend(int $sendId): bool
    {
        $send = $this->getSendById($sendId);

        if (!$send || $send->getIsActive()) {
            return false;
        }

        Plugin::getInstance()->getAttachments()->deleteForSend($send);

        return (bool)Db::delete(Table::SENDS, ['id' => $sendId]);
    }

    /**
     * Returns whether a send has recipients waiting to be sent.
     */
    public function hasPending(int $sendId): bool
    {
        return (new Query())
            ->from(Table::RECIPIENTS)
            ->where(['sendId' => $sendId, 'status' => [RecipientData::STATUS_PENDING, RecipientData::STATUS_SENDING]])
            ->exists();
    }

    /**
     * Returns whether a queue job exists for a send (only detectable with Craft’s database queue).
     */
    public function hasQueuedJob(int $sendId): bool
    {
        $queue = Craft::$app->getQueue();

        if (!$queue instanceof \craft\queue\Queue) {
            // Can’t inspect other queue drivers; assume the job is still there.
            return true;
        }

        foreach ($queue->getJobInfo() as $info) {
            if (($info['status'] ?? null) === \craft\queue\Queue::STATUS_FAILED) {
                continue;
            }

            $description = (string)($info['description'] ?? '');

            if (str_contains($description, SendBatchJob::descriptionMarker($sendId))) {
                return true;
            }
        }

        return false;
    }

    /**
     * Builds a short description of a send’s recipients, e.g. “Custom · Groups: Members, Admins · 3 users”.
     */
    private function describe(ComposeForm $form, array $summary): string
    {
        $parts = [];

        if ($form->sendToCustom) {
            $parts[] = Craft::t('mailer', 'Custom');
        }

        if ($form->sendToGroups) {
            $names = [];

            foreach ($form->normalizedGroupIds() as $id) {
                if ($id === ComposeForm::ADMINS) {
                    $names[] = Craft::t('mailer', 'Admins');
                } elseif ($group = Craft::$app->getUserGroups()->getGroupById($id)) {
                    $names[] = Craft::t('site', $group->name);
                }
            }

            $parts[] = Craft::t('mailer', 'Groups: {names}', ['names' => implode(', ', $names)]);
        }

        if ($form->sendToUsers) {
            $parts[] = Craft::t('mailer', '{num, number} {num, plural, =1{user} other{users}}', ['num' => count($form->userIds)]);
        }

        return implode(' · ', $parts);
    }
}
