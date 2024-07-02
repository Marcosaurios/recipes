import { cwd } from "process";
import dotenv from "dotenv"
import {parse as ingredienteParse} from "ingrediente-parser"
import api from "../apis/contentful/index.js";
import writter from './writter.js'

dotenv.config()
const VERBOSE = !!(process.env.VITE_VERBOSE_FETCH === 'true')

// Generated content
// TODO maybe write recipes per ingredient
const PATH_STATIC = "src/static/cms";
const PATH_ALL_RECIPES = `${PATH_STATIC}/allRecipes.json`;
// const PATH_INGREDIENTS = `${PATH_STATIC}/_ingredients.json`;
const PATH_URLS = `${PATH_STATIC}/allUrls.json`;
const PATH_RECIPES = `${PATH_STATIC}/recipes`;

const parser = {
  urls: [],
  // ingredients: [],
  // ingredientsCounter: [],

  init: () => {
    parser.urls = ["*"]
    // parser.ingredients = []
    return parser
  },
  readUrl: (urlCMS)  => {
    const url = `/receta/${urlCMS}`;
    parser.urls.push(url);
    return url
  },
  // readIngredients: (ingredientsCMS = []) => {
  //   if (!ingredientsCMS.length) return [];
    
  //   const toSearch = ingredientsCMS
  //     .map((_ingredient) => {
  //       const parsed = ingredienteParse(_ingredient)
  //       const ingredient = parsed.ingredient;
  //       if (!ingredient) return false;
  //       log(`Ingredient:  ${ingredient}`)

  //       parser.ingredientsCounter[ingredient] = (parser.ingredientsCounter[ingredient]+1) || 1
  //       return ingredient;
  //     })
  //     .filter((x) => x != false);

  //     parser.ingredients.push(...toSearch)
  //   return toSearch;
  // },
  parseRecipe: (_recipe) => {
    const url = parser.readUrl(_recipe.slug)
    // const ing = parser.readIngredients(_recipe.ingredients);

    return {
      ..._recipe,
      url,
      // searchableIngredients: ing,
    };
  }
}

/**
 * Fetch the content we need from CMS
 * before the Svelte compilation happens.
 *
 * This fetches EVERY dynamic URL that will be fetched inside our blog.
 * Let´s say, we are going to query "/ingredients/tomatoes", then Svelte will know the tag we want to query.
 * Also fetches the content.
 *
 * @returns Array<String>
 */
async function preload() {
  const _recipes = await api.getRecipes();
  log(_recipes)
  const p = parser.init()

  const recipes = _recipes.map(p.parseRecipe);
  const ingredients = [...new Set(p.ingredients)];
  const urls = p.urls


  writter.write(`${cwd()}/${PATH_ALL_RECIPES}`, recipes);
  // writter.write(`${cwd()}/${PATH_INGREDIENTS}`, ingredients);
  writter.write(`${cwd()}/${PATH_URLS}`, urls);
  recipes.forEach(r => writter.write(`${cwd()}/${PATH_RECIPES}/${r.slug}.json`, r));
  

  // CLI feedback
  // log(`"-- Ingredients to search are: ${ingredients}`)
  // console.log(ingredientsOrder);
  log(`-- Fetched these pages:  ${recipes.map(r => r.url)}`)
}

const log = (payload) => VERBOSE ? console.log(payload) : 0

const delta0 = performance.now()
preload();
const delta1 = performance.now()

log(`= Fetching and generating content took ${delta1-delta0} ms`)
