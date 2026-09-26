<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\events;

use yii\base\Event;

/**
 * Registers the variables available in messages (and allowed in safe mode).
 */
class RegisterVariablesEvent extends Event
{
    /**
     * @var array<int, array{token: string, label: string}> e.g. `['token' => 'user.firstName', 'label' => 'First name']`
     */
    public array $variables = [];
}
