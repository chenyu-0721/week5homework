import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/week5homework/',
  plugins: [vue(), vueDevTools()],
  define: {
    'process.env': process.env
  },
  build: {
    outDir: 'dist'
  },
  server: {
    historyApiFallback: true
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
