/**
 * Plugin Kit components used across Mailer’s pages. The rich text editor is loaded separately, on the compose
 * screen only (see compose-entry.ts).
 *
 * Named deep imports with the constructors referenced below, so the element definitions can’t be tree-shaken away.
 */
import '@verbb/plugin-kit-web/plugin-kit.css';
import { PkButton } from '@verbb/plugin-kit-web/components/button/pk-button.js';
import { PkCheckbox } from '@verbb/plugin-kit-web/components/checkbox/pk-checkbox.js';
import { PkDialog } from '@verbb/plugin-kit-web/components/dialog/pk-dialog.js';
import { PkDropdownItem } from '@verbb/plugin-kit-web/components/dropdown-menu/pk-dropdown-item.js';
import { PkDropdownMenu } from '@verbb/plugin-kit-web/components/dropdown-menu/pk-dropdown-menu.js';
import { PkField } from '@verbb/plugin-kit-web/components/field/pk-field.js';
import { PkInput } from '@verbb/plugin-kit-web/components/input/pk-input.js';
import { PkLightswitch } from '@verbb/plugin-kit-web/components/lightswitch/pk-lightswitch.js';
import { PkStatus } from '@verbb/plugin-kit-web/components/status/pk-status.js';
import { PkTab } from '@verbb/plugin-kit-web/components/tabs/pk-tab.js';
import { PkTabPanel } from '@verbb/plugin-kit-web/components/tabs/pk-tab-panel.js';
import { PkTabs } from '@verbb/plugin-kit-web/components/tabs/pk-tabs.js';
import { PkTextarea } from '@verbb/plugin-kit-web/components/textarea/pk-textarea.js';

export const components = [
    PkButton,
    PkCheckbox,
    PkDialog,
    PkDropdownItem,
    PkDropdownMenu,
    PkField,
    PkInput,
    PkLightswitch,
    PkStatus,
    PkTab,
    PkTabPanel,
    PkTabs,
    PkTextarea,
];

export type { PkDialog, PkInput, PkLightswitch };
export type { PkTiptapEditor } from '@verbb/plugin-kit-web/components/tiptap/pk-tiptap-editor.js';
