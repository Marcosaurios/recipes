import { browser } from '$app/environment'
import { init, register } from 'svelte-i18n'

const fallbackLocale = 'es'
register(fallbackLocale, () => import('./locales/es.json'))

init({
  fallbackLocale,
  // Not implemented in other langs yet
  initialLocale: browser ? window.navigator.language : fallbackLocale,
})