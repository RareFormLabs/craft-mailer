import { components } from './components';
import { initCompose } from './compose';
import { initConfirmForms, initDialogCloseButtons } from './dialogs';
import { initCheckedFormValueFix } from './form-fixes';
import './mailer.css';

// Referenced so bundlers keep every component definition.
void components;

function init(): void {
    initCheckedFormValueFix();
    initDialogCloseButtons();
    initConfirmForms();

    const compose = document.querySelector<HTMLFormElement>('form[data-mailer-compose]');

    if (compose) {
        initCompose(compose);
    }

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

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
