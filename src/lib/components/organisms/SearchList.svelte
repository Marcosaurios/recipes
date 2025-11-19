<script lang="ts">
	import { t } from '$lib/i18n';
	import type { Recipe } from '$types';
	import InputBox from '../atoms/InputBox.svelte';
	import ListRecipePreview from '../molecules/ListRecipePreview.svelte';

	interface Props {
		recipes?: Recipe[];
		emptyState?: import('svelte').Snippet;
		noResultsState?: import('svelte').Snippet;
	}

	let { recipes = [], emptyState, noResultsState }: Props = $props();

	let searchTerm: string = $state('');
	let searchResults: Recipe[] = $state([]);

	let hasSearchterm = $derived(searchTerm !== '');

	$effect(() => {
		searchResults = hasSearchterm
			? recipes.filter((r) => r.title.toLowerCase().includes(searchTerm.toLowerCase()))
			: recipes;
	});
	let hasResults = $derived(searchResults.length > 0);
</script>

<div class="content">
	<InputBox bind:value={searchTerm} />
</div>

{#if !hasSearchterm}
	{#if emptyState}{@render emptyState()}{:else}
		<p>This is the empty state</p>
	{/if}
{:else if hasResults}
	<ListRecipePreview items={searchResults} />
{:else if noResultsState}{@render noResultsState()}{:else}
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
