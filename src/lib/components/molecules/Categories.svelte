<script lang="ts">
	import Category from '../atoms/Category.svelte'
	import type { Category as ICategory } from '$types'

	const {
		categories,
		active
	}: {
		categories: ICategory[]
		active: string
	} = $props()
</script>

<ul class="Categories">
	{#each categories as category}
		<li>
			<Category {category} isSelected={active.includes(category.name)} />
		</li>
	{/each}
</ul>

<style lang="scss">
	.Categories {
		list-style: none;
		display: flex;
		gap: 10px;
		padding: 1rem;

		overflow-x: scroll;
		overflow-y: hidden;
	}
</style>
