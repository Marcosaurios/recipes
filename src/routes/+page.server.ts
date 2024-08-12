import { ALL_RECIPES } from "$lib/globals/defines";

export async function load() {
  return {
    recipes: ALL_RECIPES
  };
}
