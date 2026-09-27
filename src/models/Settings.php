<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\models;

use Craft;
use craft\base\Model;

/**
 * Mailer plugin settings.
 *
 * Every setting can be overridden per environment from `config/mailer.php`.
 */
class Settings extends Model
{
    /**
     * @var string The plugin name shown in the control panel navigation.
     */
    public string $name = 'Mailer';

    /**
     * @var bool Whether message templates may only use the registered variables
     * (e.g. `{{ user.firstName }}`) instead of (sandboxed) Twig.
     */
    public bool $safeMode = true;

    /**
     * @var bool Whether emails are sent in rate-limited batches.
     */
    public bool $batchMode = true;

    /**
     * @var int The number of emails sent per batch.
     */
    public int $batchMails = 300;

    /**
     * @var int The number of seconds to wait between batches.
     */
    public int $batchTime = 60;

    /**
     * @var int Pause a send after this many emails fail in a row (e.g. when the mail server is down). `0` disables pausing.
     */
    public int $maxConsecutiveFailures = 10;

    /**
     * @var bool Whether emails to users include an unsubscribe link and one-click unsubscribe headers.
     */
    public bool $unsubscribeLinks = true;

    /**
     * @var bool Whether messages are wrapped in the system HTML email template.
     */
    public bool $useEmailTemplate = true;

    /**
     * @var bool Whether “Embed images” is turned on by default when composing. Embedded images are sent inside
     * each email rather than linked to their public URL.
     */
    public bool $embedImages = false;

    /**
     * @var int The maximum combined size of all attachments, in bytes. `0` disables the limit.
     */
    public int $maxAttachmentSize = 10485760;

    /**
     * @var string Where attachments are stored while a send is in progress.
     * Must be reachable by whichever server runs the queue.
     */
    public string $attachmentsPath = '@storage/mailer/attachments';

    /**
     * @var int The time-to-reserve for each send job, in seconds.
     */
    public int $jobTtr = 600;

    /**
     * @inheritdoc
     */
    public function attributeLabels(): array
    {
        return [
            'name' => Craft::t('mailer', 'Plugin Name'),
            'safeMode' => Craft::t('mailer', 'Safe Mode'),
            'batchMode' => Craft::t('mailer', 'Batch Mode'),
            'batchMails' => Craft::t('mailer', 'Emails per Batch'),
            'batchTime' => Craft::t('mailer', 'Wait Between Batches'),
            'maxConsecutiveFailures' => Craft::t('mailer', 'Pause After Failures'),
            'useEmailTemplate' => Craft::t('mailer', 'Use Email Template'),
            'embedImages' => Craft::t('mailer', 'Embed Images'),
            'unsubscribeLinks' => Craft::t('mailer', 'Unsubscribe Links'),
            'maxAttachmentSize' => Craft::t('mailer', 'Max Attachment Size'),
        ];
    }

    /**
     * @inheritdoc
     */
    protected function defineRules(): array
    {
        return [
            [['name'], 'trim'],
            [['name'], 'required'],
            [['name'], 'string', 'max' => 50],
            [['safeMode', 'batchMode', 'useEmailTemplate', 'embedImages', 'unsubscribeLinks'], 'boolean'],
            [['batchMails'], 'integer', 'min' => 1, 'max' => 10000],
            [['batchTime'], 'integer', 'min' => 1, 'max' => 86400],
            [['maxConsecutiveFailures'], 'integer', 'min' => 0, 'max' => 10000],
            [['maxAttachmentSize'], 'integer', 'min' => 0],
            [['jobTtr'], 'integer', 'min' => 60],
            [['attachmentsPath'], 'required'],
        ];
    }
}
