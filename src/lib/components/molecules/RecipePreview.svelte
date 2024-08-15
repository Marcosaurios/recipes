<script lang="ts">
	import { t } from '$lib/i18n';

	import type { Recipe } from '../../../../types/index';
	export let recipe: Recipe;
</script>

<div class="RecipePreview">
	<a href="receta/{recipe.slug}" class="link" style:background-image={`url("${recipe.imageMain}")`}>
		<!-- title={$t('components.common.altText', { name: 'helo' })} -->
		<span class="title">
			{recipe.title}
		</span>
	</a>
</div>

<style lang="scss" scoped>
	@import '$lib/globals/variables.scss';

	.RecipePreview {
		border-radius: 10px;

		margin-bottom: 1rem;

		a.link {
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 10px;
			height: 140px;

			text-decoration: none;

			background-size: cover;
			background-position: center;

			filter: saturate(0.6);

			transition: all 0.3s ease-in-out;

			&:hover {
				filter: initial;
				transform: scale(1.05);
			}

			.title {
				font-size: 1.5rem;
				color: $fontColor;
			}
		}
	}
</style>
