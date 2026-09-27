/**
 * Entry point.
 *
 * Craft loads this file with a cache-busting query string (`mailer.js?v=…`). All other code lives in chunks, which
 * are only ever loaded from here: if a chunk imported `mailer.js` (e.g. for Vite’s preload helper), the browser
 * would load it a second time under a different URL and run everything twice.
 */
import './mailer.css';

async function boot(): Promise<void> {
    const { init } = await import('./app');
    init();

    // The rich text editor is most of Mailer’s JavaScript, so it’s only loaded on the compose screen
    const compose = document.querySelector<HTMLFormElement>('form[data-mailer-compose]');

    if (compose) {
        const { initCompose } = await import('./compose-entry');
        initCompose(compose);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
} else {
    boot();
}
