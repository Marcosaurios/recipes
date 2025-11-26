<script lang="ts">
	import { t } from '$lib/i18n'

	import type { Recipe, Category as TCategory } from '$types'
	import { Slideshow, Category } from '../atoms'
	import { RecipePreview } from '../molecules'
	import SearchList from '../organisms/SearchList.svelte'

	interface Props {
		recipes: Recipe[]
		categories: TCategory[]
	}

	let { recipes, categories }: Props = $props()

	let slideshowItems = recipes.slice(0, 3)
</script>

<SearchList {recipes}>
	{#snippet emptyState()}
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
	{/snippet}
</SearchList>

<style lang="scss">
	@use '$lib/globals/vars.scss';
	@use '$lib/globals/styles.scss';
	p {
		@include styles.darken;
	}

	.categories {
		display: flex;
		gap: 10px;
	}
</style>
