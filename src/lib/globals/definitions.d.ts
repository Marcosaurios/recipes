// Global definitions for typing statically replaced variables on build time.
declare const __ALL_RECIPES__: import('$types').Recipe[]
declare const __RECIPE_BY_SLUG__: Record<string, import('$types').Recipe>
declare const __RECIPES_BY_CATEGORY__: Record<string, import('$types').Recipe[]>
declare const __CATEGORIES__: Array<import('$types').Category>

import('unplugin-icons/types/svelte')
/// <reference types="unplugin-icons/types/svelte" />

// svelte-carousel typings
declare module 'svelte-carousel'
