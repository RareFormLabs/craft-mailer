<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\events;

use craft\elements\User;
use rareform\mailer\models\RecipientData;
use yii\base\Event;

/**
 * Defines the variables a message is rendered with for a single recipient.
 */
class DefineVariablesEvent extends Event
{
    /**
     * @var User|null The recipient’s user account, if any.
     */
    public ?User $user = null;

    /**
     * @var RecipientData The recipient.
     */
    public RecipientData $recipient;

    /**
     * @var array The variables, e.g. `['user' => ['firstName' => 'Jane']]`. Only scalars and arrays are allowed.
     */
    public array $variables = [];
}
