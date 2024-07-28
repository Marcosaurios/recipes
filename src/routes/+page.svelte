<script lang="ts">
	import type { Recipe } from '../types/Recipe';
	import RecipePreview from '$lib/atoms/recipe-preview.svelte';
	import Ingredient from '$lib/atoms/ingredient.svelte';
	import Searchbox from '$lib/atoms/searchbox.svelte';

	type DataResponse = {
		recipes: Array<Recipe>;
		ingredients: Array<String>;
	};

	export let data: DataResponse;

	let searchTerm: string = '';
</script>

<h1>Recetario</h1>

<Searchbox bind:value={searchTerm} placeholder="Buscar una receta o ingrediente" />

<ul class="recipes">
	{#each data.recipes as r, index}
		<li>
			<RecipePreview recipe={r} type={index === 0 ? 'large' : 'standard'} />
		</li>
	{/each}
</ul>

<style lang="scss" scoped>
	ul {
		list-style: none;

		margin: inherit;
		padding: inherit;
	}

	.ingredients {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
