<script lang="ts">
	import CategoryPage from '$lib/components/templates/CategoryPage.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<CategoryPage items={data.recipes} category={data.category}/>
