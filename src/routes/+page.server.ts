import { ALL_RECIPES as recipes } from "$lib/globals/defines";
import { CATEGORIES as categories } from "$lib/globals/defines";

export async function load() {
  return {
    recipes,
    categories
  }
}
