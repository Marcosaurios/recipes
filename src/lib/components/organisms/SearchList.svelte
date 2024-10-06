<script lang="ts">
	import { t } from '$lib/i18n';
	import type { Recipe } from '$types';
	import InputBox from '../atoms/InputBox.svelte';
	import ListRecipePreview from '../molecules/ListRecipePreview.svelte';

	export let recipes: Recipe[] = [];

	let searchTerm: string = '';
	let searchResults: Recipe[] = [];

	$: hasSearchterm = searchTerm !== '';

	$: searchResults = hasSearchterm
		? recipes.filter((r) => r.title.toLowerCase().includes(searchTerm.toLowerCase()))
		: recipes;
	$: hasResults = searchResults.length > 0;
</script>

<div class="content">
	<InputBox bind:value={searchTerm} />
</div>

{#if !hasSearchterm}
	<slot name="emptyState">
		<p>This is the empty state</p>
	</slot>
{:else if hasResults}
	<ListRecipePreview items={searchResults} />
{:else}
	<slot name="noResultsState">
		<p>{$t('components.searchList.noResults')}</p>
	</slot>
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
