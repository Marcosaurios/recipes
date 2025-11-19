<script lang="ts">
	import { t } from '$lib/i18n';
	import type { Recipe } from '$types';
	import { parseMd } from '../atoms/markdown';

	interface Props {
		recipe: Recipe;
	}

	let { recipe }: Props = $props();
</script>

<h1>{recipe.title}</h1>
<hr />

<h2>{$t('components.recipe.ingredients')}</h2>
<div class="ingredients">
	{#each recipe.ingredients as ingredient, i}
		<div>
			<input type="checkbox" id="ingredient{i}" />
			<label for="ingredient{i}">{ingredient}</label>
		</div>
	{/each}
</div>

<h2>{$t('components.recipe.description')}</h2>
<div class="md">
	{@html parseMd(recipe.description)}
</div>

<!-- TODO style checkbox -->

<style lang="scss">
	@import '$lib/globals/styles.scss';

	.ingredients {
		display: flex;
		flex-direction: column;
		input:checked + label {
			text-decoration: line-through;
			@include darken;
		}
	}

	.md {
		:global(p) {
			text-align: justify;
			word-spacing: -1px;
		}
	}
</style>
