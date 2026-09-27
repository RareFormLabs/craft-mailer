import { defineConfig } from 'vite';

export default defineConfig({
    // Craft republishes dist/ under a hashed cpresources folder, so keep URLs relative.
    base: './',
    publicDir: false,
    resolve: {
        // One copy of TipTap and Plugin Kit, so the registered image extension is shared with the editor.
        dedupe: ['@tiptap/core', '@tiptap/pm', '@verbb/plugin-kit-tiptap-core', 'lit'],
    },
    build: {
        outDir: 'src/web/assets/cp/dist',
        emptyOutDir: true,
        cssCodeSplit: false,
        // The preload helper would live in mailer.js and be imported back from chunks (see mailer.ts).
        modulePreload: false,
        target: 'es2022',
        sourcemap: false,
        // The editor chunk (TipTap) is large, but only loads on the compose screen.
        chunkSizeWarningLimit: 1000,
        rolldownOptions: {
            input: 'src/web/assets/cp/src/mailer.ts',
            output: {
                format: 'es',
                entryFileNames: 'mailer.js',
                assetFileNames: 'mailer[extname]',
                chunkFileNames: 'chunks/[name]-[hash].js',
            },
        },
    },
});
