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
    public function create(ComposeForm $form, array $recipients, User $sender, ?string $description = null): ?Send
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
            'status' => $form->sendAt ? Send::STATUS_SCHEDULED : Send::STATUS_QUEUED,
            'scheduledFor' => $form->sendAt,
            'description' => $description ?? $this->describe($form, $summary),
            'fromName' => $form->fromName ?: null,
            'fromEmail' => $form->fromEmail,
            'replyTo' => $form->replyTo ?: null,
            'subject' => $form->subject,
            'bodyJson' => Json::encode($content),
            'bodyHtml' => null,
            'bodyText' => $renderer->contentToText($content),
            'recipientsConfig' => $form->getRecipientsConfig(),
            'settingsSnapshot' => [
                'safeMode' => $settings->safeMode,
                'batchMode' => $settings->batchMode,
                'batchMails' => $settings->batchMails,
                'batchTime' => $settings->batchTime,
                'useEmailTemplate' => $settings->useEmailTemplate,
                'embedImages' => $form->embedImages,
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
        $send->bodyHtml = $plugin->getImages()->prepareForEmail(
            $renderer->contentToHtml($content),
            $form->embedImages ? Attachments::cidsByAssetId($send->attachments) : null,
        );
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
            $record->scheduledFor = $send->scheduledFor ? Db::prepareDateForDb($send->scheduledFor) : null;

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

        if ($send->scheduledFor) {
            $this->queue($send->id, max(0, $send->scheduledFor->getTimestamp() - time()));
        } elseif ($summary['sendable'] === 0) {
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
     * Returns why a send’s failed recipients can’t be retried, or `null` if they can.
     */
    public function getRetryError(Send $send): ?string
    {
        if ($send->getIsActive()) {
            return Craft::t('mailer', 'Wait for the send to finish first.');
        }

        if ($send->failedCount === 0) {
            return Craft::t('mailer', 'No emails failed.');
        }

        foreach ($send->attachments as $attachment) {
            if (($attachment['source'] ?? null) === 'upload') {
                return Craft::t('mailer', 'This send had uploaded attachments, which aren’t kept. Use it as a template and upload them again instead.');
            }
        }

        return null;
    }

    /**
     * Creates a new send for a send’s failed recipients.
     *
     * @throws Throwable
     */
    public function retryFailed(Send $send, User $sender): ?Send
    {
        if ($error = $this->getRetryError($send)) {
            throw new Exception($error);
        }

        $recipients = array_map(function(array $row) {
            $recipient = RecipientData::fromRow($row);
            $recipient->id = null;
            $recipient->status = RecipientData::STATUS_PENDING;
            $recipient->error = null;
            $recipient->dateSent = null;

            return $recipient;
        }, $this->createRecipientQuery($send->id, RecipientData::STATUS_FAILED)->all());

        $form = ComposeForm::fromSend($send);
        $form->sendAt = null;

        return $this->create($form, $recipients, $sender, Craft::t('mailer', 'Retry of failed emails from “{subject}” (#{id})', [
            'subject' => mb_substr($send->subject, 0, 120),
            'id' => $send->id,
        ]));
    }

    /**
     * Pauses a send. It stays paused until it’s resumed.
     */
    public function pause(int $sendId, ?string $message = null): bool
    {
        return (bool)Db::update(Table::SENDS, [
            'status' => Send::STATUS_PAUSED,
            'statusMessage' => $message !== null ? mb_substr($message, 0, 255) : null,
        ], ['id' => $sendId, 'status' => [Send::STATUS_QUEUED, Send::STATUS_RUNNING]]);
    }

    /**
     * Resumes a paused or stalled send by pushing a new job.
     */
    public function resume(int $sendId): bool
    {
        $send = $this->getSendById($sendId);

        if (!$send || !$this->canResume($send)) {
            return false;
        }

        if ($send->status === Send::STATUS_PAUSED) {
            Db::update(Table::SENDS, ['status' => Send::STATUS_RUNNING, 'statusMessage' => null], ['id' => $sendId]);
        }

        $this->queue($sendId);

        return true;
    }

    /**
     * Returns whether a send can be resumed.
     */
    public function canResume(Send $send): bool
    {
        return $send->status === Send::STATUS_PAUSED || $this->isStalled($send);
    }

    /**
     * Works out a scheduled send’s recipients again from its recipient settings.
     */
    public function refreshRecipients(Send $send): void
    {
        $plugin = Plugin::getInstance();
        $recipients = $plugin->getRecipients()->resolve(ComposeForm::fromSend($send));
        $db = Craft::$app->getDb();
        $transaction = $db->beginTransaction();

        try {
            Db::delete(Table::RECIPIENTS, ['sendId' => $send->id, 'status' => [RecipientData::STATUS_PENDING, RecipientData::STATUS_SKIPPED]]);

            foreach (array_chunk($recipients, 500) as $chunk) {
                Db::batchInsert(Table::RECIPIENTS, array_keys($chunk[0]->toRow($send->id)), array_map(
                    fn(RecipientData $recipient) => array_values($recipient->toRow($send->id)),
                    $chunk,
                ));
            }

            $transaction->commit();
        } catch (Throwable $e) {
            $transaction->rollBack();
            throw $e;
        }

        $this->recount($send->id);
    }

    /**
     * Returns whether an active send has stopped progressing (e.g. its job failed or was released).
     */
    public function isStalled(Send $send): bool
    {
        if (!in_array($send->status, [Send::STATUS_QUEUED, Send::STATUS_RUNNING, Send::STATUS_SCHEDULED], true) || !$send->dateUpdated) {
            return false;
        }

        if ($send->status === Send::STATUS_SCHEDULED) {
            // Not stalled until well after it was due to start
            return $send->scheduledFor
                && time() - $send->scheduledFor->getTimestamp() > Plugin::getInstance()->getSettings()->jobTtr + 300
                && !$this->hasQueuedJob($send->id);
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

        if ($form->sendToCondition) {
            $parts[] = Craft::t('mailer', 'Users matching conditions');
        }

        return implode(' · ', $parts);
    }
}
