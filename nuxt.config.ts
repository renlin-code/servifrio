// https://nuxt.com/docs/api/configuration/nuxt-config
import ESLintPlugin from '@nabla/vite-plugin-eslint'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/scss/main.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_vars.scss" as *;'
        }
      }
    },
    plugins: [
      ESLintPlugin({
        shouldLint: (filePath) => {
          return (filePath.includes('app/') || filePath.includes('components/') || filePath.includes('composables/') || filePath.includes('pages/') || filePath.includes('plugins/') || filePath.includes('utils/')) && !filePath.includes('node_modules') && !filePath.includes('.nuxt')
        }
      }) as any
    ]
  }
})
