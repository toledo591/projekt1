// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-03-30',
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],

  modules: [
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/content',
    '@nuxt/image',
  ],

  ssr: true,
  app: {
    baseURL: '/projekt1/'
  }
})