import recipes from "../../content/_recipes.json";
import ingredients from "../../content/_ingredients.json";

export const prerender = true

export function load() {
  return {
      recipes,
      ingredients
  };
}
