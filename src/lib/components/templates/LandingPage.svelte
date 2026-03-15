<script lang="ts">
	import RecipePreview from '../molecules/RecipePreview.svelte'
	import type { Recipe } from '$types'
	import { t } from '$lib/i18n'

	interface Props {
		recipes: Recipe[]
	}
	const { recipes }: Props = $props()
	const lastRecipe = $derived(recipes[recipes.length - 1])
</script>

<div>{$t('components.templates.landingPage.lastRecipes')}</div>
<RecipePreview recipe={lastRecipe} type="expanded" />
