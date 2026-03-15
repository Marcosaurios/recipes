import { recipeLoader } from '$lib/server/loaders'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = ({ params }) => recipeLoader(params.locale, params.slug)
