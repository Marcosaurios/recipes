////////////////////////////////////
////////////// CMS /////////////////
////////////////////////////////////

// TODO author

import { createClient } from "contentful";
import { config } from "dotenv";
config();
import type { Recipe } from "types/Recipe";

const VERBOSE = process.env.VITE_FETCH_VERBOSE === "true";

// CMS client init
const API_SPACE = process.env.VITE_CONTENTFUL_SPACE;
const API_ACCESSTOKEN = process.env.VITE_CONTENTFUL_CD_API;
const API = createClient({
  space: API_SPACE,
  accessToken: API_ACCESSTOKEN,
});
// CMS typings
const API_CONTENT_TYPE = "receta";

export default {
  async getRecipes() {
    const res = await API.getEntries({ content_type: API_CONTENT_TYPE });
    const recipes = res.items.map(parseRecipes);
    return recipes;
  },
  async offlineRecipes() {
    return {
      sys: { type: "Array" },
      total: 2,
      skip: 0,
      limit: 100,
      items: [
        {
          sys: {
            space: { sys: [Object] },
            id: "5diOxDue4H7RBThkaUOsib",
            type: "Entry",
            createdAt: "2021-11-30T23:58:28.764Z",
            updatedAt: "2021-12-02T00:47:59.287Z",
            environment: { sys: [Object] },
            revision: 2,
            contentType: { sys: [Object] },
            locale: "es-ES",
          },
          fields: {
            titulo: "Tortilla francesa",
            ingredientes: [
              "12 huevos por persona",
              "2 lonchas de jamon york",
              "sal",
              "aceite",
            ],
            descripcion:
              "## Francesa\n" +
              "\n" +
              "Pues mucho mas simple\n" +
              "1. fdas\n" +
              "2. fdafds\n" +
              "3. fdas\n" +
              "4. *fdsafd*\n",
            slug: "tortilla-francesa",
          },
        },
      ],
    };
  },
};

/**
 * Parse response from CMS to our Recipe DTO
 *
 * @returns Recipe
 */
function parseRecipes(e) {
  const field = e.fields;
  const updated = e.sys.updatedAt;
  const created = e.sys.createdAt;

  const slug = e.fields.slug;
  const url = `receta/${slug}`;
  // if (e.sys.contentType.sys.id == RECIPES_CONTENT_TYPE) {
  //   slug = `/${RECIPES_CONTENT_TYPE}/${field.slug}`;
  // }
  console.log("fetched this");
  console.log(e);

  const recipe: Recipe = {
    title: field.titulo,
    body: field.descripcion,
    ingredients: field.ingredientes,
    minutes: field.minutes,
    difficult: field.difficult,
    slug,
    url,
    created,
    updated,
  };

  VERBOSE ? console.log("Fetched recipe ", recipe) : 0;

  return recipe;
}
