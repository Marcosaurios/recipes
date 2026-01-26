<script lang="ts">
	// deprecated
	import { t } from '$lib/i18n'
	import { store } from '$lib/store/state.svelte'
	import type { Recipe } from '$types'
	import RecipePreviewList from '../molecules/RecipePreviewList.svelte'

	interface Props {
		recipes: Recipe[]
	}

	let { recipes = [] }: Props = $props()

	const results = $derived(
		recipes.filter((r) => r.title.toLowerCase().includes(store.searchTerm.toLowerCase()))
	)
	const hasResults = $derived(results.length > 0)
</script>

{#if hasResults}
	<RecipePreviewList items={results} />
{:else}
	<p>{$t('components.searchList.noResults')}</p>
{/if}

<style lang="scss">
	.content {
		display: block;
		margin: 0 auto;
		width: 75%;
	}

	p {
		text-align: center;
		margin: 3rem;
	}
</style>
