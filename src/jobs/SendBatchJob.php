<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\jobs;

use Craft;
use craft\db\Query;
use craft\elements\User;
use craft\helpers\Db;
use craft\queue\BaseJob;
use rareform\mailer\db\Table;
use rareform\mailer\models\RecipientData;
use rareform\mailer\models\Send;
use rareform\mailer\Plugin;

/**
 * Sends the next batch of a send’s pending emails, then queues itself again until none are left.
 *
 * Only one job exists per send at a time. With batch mode enabled, each job sends up to `batchMails` emails and
 * the next job is delayed by `batchTime` seconds. Each job also stops early if it approaches its time-to-reserve,
 * and continues immediately in a new job.
 */
class SendBatchJob extends BaseJob
{
    /**
     * @var int The send ID.
     */
    public int $sendId;

    /**
     * @var int The number of emails already sent in the current batch (when a batch spans several jobs).
     */
    public int $sentInBatch = 0;

    /**
     * Returns the string included in job descriptions to identify a send’s job.
     */
    public static function descriptionMarker(int $sendId): string
    {
        return "(Mailer #$sendId)";
    }

    /**
     * @inheritdoc
     */
    public function execute($queue): void
    {
        $plugin = Plugin::getInstance();
        $sends = $plugin->getSends();
        $send = $sends->getSendById($this->sendId);

        if (!$send || !$send->getIsActive()) {
            if ($send) {
                $sends->finalize($send->id);
            }
            return;
        }

        if ($send->status === Send::STATUS_QUEUED) {
            Db::update(Table::SENDS, [
                'status' => Send::STATUS_RUNNING,
                'dateStarted' => Db::prepareDateForDb(new \DateTime()),
            ], ['id' => $send->id, 'status' => Send::STATUS_QUEUED]);
        }

        // Emails left mid-send by a job that was killed may or may not have gone out. Don’t retry them.
        Db::update(Table::RECIPIENTS, [
            'status' => RecipientData::STATUS_FAILED,
            'error' => Craft::t('mailer', 'Interrupted while sending. Not retried to avoid sending a duplicate.'),
        ], ['sendId' => $send->id, 'status' => RecipientData::STATUS_SENDING]);

        $plugin->getRenderer()->reset();
        $settings = $plugin->getSettings();
        $snapshot = $send->settingsSnapshot;
        $batchMode = (bool)($snapshot['batchMode'] ?? $settings->batchMode);
        $batchMails = max(1, (int)($snapshot['batchMails'] ?? $settings->batchMails));
        $batchTime = max(0, (int)($snapshot['batchTime'] ?? $settings->batchTime));
        $quota = $batchMode ? max(0, $batchMails - $this->sentInBatch) : PHP_INT_MAX;
        $deadline = time() + (int)floor($settings->jobTtr * 0.8);
        $sendable = max(1, $send->totalRecipients - $send->skippedCount);
        $done = $send->sentCount + $send->failedCount;
        $cancelled = false;

        while ($quota > 0 && time() < $deadline && !$cancelled) {
            $rows = $sends->createRecipientQuery($send->id, RecipientData::STATUS_PENDING)
                ->limit((int)min(100, $quota))
                ->all();

            if (!$rows) {
                break;
            }

            $userIds = array_filter(array_column($rows, 'userId'));
            $users = $userIds ? User::find()->id($userIds)->status(null)->limit(null)->indexBy('id')->all() : [];

            foreach ($rows as $row) {
                if ($quota <= 0 || time() >= $deadline) {
                    break 2;
                }

                $claimed = Db::update(Table::RECIPIENTS, ['status' => RecipientData::STATUS_SENDING], [
                    'id' => $row['id'],
                    'status' => RecipientData::STATUS_PENDING,
                ]);

                if (!$claimed) {
                    continue;
                }

                $recipient = RecipientData::fromRow($row);
                $result = $plugin->getDelivery()->sendToRecipient($send, $recipient, $users[$recipient->userId] ?? null);

                Db::update(Table::RECIPIENTS, [
                    'status' => $result['status'],
                    'error' => $result['error'],
                    'dateSent' => $result['status'] === RecipientData::STATUS_SENT ? Db::prepareDateForDb(new \DateTime()) : null,
                ], ['id' => $recipient->id]);

                $quota--;
                $this->sentInBatch++;
                $done++;

                $this->setProgress($queue, min(1, $done / $sendable), Craft::t('mailer', '{done, number} of {total, number}', [
                    'done' => $done,
                    'total' => $sendable,
                ]));
            }

            $cancelled = (new Query())
                ->from(Table::SENDS)
                ->where(['id' => $send->id, 'status' => Send::STATUS_CANCELLED])
                ->exists();
        }

        $sends->recount($send->id);

        if ($cancelled || !$sends->hasPending($send->id)) {
            $sends->finalize($send->id);
            return;
        }

        // Touch the send so it isn’t considered stalled while waiting for the next batch
        Db::update(Table::SENDS, [], ['id' => $send->id]);

        if ($batchMode && $quota <= 0) {
            $sends->queue($send->id, $batchTime);
        } else {
            // Ran out of time; continue the current batch right away
            $sends->queue($send->id, 0, ['sentInBatch' => $batchMode ? $this->sentInBatch : 0]);
        }
    }

    /**
     * @inheritdoc
     */
    protected function defaultDescription(): ?string
    {
        $subject = (new Query())
            ->select(['subject'])
            ->from(Table::SENDS)
            ->where(['id' => $this->sendId])
            ->scalar();

        return Craft::t('mailer', 'Sending “{subject}”', ['subject' => $subject ?: '…']) . ' ' . self::descriptionMarker($this->sendId);
    }
}
