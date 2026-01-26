<script lang="ts">
	import CategoryPage from '$lib/components/templates/RecipesCategory.svelte'
	import type { PageData } from './$types'

	interface Props {
		data: PageData
	}

	let { data }: Props = $props()
</script>

<CategoryPage items={data.recipes} category={data.category} />
