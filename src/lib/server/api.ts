import dotenv from "dotenv";
import contentful from "contentful"

import parser from "./parser.js"
import mockedApi from './__mocks__/contentfulApi.js'
import type { Recipe } from "../../types/Recipe.js";
import { ContentModels } from "../../types/Models.js";


// CMS client init
dotenv.config();
const space = process.env.VITE_CONTENTFUL_SPACE;
const accessToken = process.env.VITE_CONTENTFUL_CD_API;
// const isProd = space && accessToken

const api = contentful.createClient({ space, accessToken })



export async function getRecipe({ slug }: Partial<Recipe>): Promise<Recipe | undefined> {
  try {
    const res = await api.getEntries({ content_type: ContentModels.Receta, 'fields.slug': slug });
    console.log('previous to parse:')
    console.log(res)
    const p = res.items.map(parser.recipe);
    console.log('post parsed', p)
    return p[0]
  } catch (e) {
    console.error("Error fetching data from contentful", e)
  }
}

export async function getAllRecipes(): Promise<Recipe[] | undefined> {
  try {
    const res = await api.getEntries({ content_type: ContentModels.Receta });
    return res.items.map(parser.recipe);
  } catch (e) {
    console.error("Error fetching data from contentful", e)
  }
}


// TODO sorting
// const sortByCreated = (recipeA: Recipe, recipeB: Recipe) => {
//   const dateA = new Date(recipeA.created)
//   const dateB = new Date(recipeB.created)
//   if (dateA.a)
// }
