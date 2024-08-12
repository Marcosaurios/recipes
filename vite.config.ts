import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import { getAllRecipes } from './src/preBuild/fetch';

export default defineConfig(async ({ command, mode }) => {
	const content = await getAllRecipes()
	return {
		plugins: [sveltekit()],
		define: {
			__ALL_FETCHED_RECIPES__: content?.recipes,
			__ALL_FETCHED_RECIPES_BY_SLUG__: content?.bySlug
		}
	}
});
