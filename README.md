<p align="center"><img src="./src/icon.svg" width="100" height="100" alt="Mailer icon"></p>

<h1 align="center">Mailer for Craft CMS</h1>

Send emails to users, user groups and any email address, straight from the Craft control panel. Messages can be personalized for each recipient, are sent in the background in rate-limited batches, and every send is logged.

Mailer is a modern take on the classic [Craft Mailer](https://github.com/victor-sm/Craft-Mailer) plugin for Craft 2.

## Features

- **Three kinds of recipients**, which can be combined in one send:
  - **Custom recipients:** one email to any addresses, with To, CC and BCC.
  - **User groups:** one email to each user in the selected groups, plus an “Admins” group.
  - **Users:** one email to each selected user.

  Each person only gets one email, even if they’re selected more than once. Suspended, pending and inactive users are skipped, and the reason is logged.
- **Rich text editor** for the message, with headings, lists, links, and images from your assets placed anywhere in the body.
- **Personalization** with variables like `{{ user.firstName }}`, inserted from a menu.
- **Preview** as the first selected recipient (with a warning for any variables that would be empty), and **test sends** to yourself.
- **Your email template:** messages are wrapped in the site’s HTML email template (Settings → Email), with an automatic plain-text version.
- **Attachments**, uploaded or picked from your assets.
- **Batch sending** through Craft’s queue: send _N_ emails, wait _X_ seconds, repeat.
- **Logs** of every send, showing each recipient’s status and any errors. Any send can be reused as a template, and running sends can be cancelled.
- **CSV export** of the selected users.
- **User permissions** for sending, changing the sender, exporting and managing logs.

## Requirements

- Craft CMS 5.6 or later
- PHP 8.2 or later
- A working queue runner (see [Sending and the queue](#sending-and-the-queue))

## Installation

```bash
composer require rareform/craft-mailer
php craft plugin/install mailer
```

## Usage

1. Go to **Mailer** in the control panel.
2. Write a subject and message. Use the **Variables** menu to personalize them.
3. On the **Recipients** tab, choose custom recipients, user groups and/or users. The number of emails is shown as you go.
4. Optionally set a Reply-To address and add attachments in the sidebar.
5. Use **Preview** (rendered for the first selected recipient) or **Send test to me** (rendered for you) to check the message, then **Send…** and confirm.

You’ll be taken to the send’s log, where you can follow its progress.

### Variables

| Variable | Value |
|---|---|
| `{{ user.firstName }}` | First name |
| `{{ user.lastName }}` | Last name |
| `{{ user.fullName }}` | Full name |
| `{{ user.email }}` | Email address |
| `{{ user.username }}` | Username |

For custom recipients, Mailer looks up the first To address. If it belongs to a user, that user’s details are used. Otherwise only `user.email` has a value (and `user.fullName`, if you entered a name like `Jane Doe <jane@example.com>`).

> [!NOTE]
> Variables can’t be used inside link URLs.

### Images

Use the image button in the editor toolbar to place an image from your assets anywhere in the message. Drag the corners to resize it. Images are limited to 600px wide unless you resize them.

There are two ways images can be sent, chosen with **Embed images** in the sidebar:

- **Linked** (default): the email links to the image’s public URL, and email clients download it when the email is opened. Emails stay small, but the image must be in a volume with public URLs, and some clients hide images until the reader allows them.
- **Embedded:** the image is sent inside each email, so it shows without being downloaded, and it works for volumes without public URLs. Every email is larger, and embedded images count toward the attachment size limit.

Mailer won’t send a linked image that isn’t publicly accessible. Choose a public image or turn on embedding. Use the **Embed Images** setting to turn embedding on by default.

### Safe mode

Safe mode is on by default. In safe mode, messages can only use the variables listed above. Anything else that looks like Twig is rejected before sending.

With safe mode off, messages can use basic Twig in an isolated sandbox: the `if` and `set` tags, and common filters such as `default`, `upper`, `lower`, `capitalize`, `date` and `replace`. For example: `{{ user.firstName|default('friend') }}`. Craft’s globals, functions and templates are not available.

## Settings

Settings are under **Settings → Plugins → Mailer**. Each one can be overridden per environment in `config/mailer.php`:

```php
<?php

return [
    // The name shown in the control panel navigation
    'name' => 'Mailer',

    // Only allow the listed variables in messages
    'safeMode' => true,

    // Send in batches: `batchMails` emails, then wait `batchTime` seconds
    'batchMode' => true,
    'batchMails' => 300,
    'batchTime' => 60,

    // Wrap messages in the system HTML email template
    'useEmailTemplate' => true,

    // Turn on “Embed images” by default when composing
    'embedImages' => false,

    // Maximum combined size of attachments and embedded images, in bytes (0 = no limit)
    'maxAttachmentSize' => 10485760,

    // Where attachments are stored while a send is in progress.
    // Must be reachable by the server that runs the queue.
    'attachmentsPath' => '@storage/mailer/attachments',

    // Time-to-reserve for each queue job, in seconds
    'jobTtr' => 600,
];
```

## Permissions

People need the **Access Mailer** permission (under General), plus:

| Permission | Allows |
|---|---|
| Send emails | Compose, preview, test and send emails |
| ↳ Change the sender name and email | Send from any address. Without this, the system sender is always used. |
| ↳ Export selected users as CSV | Download the selected users as a CSV file |
| View logs | See sends and their recipients |
| ↳ Cancel, resume and delete sends | Manage sends and clear logs |

People who pick individual users will also want the core **View users** permission.

## Sending and the queue

Emails are sent by Craft’s queue. Each job sends one batch, then queues the next one with a delay of `batchTime` seconds.

If the queue only runs when the control panel is open (`runQueueAutomatically`), delayed batches won’t go out until someone loads a control panel page. For reliable sending, run the queue with a daemon or cron job. See [Queue runners](https://craftcms.com/docs/5.x/system/queue.html).

A send whose job fails is marked as stalled in its log, and can be resumed from there. Emails are never sent twice: an email that was interrupted mid-send is marked as failed rather than retried.

## Good to know

- **Test mode:** if Craft’s [`testToEmailAddress`](https://craftcms.com/docs/5.x/reference/config/general.html#testtoemailaddress) setting is set, every email goes to that address instead, without CC or BCC. Mailer shows a warning when this is on.
- **Transports:** Mailer uses Craft’s configured mailer. Some transports don’t support CC or BCC. If yours doesn’t, custom emails with CC/BCC will fail.
- **Transport errors:** when a transport rejects an email, Craft logs the details, so the Mailer log shows a generic error. Check `storage/logs` for the specifics.
- **Unsubscribes:** Mailer doesn’t manage unsubscribes or mailing lists. It’s intended for member and operational emails, not marketing newsletters.

## Events

```php
use rareform\mailer\events\RegisterVariablesEvent;
use rareform\mailer\events\DefineVariablesEvent;
use rareform\mailer\services\Renderer;
use yii\base\Event;

// Add a variable to the Variables menu (and allow it in safe mode)…
Event::on(Renderer::class, Renderer::EVENT_REGISTER_VARIABLES, function(RegisterVariablesEvent $event) {
    $event->variables[] = ['token' => 'user.memberNumber', 'label' => 'Member number'];
});

// …and give it a value for each recipient. Only scalars and arrays are allowed.
Event::on(Renderer::class, Renderer::EVENT_DEFINE_VARIABLES, function(DefineVariablesEvent $event) {
    $event->variables['user']['memberNumber'] = (string)($event->user?->getFieldValue('memberNumber') ?? '');
});
```

Other events:

| Event | When | Can cancel |
|---|---|---|
| `Recipients::EVENT_DEFINE_RECIPIENTS` | After recipients are resolved. Set a recipient’s `status` to `skipped` (with an `error` reason) to exclude it. | – |
| `Sends::EVENT_BEFORE_QUEUE` | Before a send is queued | Yes |
| `Sends::EVENT_AFTER_COMPLETE` | After a send finishes, fails or is cancelled | – |
| `Delivery::EVENT_BEFORE_SEND_EMAIL` | Before each email is sent. The `message` can be modified. | Yes (the recipient is skipped) |
| `Delivery::EVENT_AFTER_SEND_EMAIL` | After each email is sent or fails | – |

## Development

The control panel UI is built with [Plugin Kit](https://github.com/verbb/plugin-kit) web components.

```bash
npm install
npm run build   # or `npm run dev` to rebuild on changes
composer install
composer check-cs && composer phpstan && composer test
```

The built assets in `src/web/assets/cp/dist` are committed.
