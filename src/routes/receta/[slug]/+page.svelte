<script lang="ts">
	import RecipePage from '$lib/components/templates/RecipePage.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<RecipePage recipe={data} />
