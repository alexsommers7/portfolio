import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2'; // for vue 2.7

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080, // vite uses 5173 by default
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/scss/main";
        `,
      },
    },
  },
});
