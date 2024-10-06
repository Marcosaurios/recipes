import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite'

import { getAllRecipes } from './src/preBuild/fetch';

export default defineConfig(async () => {
	const cms = await getAllRecipes()
	return {
		plugins: [
			sveltekit(),
			Icons({ compiler: 'svelte' })
		],
		define: {
			__ALL_RECIPES__: cms?.recipes,
			__RECIPE_BY_SLUG__: cms?.bySlug,
			__RECIPES_BY_CATEGORY__: cms?.byCategories,
			__CATEGORIES__: cms?.categories
		}
	}
});
