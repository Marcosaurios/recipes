<script lang="ts">
	import type { Recipe } from '../../../../types';
	import InputBox from '../atoms/InputBox.svelte';
	import ListRecipePreview from '../molecules/ListRecipePreview.svelte';

	export let recipes: Recipe[] = [];

	let searchTerm: string = '';
	let searchResults: Recipe[] = [];

	$: hasSearchterm = searchTerm !== '';
	$: console.log(hasSearchterm);

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
		<p>No Results state</p>
	</slot>
{/if}

<style lang="scss">
	.content {
		display: block;
		margin: 0 auto;
		width: 75%;
	}
</style>
