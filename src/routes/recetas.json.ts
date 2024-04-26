// import recipes from "../../content/recipes.json";
// import ingredients from "../../content/_ingredients.json";

import { cwd } from "process";

// Require hack to load fs-extra dep
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require("fs-extra");

export async function get() {
  return {
    body: {
      recipes: await fs.readJson(`${cwd()}/content/recipes.json`),
      ingredients: await fs.readJson(`${cwd()}/content/_ingredients.json`),
    },
  };
}
