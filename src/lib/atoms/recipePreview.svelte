<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { Recipe } from '../../../types/index';
	export let recipe: Recipe;
	export let type: string;

	let name = recipe.title;
</script>

<div class="recipe">
	<a href="receta/{recipe.slug}" class="link">
		<span
			>{recipe.title}
			<img
				class="previewImg"
				src={recipe.imageMain}
				alt={$_('imageAlt', { values: { name: 'namer' } })}
			/>
		</span></a
	>
</div>

<style lang="scss" scoped>
	.recipe {
		background-color: #6d91ba;
		border-radius: 10px;

		margin-bottom: 1rem;
		transition: background-color cubic-bezier(0.075, 0.82, 0.165, 1) 2s;

		&:hover {
			background-color: #172433;
		}

		a.link {
			display: block;
			padding: 1.5rem;
			text-decoration: none;
			transition: color cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;

			&:hover {
				color: white;
			}
		}
	}
</style>
