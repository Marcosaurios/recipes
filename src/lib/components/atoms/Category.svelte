<script lang="ts">
	import type { Category } from '$types'

	interface Props {
		category: Category
		isSelected: boolean
	}

	let { category, isSelected }: Props = $props()
</script>

<a
	href={category.url}
	class={['item', isSelected && 'isSelected']}
>
	{`${category.name}`.toUpperCase()}
</a>

<style lang="scss">
	@use '$lib/globals/vars.scss';
	@use '$lib/globals/styles.scss';

	.item {
		display: flex;
		align-items: center;
		justify-content: center;

		padding: 0.25rem 1rem;

		border: 1px solid white;
		border-radius: 10px;

		text-decoration: none;
		color: vars.$fontColor;
		@include styles.darken;

		transition: filter 200ms linear;

		&:hover {
			@include styles.undarken;
		}

		&.isSelected {
			// filter: invert(100%);
			background-color: vars.$fontColor;
			color: vars.$bgColor;
		}
	}
</style>
