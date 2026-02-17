// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import openInEditor from "vite-plugin-open-in-editor";

// https://astro.build/config
export default defineConfig({
  site: "https://arenadacultura.com.br",
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    plugins: [
      openInEditor({
        editorBin: "code", // use 'code' for VSCode
        log: true, // optional: enable debug logs
      }),
    ],
    build: {
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },
});
