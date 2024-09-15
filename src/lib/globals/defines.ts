/**
 * Global exports to use the replaced static variables (__WHATEVER__) into variables already containing its value and its type.
 * In that way, every "static replacements" happen only in this file.
 */
export const ALL_RECIPES = __ALL_RECIPES__
export const RECIPE_BY_SLUG = __RECIPE_BY_SLUG__
export const RECIPES_BY_CATEGORY = __RECIPES_BY_CATEGORY__
export const CATEGORIES = __CATEGORIES__