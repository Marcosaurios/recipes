import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		// vite: {
		// 	optimizeDeps: {
		// 		include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
		// 	},
		// },
		// adapter: adapter({
		// 	pages: 'build',
		// 	assets: 'build',
		// 	fallback: null,
		// 	precompress: false,
		// 	strict: true
		//   }),
		// For now prerender will be disabled, as every page will be static
		// prerender: {
		//   crawl: true,
		//   entries: urls,
		// },
		alias: {
			$types: "src/types"
		},
	},
};

export default config;
