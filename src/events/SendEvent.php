<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\events;

use craft\events\CancelableEvent;
use rareform\mailer\models\Send;

/**
 * Triggered before a send is queued (cancelable) and after it completes.
 */
class SendEvent extends CancelableEvent
{
    public Send $send;
}
