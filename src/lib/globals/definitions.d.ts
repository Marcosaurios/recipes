import type { UILocales } from '../../preBuild/types'

// Global definitions for typing statically replaced variables on build time.
type LocaleData = {
	allRecipes: import('$types').Recipe[]
	bySlug: Record<string, import('$types').Recipe>
	byCategory: Record<string, import('$types').Recipe[]>
	categories: import('$types').Category[]
}
declare const __RECIPES__: Record<UILocales, LocaleData>

import('unplugin-icons/types/svelte')
/// <reference types="unplugin-icons/types/svelte" />

// svelte-carousel typings
declare module 'svelte-carousel'
