<script lang="ts">
	import type { Recipe } from '$types';
	import RecipeView from '../molecules/Recipe.svelte';

	export let recipe: Recipe;
</script>

<RecipeView {recipe} />
