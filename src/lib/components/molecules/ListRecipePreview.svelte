<script lang="ts">
	import type { Recipe } from '../../../../types';
	import RecipePreview from './RecipePreview.svelte';

	export let items: Recipe[];
</script>

<ul class="recipes">
	{#each items as recipe}
		<li>
			<RecipePreview {recipe} />
		</li>
	{/each}
</ul>

<style lang="scss">
	ul {
		list-style: none;

		margin: inherit;
		padding: inherit;
	}

	li {
		list-style: none;
	}
</style>
