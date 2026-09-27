/**
 * Captures Plugin Store screenshots from a local Craft site with Mailer installed.
 *
 *   npm i --no-save playwright-core
 *   MAILER_URL=https://mailer-sandbox.test MAILER_LOGIN="<impersonation URL>" MAILER_DRAFT=10 node .plugin-store/screenshots.mjs
 *
 * MAILER_LOGIN is a one-time login URL (`php craft users/impersonate <username>`). Uses the locally installed Chrome.
 */
import { chromium } from 'playwright-core';
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const base = process.env.MAILER_URL ?? 'https://mailer-sandbox.test';
const login = process.env.MAILER_LOGIN;
const draft = process.env.MAILER_DRAFT;
const out = join(dirname(fileURLToPath(import.meta.url)), 'screenshots');
mkdirSync(out, { recursive: true });

if (!login) {
    throw new Error('Set MAILER_LOGIN to a one-time login URL.');
}

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2, ignoreHTTPSErrors: true });
const settle = (ms = 800) => page.waitForTimeout(ms);
const shot = async (name) => {
    await page.evaluate(() => {
        document.activeElement?.blur();
        // Hide Craft’s trial/license notices, which aren’t part of Mailer
        document.querySelectorAll('#trial-info').forEach((el) => { el.style.display = 'none'; });
    });
    await settle(300);
    await page.screenshot({ path: join(out, `${name}.png`) });
    console.log(`Saved ${name}.png`);
};

await page.goto(login);
await page.goto(`${base}/admin/mailer${draft ? `?draft=${draft}` : ''}`);
await page.waitForFunction(() => document.querySelector('pk-tiptap-editor')?.editor);
await settle(1500);
await shot('1-compose');

await page.evaluate(() => { document.querySelector('pk-tabs[data-mailer-tabs]').value = 'recipients'; });
await settle(1500);
await page.evaluate(() => document.querySelector('[data-mailer-mode="groups"]')?.scrollIntoView({ block: 'start' }));
await page.evaluate(() => window.scrollBy(0, -90));
await settle(500);
await shot('2-recipients');

await page.evaluate(() => { document.querySelector('pk-tabs[data-mailer-tabs]').value = 'message'; window.scrollTo(0, 0); });
await page.click('[data-mailer-preview]');
await page.waitForFunction(() => document.querySelector('[data-mailer-preview-dialog]')?.open);
await settle(1500);
await shot('3-preview');

await page.goto(`${base}/admin/mailer/logs`);
await settle();
await shot('4-logs');

const firstLog = await page.getAttribute('.mailer-logs tbody tr:last-child a', 'href');
await page.goto(`${firstLog}?status=`);
await settle();
await shot('5-log');

await page.goto(`${base}/admin/mailer/unsubscribes`);
await settle();
await shot('6-unsubscribes');

await browser.close();
