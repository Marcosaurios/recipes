<script lang="ts">
	import type { Recipe } from '$types';
	import RecipePreview from './RecipePreview.svelte';

	interface Props {
		items: Recipe[];
	}

	let { items }: Props = $props();
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
		margin: 1rem 0;
	}

	li:last-child {
		margin-bottom: 0;
	}
</style>
