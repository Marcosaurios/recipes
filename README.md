# Recipes Static Site
A simple static website that will render this Repo issues as static markdown content. It categorises the issues by their frontmatter definition (ingredients, recipe type, etc)

## Things I learnt
- **Prerendering**: I was confused trying to perform the preload of the static content in the `load` function of each component. I thought Sveltekit will crawl this load functions and store each value in the static generated site. Instead, in the `svelte.config.js` options we have a useful [prerendering](https://kit.svelte.dev/docs#configuration-prerender) option with an `entries` parameter: an array of pages which we can inject via any content (in this case, asking the Github API)

