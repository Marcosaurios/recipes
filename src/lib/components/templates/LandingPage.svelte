<script lang="ts">
	import { t } from '$lib/i18n';

	import type { Recipe } from '$types';
	import Slideshow from '../atoms/Slideshow.svelte';
	import RecipePreview from '../molecules/RecipePreview.svelte';
	import SearchList from '../organisms/SearchList.svelte';

	export let recipes: Recipe[];

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
	</svelte:fragment>
</SearchList>

<style lang="scss">
	p {
		// text-align: center;
	}
</style>
