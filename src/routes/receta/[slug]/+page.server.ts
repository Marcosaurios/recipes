import type { PageServerLoad } from "./$types";

/**
 * Run in the server. It's the way to fetch each recipe in this case.
 */
export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async ({ params, fetch }) => {
  console.log(params)
  const recipe = await fetch(`/content/recipes/${params.slug}`)

  console.log(recipe)

  if (!recipe) {
    console.log('not found')
    return {} //throw error(404, 'Not found');
  }


  return j
}