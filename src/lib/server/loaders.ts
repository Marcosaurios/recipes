import { error } from '@sveltejs/kit'
import { RECIPES } from '$lib/globals/defines'
import type { Recipe } from '$types'
import type { UILocales } from '../../preBuild/types'

export function recipeLoader(locale: string, slug: string): Recipe {
	const recipe = RECIPES[locale as UILocales]?.bySlug[slug]
	if (!recipe) error(404, 'Recipe not found')
	return recipe
}

export function categoryLoader(
	locale: string,
	slug: string
): { recipes: Recipe[]; category: string } {
	const recipes = RECIPES[locale as UILocales]?.byCategory[slug]
	if (!recipes) error(404, 'Category not found')
	return { recipes, category: slug }
}
