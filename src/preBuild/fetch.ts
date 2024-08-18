import contentful from "contentful"
import dotenv from "dotenv"

import parser, { type Parser } from "./parser"
import type { Recipe, TypeRecetaSkeleton } from "$types";

// CMS client init
dotenv.config();
const space = process.env.VITE_CONTENTFUL_SPACE || '';
const accessToken = process.env.VITE_CONTENTFUL_DELIVERY_API_TOKEN || '';

const api = contentful.createClient({ space, accessToken })

export async function getAllRecipes(): Promise<Parser | undefined> {
  try {
    const res = await api.getEntries<TypeRecetaSkeleton>({ content_type: 'receta', include: 5 });

    res.items.map(parser.recipe)
    parser.recipes.sort(sortByCreatedAt)
    return parser
  } catch (e) {
    console.error("Error fetching data from contentful", e)
  }
}

const sortByCreatedAt = (recipeA: Recipe, recipeB: Recipe) => {
  const dateA = new Date(recipeA.createdAt).getTime()
  const dateB = new Date(recipeB.createdAt).getTime()
  // A is lower than B if dates are lower
  if (dateA < dateB || dateA == dateB) {
    return -1
  }
  return 1
}
