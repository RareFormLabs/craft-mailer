/**
 * Works around Plugin Kit 2.0.20’s `pk-checkbox` and `pk-lightswitch` only syncing their form value when
 * `value`, `name`, `disabled` or `required` change — not `checked`. Without this, toggling one after the page
 * loads isn’t reflected in the submitted form data.
 */
export function initCheckedFormValueFix(): void {
    document.addEventListener('change', (event) => {
        const target = event.composedPath()[0] as Element | undefined;
        const host = (target?.getRootNode() as ShadowRoot | Document | undefined);
        const element = host instanceof ShadowRoot ? host.host : target;

        if (element && (element.localName === 'pk-checkbox' || element.localName === 'pk-lightswitch')) {
            (element as unknown as { syncFormValue?: () => void }).syncFormValue?.();
        }
    }, true);
}
