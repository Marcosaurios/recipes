<script lang="ts">
	import { t } from '$lib/i18n';

	import type { Recipe, Category as TCategory } from '$types';
	import { Slideshow, Category } from '../atoms';
	import { RecipePreview } from '../molecules';
	import SearchList from '../organisms/SearchList.svelte';

	export let recipes: Recipe[];
	export let categories: TCategory[];

	let slideshowItems = recipes.slice(0, 3);
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

		<div class="categories">
			{#each categories as category}
				<Category {category} />
			{/each}
		</div>
	</svelte:fragment>
</SearchList>

<style lang="scss">
	@import '$lib/globals/variables.scss';
	@import '$lib/globals/styles.scss';
	p {
		@include darken;
	}

	.categories {
		display: flex;
		gap: 10px;
	}
</style>
