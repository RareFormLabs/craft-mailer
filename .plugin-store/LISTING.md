# Plugin Store listing: Mailer

Paste these into the plugin’s settings in [Craft Console](https://console.craftcms.com) (Organization → Plugins → Mailer).

## Name
Mailer

## Short description (shown in search results)
Send personalized emails to users, user groups and any address, right from the control panel.

## Categories
- Email
- Utilities

## Keywords
email, mailer, bulk email, newsletter, members, notifications, unsubscribe, schedule

## Long description (Markdown)

Mailer lets your team write and send emails from the Craft control panel: announcements to members, notices to a user group, or a one-off message to a few addresses. There’s no third-party newsletter service to set up. It uses the email settings you already have.

### Send to exactly the right people
- **User groups:** everyone in one or more groups.
- **Individual users:** pick them from a list.
- **Users matching conditions:** Craft’s condition builder, e.g. “Paid is on” or “last logged in over a year ago”.
- **Any address:** with To, CC and BCC.

Combine them freely. Each person gets one email, even if they’re selected twice. Suspended, pending and unsubscribed users are skipped automatically, and the reason is logged.

### Personal, not generic
- Personalize subjects, messages and links with `{{ user.firstName }}`, your custom user fields, and more.
- Write in a clean editor with headings, lists, links and images from your assets.
- Preview as a real recipient before you send, with a warning when a variable would be empty. Or send a test to yourself.

### Built for real sends
- Schedule for later, or send now.
- Send in batches at your mail provider’s pace, in the background.
- If your mail server has a problem, the send pauses instead of failing everyone, and can be resumed.
- Retry just the recipients that failed.
- Detailed logs show every recipient’s status and the mail server’s actual error.

### Unsubscribes handled
Emails to users include an unsubscribe link and the one-click unsubscribe headers Gmail and Yahoo expect for bulk email. The unsubscribe list is managed in the control panel.

### Also included
- Autosaved drafts and reusable templates
- Attachments, uploaded or from your assets
- Your site’s HTML email template, plus an automatic plain-text version
- Safe mode, so editors can only use approved variables
- User permissions for sending, changing the sender, templates and logs
- A dashboard widget for recent sends
- CSV export of selected users

Requires Craft CMS 5.6+ and a queue runner.

## Screenshots (in order)
1. `screenshots/1-compose.png`: Write and personalize your message
2. `screenshots/2-recipients.png`: Combine groups, users, conditions and addresses
3. `screenshots/3-preview.png`: Preview as a real recipient
4. `screenshots/4-logs.png`: Every send is logged
5. `screenshots/5-log.png`: See what happened to each recipient
6. `screenshots/6-unsubscribes.png`: Unsubscribes, managed

Regenerate them with `.plugin-store/screenshots.mjs` (instructions at the top of the file).

## Links
- Documentation: https://github.com/RareFormLabs/craft-mailer/blob/main/README.md
- Changelog: https://raw.githubusercontent.com/RareFormLabs/craft-mailer/main/CHANGELOG.md
- Issues: https://github.com/RareFormLabs/craft-mailer/issues

## Pricing
- **Price:** $39
- **Renewal:** $19/year (updates after the first year)

Set in Craft Console. Pixel & Tonic takes 20% of each sale.

## Support
- **Support email:** me@chasegiunta.com
