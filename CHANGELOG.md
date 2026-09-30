# Release Notes for Mailer

## 1.0.1 - Unreleased

- Updated Plugin Kit to 2.0.22, which fixes checkbox and lightswitch values not updating when toggled ([verbb/plugin-kit#1](https://github.com/verbb/plugin-kit/issues/1)) and linking to Craft elements from the message editor. Mailer’s workaround has been removed.

## 1.0.0 - 2026-09-27

- Initial release.
- Send emails from the control panel to custom addresses (To, CC and BCC), user groups, individual users, and users matching conditions. Each person gets one email, and suspended, pending and unsubscribed users are skipped.
- Rich text editor with images from your assets, linked or embedded in each email.
- Personalization with user variables and custom user fields, including inside links. Safe mode limits messages to the approved variables.
- Previews as a real recipient, and test sends.
- Emails are wrapped in the site’s HTML email template, with an automatic plain-text version.
- Attachments, uploaded or picked from assets.
- Scheduled sends, autosaved drafts and reusable templates.
- Batched sending through the queue. Sends pause after repeated failures and can be resumed, and failed recipients can be retried.
- Unsubscribe links, one-click unsubscribe headers and an unsubscribe list.
- Logs showing every recipient’s status and the mail server’s errors.
- Recent Emails dashboard widget, CSV export of selected users, and user permissions.
