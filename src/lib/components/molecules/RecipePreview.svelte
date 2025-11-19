<script lang="ts">
	import type { Recipe } from '$types';
	import { formatDuration } from '$lib/components/utils';
	import Clock from '~icons/fa-solid/clock';

	interface Props {
		type?: 'small' | 'expanded';
		recipe: Recipe;
	}

	let { type = 'small', recipe }: Props = $props();

	let expanded = $derived(type === 'expanded');
</script>

<div class="RecipePreview">
	<a
		href={recipe.url}
		class="link"
		class:expanded
		style:background-image={`url("${recipe.imageMain}")`}
	>
		<span class="title" class:expanded>
			{recipe.title}
		</span>

		<span class="extra" class:expanded>
			<Clock />
			<span>
				{recipe.minutes && formatDuration(recipe.minutes)}
			</span>
		</span>
	</a>
</div>

<style lang="scss" scoped>
	@import '$lib/globals/variables.scss';

	.RecipePreview {
		border-radius: 10px;

		a.link {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			border-radius: 10px;
			height: 140px;

			text-decoration: none;

			background-size: cover;
			background-position: center;

			filter: saturate(0.8);

			transition: all 0.3s ease-in-out;

			&:hover {
				filter: initial;
				transform: scale(1.05);
			}

			&.expanded {
				align-items: flex-start;
				justify-content: flex-start;
				height: 16rem;
			}

			.title {
				font-size: 1.5rem;
				color: $fontColor;
				flex-grow: 1;
				padding-left: 1rem;
				// TODO add text a11y

				&.expanded {
					padding: 1rem;
				}
			}

			.extra {
				display: flex;
				align-items: center;

				width: 8rem;
				color: $fontColor;
				filter: grayscale(0.3);

				span {
					margin-left: 5px;
				}
			}
		}
	}
</style>
