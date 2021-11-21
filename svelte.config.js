import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import staticPages from "./src/_prebuild/preload.js"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		target: '#svelte',
		adapter: adapter({
			crawl: true,
			pages: staticPages,
			assets: 'build',
			fallback: null
		}),
	},
};

export default config;
