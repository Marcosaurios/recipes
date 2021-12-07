import recipes from "../../content/_recipes.json";
import ingredients from "../../content/_ingredients.json";

export function get() {
  return {
    body: {
      recipes,
      ingredients,
    },
  };
}
