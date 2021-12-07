////////////////////////////////////
////////////// CMS /////////////////
////////////////////////////////////

// DONE fetch all content
// TODO author

// TODO porque cojones no van las rutas

import contentful from "contentful";
import dotenv, { parse } from "dotenv";
import { parser } from "./markdown.js";
dotenv.config();

// CMS client init
const space = process.env.VITE_CONTENTFUL_SPACE;
const accessToken = process.env.VITE_CONTENTFUL_CD_API;
const c = contentful.createClient({
  space,
  accessToken,
});

// CMS typings
const RECIPES_CONTENT_TYPE = "receta";

export default {
  async getRecipes() {
    const res = await c.getEntries({ content_type: RECIPES_CONTENT_TYPE });
    const recipes = res.items.map(parseRecipes);
    return recipes;
  },
  async offlineRecipes() {
    // TODO fake response
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

  let slug = field.slug;
  // if (e.sys.contentType.sys.id == RECIPES_CONTENT_TYPE) {
  //   slug = `/${RECIPES_CONTENT_TYPE}/${field.slug}`;
  // }

  const recipe = {
    title: field.titulo,
    body: field.descripcion,
    ingredients: field.ingredientes,
    slug,
    created,
    updated,
  };

  console.log("Fetched recipe ", recipe);

  return recipe;
}
