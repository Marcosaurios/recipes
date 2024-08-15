import i18n from 'sveltekit-i18n';
import type { Config } from 'sveltekit-i18n'

const config: Config = ({
  loaders: [
    {
      locale: 'es',
      key: 'views',
      loader: async () => (
        await import('./locales/es/views.json')
      ).default,
    },
    {
      locale: 'es',
      key: 'components',
      loader: async () => (
        await import('./locales/es/components.json')
      ).default,
    }
  ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);