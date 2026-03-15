import { redirect } from '@sveltejs/kit'
import { AVAILABLE_LOCALES } from '$lib/i18n'
import type { UILocales } from '../preBuild/types'

export const load = ({ request }) => {
	const lang = request.headers.get('accept-language')?.slice(0, 2) ?? 'es'
	const locale = AVAILABLE_LOCALES.includes(lang as UILocales) ? lang : 'es'
	redirect(302, `/${locale}`)
}
