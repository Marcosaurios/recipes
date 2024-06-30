import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		// TODO this 'content' should be in-memory js files, instead of pure json files?
		fs: {
			allow: ['content']
		}
	}
});
