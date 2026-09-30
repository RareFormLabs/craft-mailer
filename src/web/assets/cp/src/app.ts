/**
 * Mailer’s control panel behaviors. Loaded by mailer.ts.
 */
import { components } from './components';
import { initConfirmForms, initDialogCloseButtons } from './dialogs';

// Referenced so bundlers keep every component definition.
void components;

export function init(): void {
    initDialogCloseButtons();
    initConfirmForms();

    const refresh = document.querySelector<HTMLElement>('[data-mailer-autorefresh]');

    if (refresh) {
        const seconds = Math.max(5, Number(refresh.dataset.mailerAutorefresh) || 10);

        window.setTimeout(function reload() {
            // Don’t reload while a dialog is open
            if (document.querySelector('pk-dialog[open]')) {
                window.setTimeout(reload, seconds * 1000);
                return;
            }

            window.location.reload();
        }, seconds * 1000);
    }
}
