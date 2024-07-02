# Recipes Static Site
This is a static project built for gathering all the recipes from a CMS and rendering them in a website, making them searchable and readable for everyone.
The project follows the Functional Requirements explained in each issue labeled as `basicRF`, so I can track its progress more precisely. You can take a look to them [here](https://github.com/Marcosaurios/recipes/issues?q=is%3Aopen+is%3Aissue+label%3AbasicRF)

## Things I've learnt
- **Prerendering**: I was confused understanding how the static content loads in the `load` function. I thought Sveltekit will crawl this `load` functions and store each value in the static generated site. Instead, in the `svelte.config.js` options we have a useful [prerendering](https://kit.svelte.dev/docs#configuration-prerender) option with an `entries` parameter: an array of URL pages. Sveltekit will look for each URLs in our code in the compilation time, resolving each one statically.
- **Modules importing**: When running node JS scripts and using `ES Modules` `import`s, you must provide the file extension always in the importing path. 


TODO
-[] Mock api 

