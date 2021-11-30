import recipes from "../../content/_recipes.json";

export function get() {
  return {
    body: JSON.stringify(recipes),
  };
}
