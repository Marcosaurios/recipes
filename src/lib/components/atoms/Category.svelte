<script lang="ts">
	import type { Category } from '$types'

	interface Props {
		category: Category
	}

	let { category }: Props = $props()
</script>

<a href={category.url} class="item">
	{`${category.name}`.toUpperCase()}
</a>

<style lang="scss">
	@use '$lib/globals/vars.scss';
	@use '$lib/globals/styles.scss';

	.item {
		display: flex;
		align-items: center;
		justify-content: center;

		max-width: 100px;
		padding: 2rem;

		border: 1px solid white;
		border-radius: 10px;

		text-decoration: none;
		color: vars.$fontColor;
		@include styles.darken;

		transition: filter 200ms linear;

		&:hover {
			@include styles.undarken;
		}
	}
</style>
