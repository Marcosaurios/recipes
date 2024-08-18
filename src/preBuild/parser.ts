import type { Entry } from "contentful";
import type { ImageCMS, Recipe, TypeRecetaSkeleton } from "$types";

export type Parser = {
  byCategories: Record<string, Recipe[]>,
  bySlug: Record<string, Recipe>,
  recipes: Recipe[],
  recipe: (_r: Entry<TypeRecetaSkeleton, undefined, string>) => void
}

export const parser: Parser = {
  byCategories: {},
  bySlug: {},
  recipes: [],
  recipe: (r) => {
    const parsed = parseRecipe(r)

    parsed.category.forEach((cat) => {
      if (Array.isArray(parser.byCategories[cat])) {
        parser.byCategories[cat].push(parsed)
      }
      parser.byCategories[cat] = [parsed]
    })
    parser.bySlug[parsed.slug] = parsed
    parser.recipes.push(parsed)
  }
}

// Formatter to convert a Receta from the CMS to a Recipe 
function parseRecipe(r: Entry<TypeRecetaSkeleton, undefined, string>): Recipe {
  const { updatedAt, createdAt } = r.sys;

  let images: string[] = []
  if (Array.isArray(r.fields.images)) {
    images = (r.fields.images as ImageCMS[]).map(extractCloudinaryImageURL)
  }

  let imageMain: string = ''
  if (Array.isArray(r.fields.imageMain)) {
    imageMain = extractCloudinaryImageURL((r.fields.imageMain as ImageCMS[])[0])
  }

  return {
    ...r.fields,
    images,
    imageMain,
    createdAt,
    updatedAt,
  }
}

const extractCloudinaryImageURL = (img: ImageCMS): string => img.original_secure_url

export default parser