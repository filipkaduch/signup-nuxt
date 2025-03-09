import locales from './consts/locales';

export default defineNuxtConfig({
  components: [{ path: '~/components', pathPrefix: false }],

  compatibilityDate: '2024-11-01',

  css: ['@provetcloud/css'],

  devtools: { enabled: true },

  i18n: {
    detectBrowserLanguage: {
      cookieKey: 'preferred_locale',
    },
    langDir: '../lang',
    lazy: true,
    locales,
    strategy: 'no_prefix',
    types: 'composition',
  },

  modules: [
    '@nuxtjs/i18n',
    '@nuxt/test-utils/module',
    '@pinia/nuxt',
  ],

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.includes('-')
    }
  }
})