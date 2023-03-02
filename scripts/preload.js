import { cwd } from "process";
import { createRequire } from "module";
import dotenv from "dotenv"
import {parse as ingredienteParse} from "ingrediente-parser"

import api from "../apis/contentful/index.js";

dotenv.config()
const VERBOSE = !!(process.env.VITE_VERBOSE_FETCH === 'true')
// Require hack to load dependency
const require = createRequire(import.meta.url);
const fs = require("fs-extra");

// Generated content
// TODO maybe write recipes per ingredient
const PATH_STATIC = "content";
const PATH_ALL_RECIPES = `${PATH_STATIC}/_recipes.json`;
const PATH_INGREDIENTS = `${PATH_STATIC}/_ingredients.json`;
const PATH_URLS = `${PATH_STATIC}/_urls.json`;
const PATH_RECIPES = `${PATH_STATIC}/recipes`;

const parser = {
  urls: [],
  ingredients: [],
  ingredientsCounter: [],

  init: () => {
    parser.urls = ["*"]
    parser.ingredients = []
    return parser
  },
  readUrl: (urlCMS)  => {
    const url = `/receta/${urlCMS}`;
    parser.urls.push(url);
    return url
  },
  readIngredients: (ingredientsCMS = []) => {
    if (!ingredientsCMS.length) return [];
    
    const toSearch = ingredientsCMS
      .map((_ingredient) => {
        const parsed = ingredienteParse(_ingredient)
        const ingredient = parsed.ingredient;
        if (!ingredient) return false;
        VERBOSE ? console.log("Ingredient: ", ingredient) : 0

        parser.ingredientsCounter[ingredient] = (parser.ingredientsCounter[ingredient]+1) || 1
        return ingredient;
      })
      .filter((x) => x != false);

      parser.ingredients.push(...toSearch)
    return toSearch;
  },
  parseRecipe: (_recipe) => {
    const url = parser.readUrl(_recipe.slug)
    const ing = parser.readIngredients(_recipe.ingredients);

    return {
      ..._recipe,
      url,
      searchableIngredients: ing,
    };
  }
}

/**
 * Fetch the content we need from CMS
 * before the compilation happens.
 *
 * This fetches EVERY dynamic URL that will be fetched inside our blog.
 * Let´s say, we are going to query "/ingredients/tomatoes", then Svelte will know the tag we want to query.
 * Also fetches the content.
 *
 * @returns Array<String>
 */
async function preload() {
  const _recipes = await api.getRecipes();
  VERBOSE ? console.log(_recipes) : 0
  const p = parser.init()

  const recipes = _recipes.map(p.parseRecipe);
  const ingredients = [...new Set(p.ingredients)];
  const urls = p.urls

  writter.writeAll(recipes, ingredients, urls)

  // CLI feedback
  VERBOSE ? console.log("-- Ingredients to search are: ", ingredients) : 0
  // console.log(ingredientsOrder);
  VERBOSE ? console.log("-- Fetched these pages: ", recipes) : 0;
}

const writter = {
  /**
   * Writes a JSON file in `path` with `data`
   * @param {String} path Where to store the `data`
   * @param data Data to store
   * @returns
   */
  write: async (path, data) => {
    fs.outputFile(path, JSON.stringify(data), (err) =>
      err ? console.log("Error stringifying ", err) : 0
    );
  },
  writeAll: (recipes, ingredients, urls) => {
    writter.write(`${cwd()}/${PATH_ALL_RECIPES}`, recipes);
    writter.write(`${cwd()}/${PATH_INGREDIENTS}`, ingredients);
    writter.write(`${cwd()}/${PATH_URLS}`, urls);
    recipes.forEach(r => writter.write(`${cwd()}/${PATH_RECIPES}/${r.slug}.json`, r));
  }
}

preload();
