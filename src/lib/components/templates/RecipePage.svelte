<script lang="ts">
	import type { Recipe } from '$types';
	import RecipeView from '../molecules/Recipe.svelte';

	interface Props {
		recipe: Recipe;
	}

	let { recipe }: Props = $props();
</script>

<RecipeView {recipe} />
