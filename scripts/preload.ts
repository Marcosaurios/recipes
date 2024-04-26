import { cwd } from "process";
import { config } from "dotenv";
config();

import api from "./contentfulApi";
import { parse } from "ingrediente-parser";
import fs from "fs-extra";

// ----- CONSTANTS ------
const VERBOSE = process.env.VITE_FETCH_VERBOSE === "true";
const PATH_STATIC = "content";
const PATH_ALL_RECIPES = `${PATH_STATIC}/_recipes.json`;
const PATH_INGREDIENTS = `${PATH_STATIC}/_ingredients.json`;
const PATH_URLS = `${PATH_STATIC}/_urls.json`;
const PATH_RECIPES = `${PATH_STATIC}/recipes`;

const ingredientsOrder = {};

/**
 * Fetch the content we need from CMS
 * before the compilation happens.
 *
 * This creates EVERY dynamic URL that will be fetched inside our blog.
 * Let´s say, we are going to query "/recetas/tortilla-patatas", then Svelte will know the tag we want to query.
 * Also fetches the content.
 *
 * @returns Array<String>
 */
async function preload() {
  const urls = ["*"];
  const _ingredients = [];
  const _recipes = await api.getRecipes();

  // final recipes object
  const recipes = _recipes.map((_recipe) => {
    // save urls
    const url = `/receta/${_recipe.slug}`;
    urls.push(url);

    // make ingredients searchable
    const ing = searchableIngredients(_recipe.ingredients);
    _ingredients.push(...ing);
    // save ingredients in recipe
    const recipe = {
      ..._recipe,
      url,
      searchableIngredients: ing,
    };

    // STORE Individual recipes
    write(`${cwd()}/${PATH_RECIPES}/${recipe.slug}.json`, recipe);

    return recipe;
  });

  // Unique ingredients list
  const ingredients = [...new Set(_ingredients)];

  write(`${cwd()}/${PATH_ALL_RECIPES}`, recipes);
  write(`${cwd()}/${PATH_INGREDIENTS}`, ingredients);
  write(`${cwd()}/${PATH_URLS}`, urls);

  // CLI feedback
  console.log("-- Ingredients to search are: ", ingredients);
  console.log(ingredientsOrder);
  console.log("-- Fetched these pages: ", recipes);
}

/**
 * Writes a JSON file in `path` with `data`
 * @param {String} path Where to store the `data`
 * @param data Data to store
 * @returns
 */
const write = (path, data) =>
  fs.outputFile(path, JSON.stringify(data), (err) =>
    err ? console.log("Error stringifying ", err) : 0
  );

/**
 * Sanitizes the ingredients from the CMS and creates single ingredients
 * @param {Array} ingredients
 * @returns {Array}
 */
function searchableIngredients(ingredients) {
  // Old ingredients parser
  // const regex = RegExp(/\b[^\d\W](?<=[^de]).+/, "i");

  if (!ingredients.length) return [];

  const toSearch = ingredients
    .map((e) => {
      let parsed = parse(e);
      if (!parsed) return false;

      let ingredient = parsed.ingredient;
      VERBOSE ? console.log("---- Parsing:", e, "->", ingredient) : 0;

      countIngredient(ingredient);
      return ingredient;
    })
    .filter((x) => x != false);
  // cleaned unprocessable ingredients

  return toSearch;
}

/**
 * Helper function to store the amount each ingredient appears,
 * so we can sort them by their usage.
 * @param {String} ingredient
 */
function countIngredient(ingredient) {
  let count = ingredientsOrder[ingredient];
  if (!count) {
    ingredientsOrder[ingredient] = 0;
  }

  ingredientsOrder[ingredient]++;
}

preload();
