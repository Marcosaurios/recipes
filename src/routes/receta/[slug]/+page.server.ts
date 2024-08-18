import type { PageServerLoad } from "./$types";
import { ALL_RECIPES_BY_SLUG } from "$lib/globals/defines";

/**
 * Runs in the server. It's the way to fetch each recipe in this case.
 */

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async ({ params }) => {
  return ALL_RECIPES_BY_SLUG[params.slug]
}