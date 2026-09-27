<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\web\assets\cp;

use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;
use craft\web\View;

/**
 * Control panel assets: Plugin Kit web components and the Mailer behaviors.
 */
class MailerCpAsset extends AssetBundle
{
    /**
     * @inheritdoc
     */
    public function init(): void
    {
        $this->sourcePath = __DIR__ . '/dist';
        $this->depends = [CpAsset::class];
        $this->css = ['mailer.css'];
        $this->js = ['mailer.js'];
        $this->jsOptions = ['type' => 'module'];

        parent::init();
    }

    /**
     * @inheritdoc
     */
    public function registerAssetFiles($view): void
    {
        parent::registerAssetFiles($view);

        if ($view instanceof View) {
            $view->registerTranslations('mailer', [
                'Are you sure?',
                'Are you sure you want to cancel this send?',
                'Couldn’t save the draft.',
                'Couldn’t save the template.',
                'Delete',
                'Draft saved at {time}',
                'Give the template a name.',
                'It will be sent on {date} at {time}.',
                'Load',
                'Replace the current subject and message with this template?',
                'Schedule',
                'Schedule “{subject}”?',
                'That template no longer exists.',
                'Test email sent.',
                'The message can’t be previewed.',
                'The test email couldn’t be sent.',
                'Are you sure you want to delete all completed logs?',
                'Are you sure you want to delete this log?',
                'Cancel',
                'Couldn’t count recipients.',
                'Couldn’t insert the image.',
                'Insert image',
                'Counting…',
                'Export failed.',
                'Nothing to export.',
                'No recipients selected',
                'Send',
                'Send “{subject}”?',
                'Send the message to {num} {num, plural, =1{email address} other{email addresses}}?',
                'Sending test…',
                'Test mode is on: every email will go to {address} instead, without CC or BCC.',
                'These variables are empty for this person: {variables}',
                '{num} {num, plural, =1{email} other{emails}}',
                '{num} skipped',
                '{num} custom email with {addresses} {addresses, plural, =1{address} other{addresses}}',
                '{num} {num, plural, =1{user} other{users}}',
            ]);
        }
    }
}
