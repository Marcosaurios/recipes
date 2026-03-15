import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'

import { getAllRecipes } from './src/preBuild/fetch'

export default defineConfig(async () => {
	const [es, en] = await Promise.all([getAllRecipes('es-ES'), getAllRecipes('en-EU')])
	return {
		plugins: [sveltekit(), Icons({ compiler: 'svelte', defaultClass: 'icon' })],
		define: {
			__RECIPES__: {
				es: {
					allRecipes: es.allRecipes,
					bySlug: es.byRecipe,
					byCategory: es.byCategories,
					categories: es.categories
				},
				en: {
					allRecipes: en.allRecipes,
					bySlug: en.byRecipe,
					byCategory: en.byCategories,
					categories: en.categories
				}
			}
		}
	}
})
