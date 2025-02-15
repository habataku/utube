import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueI18nPlugin()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/invidiousAPI': {
        target: 'https://invidious.asir.dev',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/invidiousAPI/, '')
      }
    }
  },
  base: "/utube/"
});
