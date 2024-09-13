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
    parser.process(res.items)

    return parser
  } catch (e) {
    console.error("Error fetching data from contentful", e)
  }
}
