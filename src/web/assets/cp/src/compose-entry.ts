/**
 * The compose screen, loaded on demand: the rich text editor (TipTap) makes up most of Mailer’s JavaScript.
 */
// Editor extensions must be registered before the editor is defined.
import './images';
import { PkTiptapEditor } from '@verbb/plugin-kit-web/components/tiptap/pk-tiptap-editor.js';

// Referenced so bundlers keep the element definition.
void PkTiptapEditor;

export { initCompose } from './compose';
