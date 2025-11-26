import { loadTranslations } from '$lib/i18n'

export const load = async ({ url }) => {
	const { pathname } = url

	const initLocale = 'es'

	await loadTranslations(initLocale, pathname) // keep this just before the `return`

	return {}
}
