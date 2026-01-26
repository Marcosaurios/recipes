import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'

import { getAllRecipes } from './src/preBuild/fetch'

export default defineConfig(async () => {
	const cms = await getAllRecipes()
	return {
		plugins: [sveltekit(), Icons({ compiler: 'svelte', defaultClass: 'icon' })],
		define: {
			__ALL_RECIPES__: cms?.recipes,
			__RECIPE_BY_SLUG__: cms?.byRecipe,
			__RECIPES_BY_CATEGORY__: cms?.byCategories,
			__CATEGORIES__: cms?.categories
		}
	}
})
