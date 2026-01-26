<script lang="ts">
	import { store } from '$lib/store/state.svelte'
	import SearchList from '$lib/components/organisms/SearchList.svelte'
	import Categories from '$lib/components/molecules/Categories.svelte'

	const { recipes, categories } = $props()
	const isSearching = $derived(store.searchTerm.length)
</script>

{#if !isSearching}
	<Categories {categories} />
{:else}
	<SearchList {recipes} />
{/if}
