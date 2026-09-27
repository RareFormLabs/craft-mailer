<p align="center"><img src="./src/icon.svg" width="100" height="100" alt="Mailer icon"></p>

<h1 align="center">Mailer for Craft CMS</h1>

Send emails to users, user groups and any email address, straight from the Craft control panel. Messages can be personalized for each recipient, are sent in the background in rate-limited batches, and every send is logged.

Mailer is a modern take on the classic [Craft Mailer](https://github.com/victor-sm/Craft-Mailer) plugin for Craft 2.

## Features

- **Four kinds of recipients**, which can be combined in one send:
  - **Custom recipients:** one email to any addresses, with To, CC and BCC.
  - **User groups:** one email to each user in the selected groups, plus an “Admins” group.
  - **Users:** one email to each selected user.
  - **Users matching conditions:** Craft’s condition builder, e.g. “Paid is on” or “last logged in over a year ago”.

  Each person only gets one email, even if they’re selected more than once. Suspended, pending, inactive and unsubscribed users are skipped, and the reason is logged.
- **Rich text editor** for the message, with headings, lists, links, and images from your assets placed anywhere in the body.
- **Personalization** with variables like `{{ user.firstName }}` and your custom user fields, inserted from a menu. Variables work inside links too.
- **Scheduled sends**, plus **drafts** that save automatically and reusable **templates**.
- **Unsubscribe links** and one-click unsubscribe headers, with a list of people who have unsubscribed.
- **Preview** as the first selected recipient (with a warning for any variables that would be empty), and **test sends** to yourself.
- **Your email template:** messages are wrapped in the site’s HTML email template (Settings → Email), with an automatic plain-text version.
- **Attachments**, uploaded or picked from your assets.
- **Batch sending** through Craft’s queue: send _N_ emails, wait _X_ seconds, repeat. Sends pause automatically if the mail server keeps failing.
- **Logs** of every send, showing each recipient’s status and the mail server’s actual error. Sends can be cancelled, resumed, reused as a template, or retried for just the failed recipients.
- **Dashboard widget** showing recent and in-progress sends.
- **CSV export** of the selected users.
- **User permissions** for sending, changing the sender, exporting, templates and managing logs.

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
3. On the **Recipients** tab, choose custom recipients, user groups, users and/or users matching conditions. The number of emails is shown as you go.
4. Optionally set a Reply-To address, a time to send later, and attachments in the sidebar.
5. Use **Preview** (rendered for the first selected recipient) or **Send test to me** (rendered for you) to check the message, then **Send…** and confirm.

You’ll be taken to the send’s log, where you can follow its progress.

Your message is saved as a draft while you work (see **Mailer → Drafts**), and deleted once it’s sent. Use **Save as template** to keep a message for reuse, and **Load template** to start from one.

### Variables

| Variable | Value |
|---|---|
| `{{ user.firstName }}` | First name |
| `{{ user.lastName }}` | Last name |
| `{{ user.fullName }}` | Full name |
| `{{ user.email }}` | Email address |
| `{{ user.username }}` | Username |
| `{{ user.yourFieldHandle }}` | Any plain text, number, email, URL, date, dropdown, radio, checkbox, multi-select or lightswitch field in the user field layout |
| `{{ unsubscribeUrl }}` | The recipient’s unsubscribe link (see [Unsubscribes](#unsubscribes)) |

Dates are formatted like “January 15, 2020”, lightswitches as “Yes”/“No”, and multiple options are joined with commas.

For custom recipients, Mailer looks up the first To address. If it belongs to a user, that user’s details are used. Otherwise only `user.email` has a value (and `user.fullName`, if you entered a name like `Jane Doe <jane@example.com>`).

Variables can be used in links, e.g. `https://example.com/renew?email={{ user.email }}`. Values are URL-encoded automatically. A variable at the start of a link, like `{{ user.website }}`, is only used if it results in an `http(s)`, `mailto` or `tel` link.

### Scheduling

Set **Send later** in the sidebar to schedule a send. Scheduled sends appear in the logs and can be cancelled until they start.

The recipients are worked out again when a scheduled send starts, so someone who joins a user group (or starts matching the conditions) in the meantime is included.

### Images

Use the image button in the editor toolbar to place an image from your assets anywhere in the message. Drag the corners to resize it. Images are limited to 600px wide unless you resize them.

There are two ways images can be sent, chosen with **Embed images** in the sidebar:

- **Linked** (default): the email links to the image’s public URL, and email clients download it when the email is opened. Emails stay small, but the image must be in a volume with public URLs, and some clients hide images until the reader allows them.
- **Embedded:** the image is sent inside each email, so it shows without being downloaded, and it works for volumes without public URLs. Every email is larger, and embedded images count toward the attachment size limit.

Mailer won’t send a linked image that isn’t publicly accessible. Choose a public image or turn on embedding. Use the **Embed Images** setting to turn embedding on by default.

### Safe mode

Safe mode is on by default. In safe mode, messages can only use the variables listed above. Anything else that looks like Twig is rejected before sending.

With safe mode off, messages can use basic Twig in an isolated sandbox: the `if` and `set` tags, and common filters such as `default`, `upper`, `lower`, `capitalize`, `date` and `replace`. For example: `{{ user.firstName|default('friend') }}`. Craft’s globals, functions and templates are not available.

### Unsubscribes

Emails to users include an unsubscribe link at the end, and the `List-Unsubscribe` headers that let Gmail, Yahoo and others show their own unsubscribe button. To place the link yourself, use `{{ unsubscribeUrl }}` in the message, and the automatic footer is left off.

People who unsubscribe are listed under **Mailer → Unsubscribes**, where you can also add or remove addresses. They’re skipped when sending to users. For important notices everyone must receive, turn off **Skip people who have unsubscribed** on the Recipients tab. Those emails don’t include an unsubscribe link.

Custom (To/CC/BCC) emails are never checked against the list and don’t get an unsubscribe link, since you’re addressing them directly. Turn the whole feature off with the **Unsubscribe Links** setting.

### When emails fail

- **Pausing:** if the mail server rejects several emails in a row (10 by default, the `maxConsecutiveFailures` setting), the send pauses instead of failing every remaining recipient. Its log shows the error. Fix the problem, then click **Resume**.
- **Retrying:** once a send has finished, **Retry failed** sends the message again to just the recipients that failed, as a new send. This isn’t available for sends with uploaded attachments, since those aren’t kept.

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

    // Pause a send after this many emails fail in a row (0 = never pause)
    'maxConsecutiveFailures' => 10,

    // Add unsubscribe links and headers to emails sent to users
    'unsubscribeLinks' => true,

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
| ↳ Save and delete templates | Manage templates. Anyone who can send can load them. |
| View logs | See sends, their recipients, and the unsubscribe list |
| ↳ Cancel, resume, retry and delete sends, and manage unsubscribes | Manage sends, clear logs, and add or remove unsubscribed addresses |

People who pick individual users will also want the core **View users** permission.

## Sending and the queue

Emails are sent by Craft’s queue. Each job sends one batch, then queues the next one with a delay of `batchTime` seconds.

If the queue only runs when the control panel is open (`runQueueAutomatically`), delayed batches won’t go out until someone loads a control panel page. For reliable sending, run the queue with a daemon or cron job. See [Queue runners](https://craftcms.com/docs/5.x/system/queue.html).

A send whose job fails is marked as stalled in its log, and can be resumed from there. Emails are never sent twice: an email that was interrupted mid-send is marked as failed rather than retried.

## Good to know

- **Test mode:** if Craft’s [`testToEmailAddress`](https://craftcms.com/docs/5.x/reference/config/general.html#testtoemailaddress) setting is set, every email goes to that address instead, without CC or BCC. Mailer shows a warning when this is on.
- **Transports:** Mailer uses Craft’s configured mailer. Some transports don’t support CC or BCC. If yours doesn’t, custom emails with CC/BCC will fail.
- **Transport errors:** the mail server’s error is recorded for each failed recipient. For transports Mailer can’t inspect, you’ll see a generic error, with the details in `storage/logs`.
- **Newsletters:** Mailer handles unsubscribes, but it isn’t a full newsletter tool. There are no open or click statistics, and no public sign-up forms.

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
