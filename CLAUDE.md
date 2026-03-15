# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build (fetches Contentful data at build time)
npm run preview      # Preview production build
npm run check        # TypeScript + Svelte type checking
npm run lint         # Prettier + ESLint checks
npm run format       # Auto-format with Prettier
npm run test         # Run tests with Vitest
npm run cf-export-types  # Regenerate types from Contentful schema (requires .env)
```

## Architecture

This is a **static recipe site** built with SvelteKit. Recipes are fetched from **Contentful CMS at build time**, processed into indexed data structures, and injected as global constants via Vite's `define` option — so there are no runtime API calls.

### Build-time data pipeline

1. `vite.config.ts` calls `getAllRecipes(locale)` from `src/preBuild/fetch.ts` **once per locale** (`es-ES`, `en-EU`) during build
2. `src/preBuild/parser.ts` is a factory (`createParser()`) that transforms CMS data into three structures per locale:
   - `allRecipes` — array sorted by creation date
   - `byRecipe` — object keyed by slug for O(1) lookup
   - `byCategories` — object keyed by category for filtered views
3. Vite injects a single `__RECIPES__` constant: `Record<'es' | 'en', LocaleData>`
4. `src/lib/globals/defines.ts` exports `RECIPES`; `definitions.d.ts` provides the TypeScript types
5. `src/preBuild/types.ts` defines the language type mappings: `CMSLanguages` (`es-ES`, `en-EU`) ↔ `UILocales` (`es`, `en`)

When the Contentful schema changes, run `npm run cf-export-types` to regenerate `src/types/generated/`.

### Routing (bilingual, locale-prefixed)

All routes live under a `[locale]` dynamic segment. Route segment names are localised per language:

```
src/routes/
  +page.server.ts              → redirects / to /es or /en (Accept-Language detection)
  +error.svelte                → global error page
  [locale]/
    +layout.ts                 → validates locale, loads translations + RECIPES[locale] data
    +layout.svelte             → Navbar, Categories, SearchList (search results overlay)
    +page.svelte               → landing page
    receta/[slug]/             → Spanish recipe detail
    recipe/[slug]/             → English recipe detail
    categoria/[slug]/          → Spanish category list
    category/[slug]/           → English category list
```

The `receta`/`recipe` and `categoria`/`category` route pairs share the same logic via `src/lib/server/loaders.ts` (`recipeLoader`, `categoryLoader`) — each route file is a thin wrapper. The parser builds locale-correct URLs using a `routeSegments` map.

Invalid locales (e.g. `/fr`) are redirected to the default locale by `[locale]/+layout.ts`.

### Language switching

`navigateToLocale(targetLocale)` in `src/lib/i18n/index.ts` handles cross-locale navigation. It maps the current page to its equivalent in the target locale:
- **Landing** — swaps the locale segment
- **Recipe pages** — matches by index in `allRecipes` (safe because both locales sort by `createdAt`, which is locale-independent in Contentful)
- **Category pages** — matches by index in `categories`

The Navbar renders a `LanguageDropdown` component (declarative, toggled by state) that calls `navigateToLocale` on selection.

### Component structure (Atomic Design)

Components live in `src/lib/components/` organized as:
- `atoms/` — basic UI elements (InputBox, Button, Category, Difficulty, Slideshow, LanguageDropdown)
- `molecules/` — combinations of atoms (Recipe, RecipePreview, RecipePreviewList, Categories)
- `organisms/` — stateful sections that interact with global state (Navbar, SearchList)
- `templates/` — page-level templates (LandingPage, RecipesCategory)

### Styling

Global SCSS in `src/lib/globals/styles.scss` and `vars.scss`. Component-scoped styles use `<style lang="scss">` blocks.

### i18n

Bilingual (`es`, `en`) managed by `sveltekit-i18n`. Translation files are in `src/lib/i18n/locales/{es,en}/`. UI strings use `$t('key')` — components need no changes when adding translations. Available locales and the default are exported from `src/lib/i18n/index.ts`.

### Icons

Icons come from FontAwesome Solid via `unplugin-icons`. Import as `~icons/fa7-solid/<icon-name>`.
