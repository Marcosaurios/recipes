<script lang="ts">
	import type { PageProps } from './$types'
	import LandingPage from '$lib/components/templates/LandingPage.svelte'

	let { data }: PageProps = $props()
</script>

<LandingPage recipes={data.recipes} />
