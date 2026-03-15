import { categoryLoader } from '$lib/server/loaders'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = ({ params }) => categoryLoader(params.locale, params.slug)
