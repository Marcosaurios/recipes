import { RECIPES_BY_CATEGORY } from "$lib/globals/defines";
import type { PageServerLoad } from "./$types";
import type { Recipe } from "$types";

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad<{ recipes: Recipe[], category: string }> = async ({ params }) => {
  return {
    recipes: RECIPES_BY_CATEGORY[params.slug],
    category: params.slug
  }
}