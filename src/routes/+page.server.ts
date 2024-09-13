import { ALL_RECIPES as recipes } from "$lib/globals/defines";
import { RECIPES_BY_CATEGORY as categoriesRecipes } from "$lib/globals/defines";

export async function load() {
  return {
    recipes,
    categories: Object.keys(categoriesRecipes)
  }
}
