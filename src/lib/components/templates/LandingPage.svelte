<script lang="ts">
	import { t } from '$lib/i18n';

	import type { Recipe } from '$types';
	import { Slideshow, ItemsGrid } from '../atoms';
	import { RecipePreview } from '../molecules';
	import SearchList from '../organisms/SearchList.svelte';

	export let recipes: Recipe[];
	export let categories: string[];

	let slideshowItems = recipes.slice(0, 1);
</script>

<SearchList {recipes}>
	<svelte:fragment slot="emptyState">
		<p>{$t('templates.landing.lastRecipe')}</p>
		<Slideshow>
			{#each slideshowItems as recipe}
				<RecipePreview {recipe} />
			{/each}
		</Slideshow>

		<p>{$t('templates.landing.categories')}</p>
		<ItemsGrid items={categories} />
	</svelte:fragment>
</SearchList>

<style lang="scss">
	p {
		// text-align: center;
	}
</style>
