import type { PkDialog, PkInput, PkLightswitch, PkTiptapEditor } from './components';
import { errorMessage, notifyError, notifySuccess, postAction, t } from './craft';
import { confirmDialog as confirmAction } from './dialogs';
import { syncCheckedFormValues } from './form-fixes';

type Summary = {
    total: number;
    sendable: number;
    emails: number;
    custom: number;
    users: number;
    skipped: number;
    reasons: Record<string, number>;
    testToEmailAddress: string | null;
};

/**
 * Behaviors for the compose screen.
 */
export function initCompose(form: HTMLFormElement): void {
    const editor = form.querySelector<PkTiptapEditor>('pk-tiptap-editor[data-mailer-body]');
    const subject = form.querySelector<PkInput>('[data-mailer-subject]');
    const confirmedInput = form.querySelector<HTMLInputElement>('[data-mailer-confirmed]');
    const confirmDialog = document.querySelector<PkDialog>('[data-mailer-confirm-dialog]');
    const previewDialog = document.querySelector<PkDialog>('[data-mailer-preview-dialog]');

    let lastFocused: 'subject' | 'body' = 'body';
    let summary: Summary | null = null;
    let submitting = false;

    // ---------------------------------------------------------------------
    // Variables
    // ---------------------------------------------------------------------

    subject?.addEventListener('focusin', () => (lastFocused = 'subject'));
    editor?.addEventListener('focusin', () => (lastFocused = 'body'));

    const insertVariable = async (token: string, target: 'subject' | 'body' = lastFocused) => {
        const code = `{{ ${token} }}`;

        if (target === 'subject' && subject) {
            insertIntoInput(subject, code);
            return;
        }

        if (!editor) {
            return;
        }

        await customElements.whenDefined('pk-tiptap-editor');
        await editor.updateComplete;
        const instance = editor.editor;

        if (instance) {
            instance.chain().focus().insertContent({ type: 'text', text: code }).run();
        }
    };

    form.querySelector('[data-mailer-variables-menu]')?.addEventListener('pk-select', (event) => {
        const token = (event as CustomEvent).detail?.value;

        if (token) {
            insertVariable(token, 'body');
        }
    });

    form.addEventListener('click', (event) => {
        const button = (event.target as Element).closest<HTMLElement>('[data-mailer-insert]');

        if (button?.dataset.mailerInsert) {
            event.preventDefault();
            insertVariable(button.dataset.mailerInsert);
        }
    });

    // ---------------------------------------------------------------------
    // Recipients
    // ---------------------------------------------------------------------

    const badge = form.querySelector<HTMLElement>('[data-mailer-count-badge]');
    const summaryText = form.querySelector<HTMLElement>('[data-mailer-summary-text]');
    let countTimer: number | undefined;
    let countRequest = 0;

    const fetchSummary = async (): Promise<Summary | null> => {
        const requestId = ++countRequest;

        try {
            const response = await postAction('mailer/compose/count-recipients', formData(form, false));

            return requestId === countRequest ? response.data as Summary : null;
        } catch (error) {
            if (requestId === countRequest && summaryText) {
                summaryText.textContent = t('Couldn’t count recipients.');
            }

            return null;
        }
    };

    const updateCount = async () => {
        if (summaryText) {
            summaryText.textContent = t('Counting…');
        }

        const result = await fetchSummary();

        if (!result) {
            return;
        }

        summary = result;
        renderSummary(result, summaryText, badge);
    };

    const scheduleCount = () => {
        window.clearTimeout(countTimer);
        countTimer = window.setTimeout(updateCount, 400);
    };

    form.querySelectorAll<PkLightswitch>('[data-mailer-mode-toggle]').forEach((toggle) => {
        toggle.addEventListener('change', () => {
            const body = form.querySelector<HTMLElement>(`[data-mailer-mode-body="${toggle.dataset.mailerModeToggle}"]`);

            if (body) {
                body.hidden = !toggle.checked;
            }

            scheduleCount();
        });
    });

    form.querySelector('[data-mailer-recipients]')?.addEventListener('change', (event) => {
        if ((event.target as Element).closest('[data-mailer-count-input]')) {
            scheduleCount();
        }
    });

    form.querySelector('[data-mailer-recipients]')?.addEventListener('input', (event) => {
        if ((event.target as Element).closest('[data-mailer-count-input]')) {
            scheduleCount();
        }
    });

    // Craft’s element select fields don’t dispatch DOM events, so watch their selected elements instead.
    for (const selector of ['#mailer-users', '[data-mailer-condition]']) {
        const container = form.querySelector(selector);

        if (container) {
            new MutationObserver(scheduleCount).observe(container, { childList: true, subtree: true });
        }
    }

    updateCount();

    // ---------------------------------------------------------------------
    // Sending
    // ---------------------------------------------------------------------

    const openConfirm = async () => {
        if (!confirmDialog) {
            return;
        }

        const result = await fetchSummary();

        if (!result) {
            notifyError(t('Couldn’t count recipients.'));
            return;
        }

        summary = result;
        renderConfirm(confirmDialog, result, subject?.value ?? '', scheduledFor(form));
        await confirmDialog.show();
    };

    form.addEventListener('submit', (event) => {
        if (submitting) {
            return;
        }

        event.preventDefault();
        event.stopImmediatePropagation();
        openConfirm();
    }, { capture: true });

    document.addEventListener('keydown', (event) => {
        if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 's') {
            event.preventDefault();
            openConfirm();
        }
    });

    confirmDialog?.querySelector('[data-mailer-confirm-submit]')?.addEventListener('click', () => {
        if (submitting || !summary || summary.sendable === 0) {
            return;
        }

        submitting = true;

        if (confirmedInput) {
            confirmedInput.value = '1';
        }

        confirmDialog.querySelector('[data-mailer-confirm-submit]')?.setAttribute('loading', '');
        form.querySelector('[data-mailer-send]')?.classList.add('loading');
        // Native submit: skips the submit event (and our interception) and includes the form-associated elements.
        syncCheckedFormValues(form);
        form.submit();
    });

    // ---------------------------------------------------------------------
    // Preview & test
    // ---------------------------------------------------------------------

    form.querySelector('[data-mailer-preview]')?.addEventListener('click', async (event) => {
        const button = event.currentTarget as HTMLElement;
        button.setAttribute('loading', '');

        try {
            const response = await postAction('mailer/compose/preview', formData(form, false));
            renderPreview(previewDialog, response.data);
            await previewDialog?.show();
        } catch (error) {
            notifyError(errorMessage(error, t('The message can’t be previewed.')));
        } finally {
            button.removeAttribute('loading');
        }
    });

    form.querySelector('[data-mailer-test]')?.addEventListener('click', async (event) => {
        const button = event.currentTarget as HTMLElement;
        button.setAttribute('loading', '');

        try {
            const response = await postAction('mailer/compose/test-send', formData(form, true));
            notifySuccess(response.data?.message ?? t('Test email sent.'));
        } catch (error) {
            notifyError(errorMessage(error, t('The test email couldn’t be sent.')));
        } finally {
            button.removeAttribute('loading');
        }
    });

    // ---------------------------------------------------------------------
    // Drafts
    // ---------------------------------------------------------------------

    const draftInput = form.querySelector<HTMLInputElement>('[data-mailer-draft-id]');
    const draftStatus = form.querySelector<HTMLElement>('[data-mailer-draft-status]');
    let draftDirty = false;
    let draftSaving = false;
    let draftTimer: number | undefined;

    const hasContent = () => Boolean(subject?.value?.trim()) || Boolean(editor?.editor && !editor.editor.isEmpty);

    const saveDraft = async () => {
        if (!draftDirty || draftSaving || submitting || !hasContent()) {
            return;
        }

        draftSaving = true;
        draftDirty = false;

        try {
            const data = formData(form, false);
            const response = await postAction('mailer/saved/save-draft', data);
            const { draftId, savedAt } = response.data as { draftId: number; savedAt: string };

            if (draftInput) {
                draftInput.value = String(draftId);
            }

            if (draftStatus) {
                draftStatus.textContent = t('Draft saved at {time}', { time: savedAt });
            }

            const url = new URL(window.location.href);

            if (url.searchParams.get('draft') !== String(draftId)) {
                url.searchParams.delete('template');
                url.searchParams.set('draft', String(draftId));
                window.history.replaceState(null, '', url);
            }
        } catch {
            draftDirty = true;

            if (draftStatus) {
                draftStatus.textContent = t('Couldn’t save the draft.');
            }
        } finally {
            draftSaving = false;
        }
    };

    const markDirty = () => {
        if (submitting) {
            return;
        }

        draftDirty = true;
        window.clearTimeout(draftTimer);
        draftTimer = window.setTimeout(saveDraft, 3000);
    };

    form.addEventListener('input', markDirty);
    form.addEventListener('change', markDirty);

    for (const selector of ['#mailer-users', '#mailer-assets', '[data-mailer-condition]']) {
        const container = form.querySelector(selector);

        if (container) {
            new MutationObserver(markDirty).observe(container, { childList: true, subtree: true });
        }
    }

    // ---------------------------------------------------------------------
    // Templates
    // ---------------------------------------------------------------------

    form.querySelector('[data-mailer-templates-menu]')?.addEventListener('pk-select', async (event) => {
        const id = (event as CustomEvent).detail?.value;

        if (!id) {
            return;
        }

        if (hasContent() && !(await confirmAction(t('Replace the current subject and message with this template?'), t('Load')))) {
            return;
        }

        try {
            const data = new FormData();
            data.set('id', String(id));
            const response = await postAction('mailer/saved/template-data', data);
            applyTemplate(form, editor, response.data);
            markDirty();
        } catch (error) {
            notifyError(errorMessage(error, t('That template no longer exists.')));
        }
    });

    const templateDialog = document.querySelector<PkDialog>('[data-mailer-template-dialog]');
    const templateName = templateDialog?.querySelector<PkInput>('[data-mailer-template-name]');

    form.querySelector('[data-mailer-save-template]')?.addEventListener('click', async () => {
        if (templateName) {
            templateName.value = subject?.value ?? '';
        }

        await templateDialog?.show();
        templateName?.focus();
    });

    templateDialog?.querySelector('[data-mailer-template-save]')?.addEventListener('click', async (event) => {
        const button = event.currentTarget as HTMLElement;
        const name = templateName?.value?.trim() ?? '';

        if (!name) {
            notifyError(t('Give the template a name.'));
            return;
        }

        button.setAttribute('loading', '');

        try {
            const data = formData(form, false);
            data.set('templateName', name);
            const response = await postAction('mailer/saved/save-template', data);
            notifySuccess(response.data?.message ?? name);
            await templateDialog.hide();
        } catch (error) {
            notifyError(errorMessage(error, t('Couldn’t save the template.')));
        } finally {
            button.removeAttribute('loading');
        }
    });

    // ---------------------------------------------------------------------
    // Export
    // ---------------------------------------------------------------------

    form.querySelector('[data-mailer-export]')?.addEventListener('click', async (event) => {
        const button = event.currentTarget as HTMLElement;
        button.setAttribute('loading', '');

        try {
            const response = await postAction('mailer/export/users', formData(form, false), { responseType: 'blob' });
            const disposition: string = response.headers?.['content-disposition'] ?? '';
            const filename = /filename="?([^";]+)"?/.exec(disposition)?.[1] ?? 'mailer-users.csv';
            download(response.data as Blob, filename);
        } catch (error: any) {
            let message = t('Export failed.');
            const data = error?.response?.data;

            if (data instanceof Blob) {
                try {
                    message = JSON.parse(await data.text()).message ?? message;
                } catch {
                    // Not JSON
                }
            }

            notifyError(message);
        } finally {
            button.removeAttribute('loading');
        }
    });
}

/**
 * Builds the form data for an async request.
 */
function formData(form: HTMLFormElement, includeUploads: boolean): FormData {
    syncCheckedFormValues(form);
    const data = new FormData(form);
    data.delete('action');
    data.delete('confirmed');

    if (!includeUploads) {
        data.delete('uploads[]');
    }

    return data;
}

type TemplateData = {
    subject?: string;
    bodyJson?: string;
    fromName?: string;
    fromEmail?: string;
    replyTo?: string;
    embedImages?: boolean;
};

function applyTemplate(form: HTMLFormElement, editor: PkTiptapEditor | null, data: TemplateData): void {
    const setInput = (selector: string, value: string | undefined) => {
        const input = form.querySelector<PkInput>(selector);

        if (input && value !== undefined && !input.readonly) {
            input.value = value;
            input.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
        }
    };

    setInput('[data-mailer-subject]', data.subject);
    setInput('#mailer-fromName', data.fromName);
    setInput('#mailer-fromEmail', data.fromEmail);
    setInput('#mailer-replyTo', data.replyTo);

    if (editor?.editor && data.bodyJson !== undefined) {
        try {
            editor.editor.commands.setContent({ type: 'doc', content: JSON.parse(data.bodyJson || '[]') }, { emitUpdate: true });
        } catch {
            // Invalid JSON; leave the message as is
        }
    }

    const embed = form.querySelector<PkLightswitch>('pk-lightswitch[name="embedImages"]');

    if (embed && data.embedImages !== undefined && embed.checked !== data.embedImages) {
        embed.checked = data.embedImages;
        (embed as unknown as { syncFormValue?: () => void }).syncFormValue?.();
    }
}

function insertIntoInput(input: PkInput, text: string): void {
    const native = input.shadowRoot?.querySelector('input');
    const value = input.value ?? '';

    if (native && native.selectionStart !== null) {
        const start = native.selectionStart;
        const end = native.selectionEnd ?? start;
        input.value = value.slice(0, start) + text + value.slice(end);
        input.focus();
        requestAnimationFrame(() => native.setSelectionRange(start + text.length, start + text.length));
    } else {
        input.value = value + (value && !value.endsWith(' ') ? ' ' : '') + text;
    }

    input.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
}

function renderSummary(summary: Summary, text: HTMLElement | null, badge: HTMLElement | null): void {
    if (badge) {
        badge.textContent = String(summary.emails);
        badge.hidden = summary.emails === 0;
    }

    if (!text) {
        return;
    }

    if (summary.total === 0) {
        text.textContent = t('No recipients selected');
        return;
    }

    const parts = [t('{num} {num, plural, =1{email} other{emails}}', { num: summary.sendable })];

    if (summary.skipped) {
        parts.push(t('{num} skipped', { num: summary.skipped }));
    }

    text.textContent = parts.join(' · ');
    text.title = Object.entries(summary.reasons).map(([reason, count]) => `${reason}: ${count}`).join('\n');
}

function scheduledFor(form: HTMLFormElement): { date: string; time: string } | null {
    const date = form.querySelector<HTMLInputElement>('input[name="sendAt[date]"]')?.value.trim() ?? '';
    const time = form.querySelector<HTMLInputElement>('input[name="sendAt[time]"]')?.value.trim() ?? '';

    return date ? { date, time } : null;
}

function renderConfirm(dialog: PkDialog, summary: Summary, subject: string, schedule: { date: string; time: string } | null): void {
    const title = dialog.querySelector<HTMLElement>('[data-mailer-confirm-title]');
    const message = dialog.querySelector<HTMLElement>('[data-mailer-confirm-message]');
    const breakdown = dialog.querySelector<HTMLElement>('[data-mailer-confirm-breakdown]');
    const testNotice = dialog.querySelector<HTMLElement>('[data-mailer-confirm-test]');
    const testText = dialog.querySelector<HTMLElement>('[data-mailer-confirm-test-text]');
    const submit = dialog.querySelector<HTMLElement>('[data-mailer-confirm-submit]');

    if (title) {
        title.textContent = schedule
            ? t('Schedule “{subject}”?', { subject: subject || '…' })
            : t('Send “{subject}”?', { subject: subject || '…' });
    }

    if (message) {
        message.textContent = summary.sendable === 0
            ? t('No recipients selected')
            : t('Send the message to {num} {num, plural, =1{email address} other{email addresses}}?', { num: summary.emails })
                + (schedule ? ' ' + t('It will be sent on {date} at {time}.', { date: schedule.date, time: schedule.time || '12:00' }) : '');
    }

    if (submit) {
        submit.textContent = schedule ? t('Schedule') : t('Send');
    }

    if (breakdown) {
        breakdown.replaceChildren();
        const items: string[] = [];

        if (summary.custom) {
            items.push(t('{num} custom email with {addresses} {addresses, plural, =1{address} other{addresses}}', {
                num: summary.custom,
                addresses: summary.emails - summary.users,
            }));
        }

        if (summary.users) {
            items.push(t('{num} {num, plural, =1{user} other{users}}', { num: summary.users }));
        }

        for (const [reason, count] of Object.entries(summary.reasons)) {
            items.push(`${t('{num} skipped', { num: count })}: ${reason}`);
        }

        for (const item of items) {
            const li = document.createElement('li');
            li.textContent = item;
            breakdown.append(li);
        }
    }

    if (testNotice && testText) {
        testNotice.hidden = !summary.testToEmailAddress;
        testText.textContent = summary.testToEmailAddress
            ? t('Test mode is on: every email will go to {address} instead, without CC or BCC.', { address: summary.testToEmailAddress })
            : '';
    }

    if (summary.sendable === 0) {
        submit?.setAttribute('disabled', '');
    } else {
        submit?.removeAttribute('disabled');
    }
}

function renderPreview(dialog: PkDialog | null, data: { subject: string; html: string; text: string; previewAs: string; emptyVariables: string[] }): void {
    if (!dialog) {
        return;
    }

    const subject = dialog.querySelector<HTMLElement>('[data-mailer-preview-subject]');
    const frame = dialog.querySelector<HTMLIFrameElement>('[data-mailer-preview-html]');
    const text = dialog.querySelector<HTMLElement>('[data-mailer-preview-text]');

    if (subject) {
        subject.textContent = data.subject;
    }

    if (frame) {
        frame.srcdoc = data.html;
    }

    if (text) {
        text.textContent = data.text;
    }

    const previewAs = dialog.querySelector<HTMLElement>('[data-mailer-preview-as]');
    const empty = dialog.querySelector<HTMLElement>('[data-mailer-preview-empty]');
    const emptyText = dialog.querySelector<HTMLElement>('[data-mailer-preview-empty-text]');

    if (previewAs) {
        previewAs.textContent = data.previewAs;
    }

    if (empty && emptyText) {
        const tokens = data.emptyVariables ?? [];
        empty.hidden = tokens.length === 0;
        emptyText.textContent = tokens.length
            ? t('These variables are empty for this person: {variables}', { variables: tokens.map((token) => `{{ ${token} }}`).join(', ') })
            : '';
    }
}

function download(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
