import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { identity } from './src/core/config'

export default defineConfig({
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        id: './',
        name: identity.name.en + ' — Portfolio',
        short_name: identity.name.en,
        display: 'standalone',
        theme_color: '#0c0c15',
        background_color: '#0c0c15',
        start_url: './',
        icons: [192, 512].map((size) => ({
          src: 'pwa-' + size + '.png',
          sizes: size + 'x' + size,
          type: 'image/png',
          purpose: 'any',
        })),
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,jpg,ttf,pdf}'],
        cleanupOutdatedCaches: true,
      },
    }),
  ],
})
