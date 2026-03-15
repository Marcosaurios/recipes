import { createClient, type Locale } from 'contentful'
import dotenv from 'dotenv'

import createParser, { type Parser } from './parser'
import type { TypeRecetaSkeleton } from '$types'
import type { CMSLanguages } from './types'

// CMS client init
dotenv.config()
const space = process.env.VITE_CONTENTFUL_SPACE || ''
const accessToken = process.env.VITE_CONTENTFUL_DELIVERY_API_TOKEN || ''

const api = createClient({ space, accessToken })

export async function getAllRecipes(locale: CMSLanguages): Promise<Parser> {
	try {
		const res = await api.getEntries<TypeRecetaSkeleton>({
			content_type: 'receta',
			locale,
			include: 5
		})
		const parser = createParser()
		parser.process(res.items, locale)
		return parser
	} catch (e) {
		console.error(`Error fetching data from contentful for locale '${locale}'`, e)
		return createParser()
	}
}
