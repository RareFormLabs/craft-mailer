import type { PkDialog } from './components';
import { t } from './craft';

/**
 * Wires up `[data-mailer-dialog-close]` buttons inside dialogs.
 */
export function initDialogCloseButtons(root: ParentNode = document): void {
    root.addEventListener('click', (event) => {
        const button = (event.target as Element).closest('[data-mailer-dialog-close]');

        if (button) {
            (button.closest('pk-dialog') as PkDialog | null)?.hide();
        }
    });
}

/**
 * Shows a confirmation dialog.
 */
export function confirmDialog(message: string, confirmLabel = t('Delete')): Promise<boolean> {
    return new Promise((resolve) => {
        const dialog = document.createElement('pk-dialog') as PkDialog;
        dialog.label = t('Are you sure?');
        dialog.setAttribute('disable-pointer-dismissal', '');

        const body = document.createElement('p');
        body.textContent = message;
        dialog.append(body);

        const footer = document.createElement('div');
        footer.slot = 'footer';
        footer.className = 'mailer-dialog-footer';

        const cancel = document.createElement('pk-button');
        cancel.textContent = t('Cancel');

        const confirm = document.createElement('pk-button');
        confirm.setAttribute('variant', 'primary');
        confirm.textContent = confirmLabel;

        footer.append(cancel, confirm);
        dialog.append(footer);
        document.body.append(dialog);

        let result = false;

        const close = (value: boolean) => {
            result = value;
            dialog.hide();
        };

        cancel.addEventListener('click', () => close(false));
        confirm.addEventListener('click', () => close(true));

        dialog.addEventListener('pk-open-change', (event: Event) => {
            if (event.target === dialog && !(event as CustomEvent).detail?.open) {
                resolve(result);
                window.setTimeout(() => dialog.remove(), 300);
            }
        });

        customElements.whenDefined('pk-dialog').then(() => dialog.show());
    });
}

/**
 * Asks for confirmation before submitting `form[data-mailer-confirm]` forms.
 */
export function initConfirmForms(root: ParentNode = document): void {
    root.querySelectorAll<HTMLFormElement>('form[data-mailer-confirm]').forEach((form) => {
        let confirmed = false;

        form.addEventListener('submit', async (event) => {
            if (confirmed) {
                return;
            }

            event.preventDefault();

            const label = form.querySelector('button[type="submit"]')?.textContent?.trim() || t('Delete');

            if (await confirmDialog(form.dataset.mailerConfirm ?? '', label)) {
                confirmed = true;
                form.submit();
            }
        });
    });
}
