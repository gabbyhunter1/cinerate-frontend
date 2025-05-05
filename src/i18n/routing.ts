import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en-US', 'ru-RU'],
  defaultLocale: 'en-US',
  localePrefix: {
    mode: 'always',
    prefixes: {
      'en-US': '/en',
      'ru-RU': '/ru',
    },
  },
});
