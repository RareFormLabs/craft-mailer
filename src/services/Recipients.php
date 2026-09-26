<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\services;

use Craft;
use craft\elements\User;
use rareform\mailer\events\DefineRecipientsEvent;
use rareform\mailer\models\ComposeForm;
use rareform\mailer\models\RecipientData;
use yii\base\Component;

/**
 * Resolves the recipients of a compose form.
 */
class Recipients extends Component
{
    /**
     * @event DefineRecipientsEvent The event triggered after the recipients of a send are resolved.
     */
    public const EVENT_DEFINE_RECIPIENTS = 'defineRecipients';

    /**
     * Resolves the recipients of a compose form.
     *
     * Returns one recipient for the custom email (if enabled) plus one per user. Users who can’t be emailed —
     * no email address, not active, a duplicate address, or already addressed in the custom email — are
     * included with the `skipped` status and a reason, so they show up in the log.
     *
     * @return RecipientData[]
     */
    public function resolve(ComposeForm $form): array
    {
        $recipients = [];
        $taken = [];

        if ($form->sendToCustom) {
            $custom = $form->getCustomAddresses();

            if (!empty($custom['to'])) {
                $first = $custom['to'][0];
                $recipients[] = new RecipientData([
                    'type' => RecipientData::TYPE_CUSTOM,
                    'email' => $first['email'],
                    'name' => $first['name'],
                    'addresses' => [
                        'to' => $custom['to'],
                        'cc' => $custom['cc'],
                        'bcc' => $custom['bcc'],
                    ],
                    'source' => RecipientData::SOURCE_CUSTOM,
                ]);

                foreach (['to', 'cc', 'bcc'] as $field) {
                    foreach ($custom[$field] as $address) {
                        $taken[strtolower($address['email'])] = Craft::t('mailer', 'Already included in the custom email');
                    }
                }
            }
        }

        foreach ($this->resolveUsers($form) as [$user, $source]) {
            /** @var User $user */
            $recipient = new RecipientData([
                'type' => RecipientData::TYPE_USER,
                'userId' => $user->id,
                'email' => (string)$user->email,
                'name' => $user->getFullName() ?: null,
                'source' => $source,
            ]);

            $key = strtolower((string)$user->email);

            if ($key === '') {
                $recipient->status = RecipientData::STATUS_SKIPPED;
                $recipient->error = Craft::t('mailer', 'No email address');
            } elseif (($reason = $this->inactiveReason($user)) !== null) {
                $recipient->status = RecipientData::STATUS_SKIPPED;
                $recipient->error = $reason;
            } elseif (isset($taken[$key])) {
                $recipient->status = RecipientData::STATUS_SKIPPED;
                $recipient->error = $taken[$key];
            } else {
                $taken[$key] = Craft::t('mailer', 'Duplicate email address');
            }

            $recipients[] = $recipient;
        }

        $event = new DefineRecipientsEvent([
            'form' => $form,
            'recipients' => $recipients,
        ]);
        $this->trigger(self::EVENT_DEFINE_RECIPIENTS, $event);

        return array_values(array_filter($event->recipients, fn($recipient) => $recipient instanceof RecipientData));
    }

    /**
     * Summarizes resolved recipients.
     *
     * @param RecipientData[] $recipients
     * @return array{total: int, sendable: int, emails: int, custom: int, users: int, skipped: int, reasons: array<string, int>}
     */
    public function summarize(array $recipients): array
    {
        $summary = ['total' => count($recipients), 'sendable' => 0, 'emails' => 0, 'custom' => 0, 'users' => 0, 'skipped' => 0, 'reasons' => []];

        foreach ($recipients as $recipient) {
            if ($recipient->status === RecipientData::STATUS_SKIPPED) {
                $summary['skipped']++;
                $reason = $recipient->error ?? Craft::t('mailer', 'Skipped');
                $summary['reasons'][$reason] = ($summary['reasons'][$reason] ?? 0) + 1;
                continue;
            }

            $summary['sendable']++;

            if ($recipient->getIsCustom()) {
                $summary['custom']++;
                $summary['emails'] += count($recipient->addresses['to'] ?? []) + count($recipient->addresses['cc'] ?? []) + count($recipient->addresses['bcc'] ?? []);
            } else {
                $summary['users']++;
                $summary['emails']++;
            }
        }

        return $summary;
    }

    /**
     * Returns the users selected in a compose form (user groups and individual users), for CSV export.
     *
     * @return User[]
     */
    public function getSelectedUsers(ComposeForm $form): array
    {
        return array_map(fn(array $pair) => $pair[0], iterator_to_array($this->resolveUsers($form), false));
    }

    /**
     * Returns the selected users along with how they were selected.
     *
     * Individually selected users take precedence over user groups, which take precedence over the admins group.
     *
     * @return \Generator<array{0: User, 1: string}>
     */
    private function resolveUsers(ComposeForm $form): \Generator
    {
        $sources = [];

        if ($form->sendToUsers && $form->userIds) {
            foreach ($this->userQuery()->id($form->userIds)->ids() as $id) {
                $sources[(int)$id] = RecipientData::SOURCE_USER;
            }
        }

        if ($form->sendToGroups) {
            $groupIds = array_filter($form->normalizedGroupIds(), 'is_int');

            if ($groupIds) {
                foreach ($this->userQuery()->groupId($groupIds)->ids() as $id) {
                    $sources[(int)$id] ??= RecipientData::SOURCE_GROUP;
                }
            }

            if (in_array(ComposeForm::ADMINS, $form->normalizedGroupIds(), true)) {
                foreach ($this->userQuery()->admin(true)->ids() as $id) {
                    $sources[(int)$id] ??= RecipientData::SOURCE_ADMINS;
                }
            }
        }

        if (!$sources) {
            return;
        }

        ksort($sources);

        foreach (array_chunk(array_keys($sources), 500) as $chunk) {
            foreach ($this->userQuery()->id($chunk)->orderBy(['elements.id' => SORT_ASC])->all() as $user) {
                /** @var User $user */
                yield [$user, $sources[$user->id]];
            }
        }
    }

    private function userQuery(): \craft\elements\db\UserQuery
    {
        return User::find()->status(null)->limit(null);
    }

    private function inactiveReason(User $user): ?string
    {
        return match ($user->getStatus()) {
            User::STATUS_ACTIVE => null,
            User::STATUS_SUSPENDED => Craft::t('mailer', 'User is suspended'),
            User::STATUS_PENDING => Craft::t('mailer', 'User is pending activation'),
            User::STATUS_LOCKED => null,
            default => Craft::t('mailer', 'User is inactive'),
        };
    }
}
