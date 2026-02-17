// @ts-check
import { defineConfig } from "astro/config";
import openInEditor from "vite-plugin-open-in-editor";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      openInEditor({
        editorBin: "code", // use 'code' for VSCode
        log: true, // optional: enable debug logs
      }),
    ],
  },
});
