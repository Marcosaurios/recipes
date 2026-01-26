<script lang="ts">
	import Category from '../atoms/Category.svelte'
	import type { Category as ICategory } from '$types'

	const { categories }: { categories: ICategory[] } = $props()
</script>

<ul class="Categories">
	{#each categories as category}
		<li>
			<Category {category}></Category>
		</li>
	{/each}
</ul>

<style lang="scss">
	ul.Categories {
	}
</style>
