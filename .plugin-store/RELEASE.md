# Releasing Mailer

## Before the first release
- [ ] Final icon: `src/icon.svg` (square, full color) and `src/icon-mask.svg` (single color, no strokes).
- [ ] Decide the price and renewal price (see LISTING.md).
- [ ] In [Craft Console](https://console.craftcms.com): create or choose the RareForm organization, connect GitHub, and add payout details (needed for a commercial plugin).
- [ ] Submit the plugin as **commercial** from the start. Craft doesn’t allow a free plugin to become commercial later.

## Each release
1. Update `CHANGELOG.md`: change `## X.Y.Z - Unreleased` to today’s date (`## 1.0.0 - 2026-10-01`).
2. Make sure CI is green on `main`, and the committed build is current (`npm run build`).
3. Tag and push:
   ```bash
   git tag 1.0.0 && git push origin 1.0.0
   ```
4. Craft Console detects the tag and publishes the version to the Plugin Store (this can take a few minutes). The `create-release` workflow then creates the matching GitHub release.

## Optional
- Register `rareform/craft-mailer` on [Packagist](https://packagist.org/packages/submit) so it can be installed with Composer outside the Plugin Store. It isn’t required for the Plugin Store.
