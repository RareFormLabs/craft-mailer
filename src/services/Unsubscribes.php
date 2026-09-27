<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\services;

use Craft;
use craft\db\Query;
use craft\helpers\Db;
use craft\helpers\Json;
use craft\helpers\StringHelper;
use craft\helpers\UrlHelper;
use rareform\mailer\db\Table;
use yii\base\Component;

/**
 * Keeps track of people who have unsubscribed, and builds their unsubscribe links.
 *
 * Unsubscribes are stored by email address, so they apply whether or not the person has a user account.
 */
class Unsubscribes extends Component
{
    /**
     * Returns which of the given email addresses have unsubscribed.
     *
     * @param string[] $emails
     * @return array<string, true> Lowercase email addresses
     */
    public function getUnsubscribed(array $emails): array
    {
        $emails = array_values(array_unique(array_filter(array_map(fn($email) => strtolower(trim((string)$email)), $emails))));
        $found = [];

        foreach (array_chunk($emails, 1000) as $chunk) {
            foreach ((new Query())->select(['email'])->from(Table::UNSUBSCRIBES)->where(['email' => $chunk])->column() as $email) {
                $found[strtolower($email)] = true;
            }
        }

        return $found;
    }

    /**
     * Returns whether an email address has unsubscribed.
     */
    public function isUnsubscribed(string $email): bool
    {
        return isset($this->getUnsubscribed([$email])[strtolower(trim($email))]);
    }

    /**
     * Unsubscribes an email address.
     */
    public function unsubscribe(string $email, ?int $userId = null, ?int $sendId = null): void
    {
        $email = strtolower(trim($email));

        if ($email === '' || $this->isUnsubscribed($email)) {
            return;
        }

        $userId ??= (new Query())->select(['id'])->from(\craft\db\Table::USERS)->where(['email' => $email])->scalar() ?: null;

        // The send may have been deleted since the email went out
        if ($sendId && !(new Query())->from(Table::SENDS)->where(['id' => $sendId])->exists()) {
            $sendId = null;
        }

        Db::insert(Table::UNSUBSCRIBES, [
            'email' => mb_substr($email, 0, 255),
            'userId' => $userId ? (int)$userId : null,
            'sendId' => $sendId,
        ]);
    }

    /**
     * Removes an unsubscribe (resubscribes the address).
     */
    public function remove(int $id): bool
    {
        return (bool)Db::delete(Table::UNSUBSCRIBES, ['id' => $id]);
    }

    /**
     * Returns a query for unsubscribes, newest first.
     */
    public function createQuery(?string $search = null): Query
    {
        $query = (new Query())
            ->select(['u.id', 'u.email', 'u.userId', 'u.sendId', 'u.dateCreated', 's.subject'])
            ->from(['u' => Table::UNSUBSCRIBES])
            ->leftJoin(['s' => Table::SENDS], '[[s.id]] = [[u.sendId]]')
            ->orderBy(['u.dateCreated' => SORT_DESC, 'u.id' => SORT_DESC]);

        if ($search !== null && trim($search) !== '') {
            $query->andWhere(['like', 'u.email', trim($search)]);
        }

        return $query;
    }

    /**
     * Returns the unsubscribe URL for an email address.
     */
    public function getUrl(string $email, ?int $sendId = null): string
    {
        $actionTrigger = Craft::$app->getConfig()->getGeneral()->actionTrigger;

        return UrlHelper::siteUrl("$actionTrigger/mailer/unsubscribe", ['code' => $this->createToken($email, $sendId)]);
    }

    /**
     * Creates a signed token identifying an email address.
     */
    public function createToken(string $email, ?int $sendId = null): string
    {
        $payload = Json::encode(['e' => strtolower(trim($email)), 's' => $sendId]);

        return StringHelper::base64UrlEncode(Craft::$app->getSecurity()->hashData($payload));
    }

    /**
     * Reads a token created by [[createToken()]].
     *
     * @return array{email: string, sendId: int|null}|null `null` if the token is invalid.
     */
    public function parseToken(string $token): ?array
    {
        $decoded = StringHelper::base64UrlDecode($token);
        $payload = $decoded !== '' ? Craft::$app->getSecurity()->validateData($decoded) : false;

        if ($payload === false) {
            return null;
        }

        $data = Json::decodeIfJson($payload);

        if (!is_array($data) || empty($data['e']) || !is_string($data['e'])) {
            return null;
        }

        return ['email' => $data['e'], 'sendId' => isset($data['s']) ? (int)$data['s'] : null];
    }
}
