import i18n from 'sveltekit-i18n'
import type { Config } from 'sveltekit-i18n'
import { languageMap, type UILocales } from '../../preBuild/types'
import { RECIPES } from '$lib/globals/defines'
import { goto } from '$app/navigation'

const config: Config = {
	loaders: [
		{
			locale: 'es',
			key: 'templates',
			loader: async () => (await import('./locales/es/templates.json')).default
		},
		{
			locale: 'es',
			key: 'components',
			loader: async () => (await import('./locales/es/components.json')).default
		},
		{
			locale: 'en',
			key: 'templates',
			loader: async () => (await import('./locales/en/templates.json')).default
		},
		{
			locale: 'en',
			key: 'components',
			loader: async () => (await import('./locales/en/components.json')).default
		}
	]
}

export const { t, locale, locales, loading, loadTranslations } = new i18n(config)

export function navigateToLocale(targetLocale: UILocales): void {
	const parts = window.location.pathname.split('/').filter(Boolean)
	const currentLocale = parts[0] as UILocales

	if (currentLocale === targetLocale) return

	// Landing: /es → /en
	if (parts.length <= 1) {
		goto(`/${targetLocale}`)
		return
	}

	const segment = parts[1]
	const slug = parts[2]

	// Recipe page: /es/receta/slug → /en/recipe/slug (with translated slug)
	if (['receta', 'recipe'].includes(segment) && slug) {
		const currentRecipes = RECIPES[currentLocale].allRecipes
		const targetRecipes = RECIPES[targetLocale].allRecipes
		const index = currentRecipes.findIndex((r: { slug: string }) => r.slug === slug)
		if (index !== -1 && targetRecipes[index]) {
			goto(targetRecipes[index].url)
			return
		}
	}

	// Category page: /es/categoria/slug → /en/category/slug (with translated name)
	if (['categoria', 'category'].includes(segment) && slug) {
		const currentCategories = RECIPES[currentLocale].categories
		const targetCategories = RECIPES[targetLocale].categories
		const index = currentCategories.findIndex((c: { name: string }) => c.name === slug)
		if (index !== -1 && targetCategories[index]) {
			goto(targetCategories[index].url)
			return
		}
	}

	// Fallback
	goto(`/${targetLocale}`)
}

export const AVAILABLE_LOCALES = Object.values(languageMap)
export const DEFAULT_LOCALE = AVAILABLE_LOCALES[0]
