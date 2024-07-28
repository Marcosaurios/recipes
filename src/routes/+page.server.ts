import { getAllRecipes } from "$lib/server/api"

export const prerender = true

export async function load() {
  return {
    recipes: await getAllRecipes()
  };
}
