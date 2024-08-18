<script lang="ts">
	import RecipePage from '$lib/components/templates/RecipePage.svelte';
	import type { PageData } from './$types';

	/**
	 * It's the recipe page. Only takes data (from +page.server.ts) and
	 * displays it as html
	 */
	export let data: PageData;
</script>

<RecipePage recipe={data} />
