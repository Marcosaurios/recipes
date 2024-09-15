<script lang="ts">
	import RecipePage from '$lib/components/templates/RecipePage.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<RecipePage recipe={data} />
