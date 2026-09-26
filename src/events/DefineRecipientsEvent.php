<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\events;

use rareform\mailer\models\ComposeForm;
use rareform\mailer\models\RecipientData;
use yii\base\Event;

/**
 * Lets plugins filter or modify the resolved recipients before a send is queued.
 *
 * To exclude a recipient without removing it from the log, set its `status` to `skipped` and give it a `reason`.
 */
class DefineRecipientsEvent extends Event
{
    public ComposeForm $form;

    /**
     * @var RecipientData[]
     */
    public array $recipients = [];
}
