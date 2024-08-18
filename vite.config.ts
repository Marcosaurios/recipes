import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite'

import { getAllRecipes } from './src/preBuild/fetch';

export default defineConfig(async () => {
	const content = await getAllRecipes()
	return {
		plugins: [
			sveltekit(),
			Icons({ compiler: 'svelte' })
		],
		define: {
			__ALL_FETCHED_RECIPES__: content?.recipes,
			__ALL_FETCHED_RECIPES_BY_SLUG__: content?.bySlug
		}
	}
});
