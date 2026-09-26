/**
 * Minimal typings and helpers for the Craft control panel globals.
 */
declare global {
    interface Window {
        Craft: any;
    }
}

export const Craft = (): any => window.Craft;

export function t(message: string, params?: Record<string, string | number>): string {
    return Craft().t('mailer', message, params);
}

export function notifySuccess(message: string): void {
    Craft().cp.displaySuccess(message);
}

export function notifyError(message: string): void {
    Craft().cp.displayError(message);
}

/**
 * Posts form data to a controller action and returns the response.
 */
export function postAction(action: string, data: FormData, options: Record<string, unknown> = {}): Promise<any> {
    return Craft().sendActionRequest('POST', action, { data, ...options });
}

/**
 * Returns a readable message from a failed action request.
 */
export function errorMessage(error: any, fallback: string): string {
    const data = error?.response?.data;

    if (data?.errors && typeof data.errors === 'object') {
        const first = Object.values(data.errors).flat()[0];

        if (typeof first === 'string') {
            return data.message ? `${data.message} ${first}` : first;
        }
    }

    return data?.message || data?.error || fallback;
}
