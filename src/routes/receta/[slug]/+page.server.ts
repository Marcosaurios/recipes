import {getRecipe} from "$lib/server/api"
import { json } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

/**
 * Run in the server. It's the way to fetch each recipe in this case.
 */
// export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async ({ params, fetch }) => {
  const recipe = await getRecipe({ slug: params.slug})//.then(x => console.log('receta.page.servver', x))

  
  console.log('receta.page.server',recipe)
  return recipe
  // if (!recipe) {
  //   console.log('not found')
  //   return {} //throw error(404, 'Not found');
  // }


  // return recipe
}