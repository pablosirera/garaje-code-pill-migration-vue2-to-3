import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import createVuePlugin from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin({})],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})