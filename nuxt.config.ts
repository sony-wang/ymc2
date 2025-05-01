// https://nuxt.com/docs/api/configuration/nuxt-config
// Nuxt config file
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // compatibilityDate: '2024-11-01',
  // devtools: { enabled: true },
  modules: [
    'vuetify-nuxt-module',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
  ],
  // plugins: ['~/plugins/i18n.ts'],
  eslint: {
    // options here
    config: {
      stylistic: true,
    },
  },
  css: [
    '@/assets/css/main.css'
  ],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
    },
  },
  i18n: {
    lazy: true, // 啟用延遲載入
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en.json'
      },
      {
        name: '繁體中文',
        code: 'zh-tw',
        iso: 'zh-TW',
        file: 'zh-tw.json'
      }
    ],
    defaultLocale: 'zh-tw'
  },

  compatibilityDate: '2025-03-23',
})