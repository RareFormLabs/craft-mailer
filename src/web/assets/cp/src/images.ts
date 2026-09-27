/**
 * Adds images to the message editor: a TipTap image node that remembers its source asset, and an
 * “Insert image” toolbar button that opens Craft’s asset picker.
 *
 * Must run before any `pk-tiptap-editor` renders, so import it before the components.
 */
import type { Editor } from '@tiptap/core';
import { Image } from '@tiptap/extension-image';
import { registerTiptapExtension, registerTiptapToolbarControl } from '@verbb/plugin-kit-tiptap-core';
import { errorMessage, notifyError, postAction, t } from './craft';

type ImageData = {
    assetId: number;
    src: string;
    alt: string;
    width: number | null;
};

const MailerImage = Image.extend({
    addAttributes() {
        return {
            ...this.parent?.(),
            assetId: {
                default: null,
                parseHTML: (element: HTMLElement) => {
                    const id = element.getAttribute('data-asset-id');
                    return id ? Number(id) : null;
                },
                renderHTML: (attributes: Record<string, unknown>) => (attributes.assetId ? { 'data-asset-id': attributes.assetId } : {}),
            },
        };
    },
}).configure({
    inline: false,
    allowBase64: false,
    resize: {
        enabled: true,
        alwaysPreserveAspectRatio: true,
        minWidth: 40,
    },
});

registerTiptapExtension({
    id: 'mailer-image',
    extension: MailerImage,
    surfaces: ['editor'],
});

registerTiptapToolbarControl({
    id: 'mailer-image',
    label: t('Insert image'),
    icon: {
        width: 24,
        height: 24,
        path: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v9.6l4.3-4.3a1 1 0 0 1 1.4 0l3.8 3.8 1.8-1.8a1 1 0 0 1 1.4 0L20 16.6V6H4Zm12 1.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z',
    },
    isActive: (editor: Editor) => editor.isActive('image'),
    run: (editor: Editor) => {
        openAssetPicker(editor);
        return true;
    },
});

function openAssetPicker(editor: Editor): void {
    // Insert after a selected image instead of replacing it
    const { selection } = editor.state;
    const position = 'node' in selection && editor.isActive('image') ? selection.to : selection.from;

    window.Craft.createElementSelectorModal('craft\\elements\\Asset', {
        multiSelect: false,
        criteria: { kind: ['image'] },
        onSelect: async (elements: Array<{ id: number }>) => {
            const assetId = elements[0]?.id;

            if (!assetId) {
                return;
            }

            try {
                const data = new FormData();
                data.set('assetId', String(assetId));
                const response = await postAction('mailer/compose/image', data);
                const image = response.data as ImageData;

                editor.chain()
                    .focus()
                    .insertContentAt(position, {
                        type: 'image',
                        attrs: {
                            src: image.src,
                            alt: image.alt || null,
                            width: image.width,
                            assetId: image.assetId,
                        },
                    })
                    .run();
            } catch (error) {
                notifyError(errorMessage(error, t('Couldn’t insert the image.')));
            }
        },
    });
}
