import { redirect } from '@sveltejs/kit'
import { AVAILABLE_LOCALES, DEFAULT_LOCALE, loadTranslations } from '$lib/i18n'
import { RECIPES } from '$lib/globals/defines'
import type { LayoutLoad } from './$types'
import type { UILocales } from '../../preBuild/types'

export const load: LayoutLoad = async ({ params, url }) => {
	const locale = params.locale

	if (!AVAILABLE_LOCALES.includes(locale as UILocales)) {
		redirect(302, `/${DEFAULT_LOCALE}`)
	}

	await loadTranslations(locale, url.pathname)
	const { categories, allRecipes: recipes } = RECIPES[locale]
	return { locale, categories, recipes, url }
}
