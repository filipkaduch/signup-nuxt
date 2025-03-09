import { config } from '@vue/test-utils';
import { createI18n } from 'vue-i18n';
import en from '~/lang/en.json';

const i18n = createI18n({
  locale: 'en-US',
  messages: { 'en-US': en },
});

config.global.plugins.push(i18n);