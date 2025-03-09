import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  test: {
    coverage: {
      exclude: [
        // directories
        '.nuxt/',
        'consts/',
        'server/',
        'tests/',
        'types/',
        'virtual:nuxt:**/',

        // files
        'i18n.config.ts',
        'nuxt.config.ts',
      ],
      provider: 'v8',
    },
    environment: 'nuxt',
    globals: true,
    setupFiles: ['./tests/utils/setupVitest.ts'],
    testTimeout: 10000,
  },
});