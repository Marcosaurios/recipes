<script lang="ts">
	import Navbar from '$lib/components/organisms/Navbar.svelte'
	import Categories from '$lib/components/molecules/Categories.svelte'
	import SearchList from '$lib/components/organisms/SearchList.svelte'
	import { store } from '$lib/store/state.svelte'
	import type { LayoutProps } from './$types'
	import { getCategoryFromURL } from '$lib/globals/urlParameters'
	import type { UILocales } from '../../preBuild/types'

	let { children, data }: LayoutProps = $props()

	let selectedCategory: string = $derived(getCategoryFromURL(data.url, data.locale as UILocales))
	const onRecipeOpened = () => {
		store.showSearchResults = false
	}
</script>

<Navbar />
<main>
	<Categories categories={data.categories} active={selectedCategory} />
	{#if store.showSearchResults}
		<SearchList recipes={data.recipes} {onRecipeOpened} />
	{:else}
		{@render children?.()}
	{/if}
</main>

<style lang="scss" scoped>
	@use '$lib/globals/styles';

	main {
		padding: 4rem 1rem 5rem 1rem;

		@include styles.desktopView() {
			padding: 0 1rem 1rem 1rem;
		}
	}
</style>
