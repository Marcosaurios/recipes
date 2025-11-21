import type { Entry } from "contentful";
import type { ImageCMS, Recipe, TypeRecetaSkeleton, Category } from "$types";

export type Parser = {
  process: (_i: Entry<TypeRecetaSkeleton, undefined, string>[]) => void,

  byCategories: Record<string, Recipe[]>,
  byRecipe: Record<string, Recipe>,
  recipes: Recipe[],
  categories: Category[],

  recipe: (_r: Entry<TypeRecetaSkeleton, undefined, string>) => void
}

export const parser: Parser = {
  byCategories: {},
  byRecipe: {},
  recipes: [],
  categories: [],

  process: (items) => {

    items.map(parser.recipe)

    parser.recipes.sort(sortByCreatedAt)
    parser.categories = Object.keys(parser.byCategories)
      .map(c => ({ name: c, url: linkBuilderFor.category(c) }))
  },
  recipe: (r) => {
    const newRecipe = parseRecipe(r)
    parser.recipes.push(newRecipe)

    newRecipe.category.forEach(category => Array.isArray(parser.byCategories[category])
      ? parser.byCategories[category].push(newRecipe)
      : parser.byCategories[category] = [newRecipe]
    )
    parser.byRecipe[newRecipe.slug] = newRecipe
  }
}

// Generates the links used by this app
const linkBuilderFor = {
  recipe: (slug: string) => `/receta/${slug}`,
  category: (categoryName: string) => `/categoria/${categoryName}`
}


// Formatter to convert a Receta from the CMS to a Recipe 
function parseRecipe(r: Entry<TypeRecetaSkeleton, undefined, string>): Recipe {
  const { updatedAt, createdAt } = r.sys;
  const extractCloudinaryImageURL = (img: ImageCMS): string => img.original_secure_url

  let images: string[] = []
  if (Array.isArray(r.fields.images)) {
    images = (r.fields.images as ImageCMS[]).map(extractCloudinaryImageURL)
  }

  let imageMain: string = ''
  if (Array.isArray(r.fields.imageMain)) {
    imageMain = extractCloudinaryImageURL(r.fields.imageMain[0] as ImageCMS)
  }

  return {
    ...r.fields,
    url: linkBuilderFor.recipe(r.fields.slug),
    images,
    imageMain,
    createdAt,
    updatedAt,
  }
}

function sortByCreatedAt(recipeA: Recipe, recipeB: Recipe) {
  const dateA = new Date(recipeA.createdAt).getTime()
  const dateB = new Date(recipeB.createdAt).getTime()
  // A is lower than B if dates are lower
  if (dateA < dateB || dateA == dateB) {
    return -1
  }
  return 1
}

export default parser