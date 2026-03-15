import { RECIPES } from './defines'
import type { Locale } from '$lib/server/loaders'

export function getCategoryFromURL(url: URL, locale: Locale): string {
	// URL structure: /[locale]/[segment]/[entityName]
	const entityName = url.pathname.split('/')[3]
	const localeData = RECIPES[locale]

	// Is a category with some recipes
	if (localeData?.byCategory[entityName]?.length) {
		return entityName
	}

	const recipe = localeData?.bySlug[entityName]
	if (recipe) {
		// Recipe contains multiple categories but we will be highlighting just the main category
		return recipe.category[0]
	}

	return 'unknown'
}
