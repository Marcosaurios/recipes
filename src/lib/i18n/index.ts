import { browser } from '$app/environment'
import { init, register } from 'svelte-i18n'

const defaultLocale = 'es'

register('es', () => import('./locales/es.json'))

init({
  fallbackLocale: defaultLocale,
  // Not implemented in other langs yet
  initialLocale: browser ? window.navigator.language : defaultLocale,
})