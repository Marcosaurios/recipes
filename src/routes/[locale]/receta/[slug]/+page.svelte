<script lang="ts">
	import Recipe from '$lib/components/molecules/Recipe.svelte'
	import type { PageProps } from './$types'

	let { data }: PageProps = $props()
</script>

<Recipe recipe={data} />
