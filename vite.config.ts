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
        target: 'es2022',
        sourcemap: false,
        // Lit + TipTap in a single file; only loaded on Mailer pages.
        chunkSizeWarningLimit: 1200,
        rolldownOptions: {
            input: 'src/web/assets/cp/src/mailer.ts',
            output: {
                format: 'es',
                entryFileNames: 'mailer.js',
                assetFileNames: 'mailer[extname]',
                codeSplitting: false,
            },
        },
    },
});
