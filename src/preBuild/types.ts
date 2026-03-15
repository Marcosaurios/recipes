export type CMSLanguages = 'es-ES' | 'en-EU'
export type UILocales = 'es' | 'en'

export const languageMap: Record<CMSLanguages, UILocales> = {
	'es-ES': 'es',
	'en-EU': 'en'
}

export const cmsLangToUILang = (cmsLang: CMSLanguages) =>
	languageMap[cmsLang] || languageMap['es-ES']
