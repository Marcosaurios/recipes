<script lang="ts">
	import type { Recipe } from '../../../../types';
	import SearchList from '../organisms/SearchList.svelte';

	export let recipes: Recipe[];
</script>

<SearchList {recipes}>
	<svelte:fragment slot="noResultsState">There are no results here :(</svelte:fragment>
	<svelte:fragment slot="emptyState">Initial state</svelte:fragment>
</SearchList>
