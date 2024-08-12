import type { PageServerLoad } from "./$types";

/**
 * Runs in the server. It's the way to fetch each recipe in this case.
 */

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async ({ params }) => {
  return __ALL_FETCHED_RECIPES_BY_SLUG__[params.slug]
}