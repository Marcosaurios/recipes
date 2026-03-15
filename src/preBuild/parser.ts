import type { Entry } from 'contentful'
import type { ImageCMS, Recipe, TypeRecetaSkeleton, Category } from '$types'
import type { CMSLanguages, UILocales } from './types'
import { cmsLangToUILang } from './types'

const routeSegments: Record<UILocales, { recipe: string; category: string }> = {
	es: { recipe: 'receta', category: 'categoria' },
	en: { recipe: 'recipe', category: 'category' }
}

const linkBuilderFor = (locale: UILocales) => ({
	recipe: (slug: string) => `/${locale}/${routeSegments[locale].recipe}/${slug}`,
	category: (categoryName: string) => `/${locale}/${routeSegments[locale].category}/${categoryName}`
})

export type Parser = {
	byCategories: Record<string, Recipe[]>
	byRecipe: Record<string, Recipe>
	allRecipes: Recipe[]
	categories: Category[]

	process: (_items: Entry<TypeRecetaSkeleton, undefined, string>[], _locale: CMSLanguages) => void
	processRecipe: (_r: Entry<TypeRecetaSkeleton, undefined, string>) => void
}

function createParser(): Parser {
	const parser: Parser = {
		byCategories: {},
		byRecipe: {},
		allRecipes: [],
		categories: [],

		process(items, cmsLocale) {
			const locale = cmsLangToUILang(cmsLocale)
			items.forEach((r) => parser.processRecipe(r))
			parser.allRecipes.sort(sortByCreatedAt)
			parser.categories = Object.keys(parser.byCategories).map((c) => ({
				name: c,
				url: linkBuilderFor(locale).category(c)
			}))
		},

		processRecipe(r) {
			const newRecipe = parseRecipe(r)
			parser.allRecipes.push(newRecipe)
			newRecipe.category.forEach((category) =>
				Array.isArray(parser.byCategories[category])
					? parser.byCategories[category].push(newRecipe)
					: (parser.byCategories[category] = [newRecipe])
			)
			parser.byRecipe[newRecipe.slug] = newRecipe
		}
	}
	return parser
}

function parseRecipe(r: Entry<TypeRecetaSkeleton, undefined, string>): Recipe {
	const { updatedAt, createdAt, locale } = r.sys
	const lang = cmsLangToUILang(locale as CMSLanguages)
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
		url: linkBuilderFor(lang).recipe(r.fields.slug),
		images,
		imageMain,
		createdAt,
		updatedAt
	}
}

function sortByCreatedAt(recipeA: Recipe, recipeB: Recipe) {
	const dateA = new Date(recipeA.createdAt).getTime()
	const dateB = new Date(recipeB.createdAt).getTime()
	if (dateA < dateB || dateA == dateB) {
		return -1
	}
	return 1
}

export default createParser
