import { RECIPE_BY_SLUG } from "$lib/globals/defines";
import type { PageServerLoad } from "./$types";
import type { Recipe } from "$types";

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad<Recipe> = async ({ params }) => {
  return RECIPE_BY_SLUG[params.slug]
}