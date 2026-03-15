<script lang="ts">
	import CategoryPage from '$lib/components/templates/RecipesCategory.svelte'
	import type { PageProps } from './$types'

	let { data }: PageProps = $props()
</script>

<CategoryPage items={data.recipes} category={data.category} />
