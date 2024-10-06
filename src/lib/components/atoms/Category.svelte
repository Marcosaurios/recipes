<script lang="ts">
	import type { Category } from '$types';

	export let category: Category;
</script>

<a href={category.url} class="item">
	{`${category.name}`.toUpperCase()}
</a>

<style lang="scss">
	@import '$lib/globals/variables.scss';
	@import '$lib/globals/styles.scss';

	.item {
		display: flex;
		align-items: center;
		justify-content: center;

		max-width: 100px;
		padding: 2rem;

		border: 1px solid white;
		border-radius: 10px;

		text-decoration: none;
		color: $fontColor;
		@include darken;

		transition: filter 200ms linear;

		&:hover {
			@include undarken;
		}
	}
</style>
