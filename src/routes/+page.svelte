<script lang="ts">
	import type { Recipe } from '$types';
	import LandingPage from '$lib/components/templates/LandingPage.svelte';

	export let data: {
		recipes: Array<Recipe>;
		categories: Array<string>;
	};
</script>

<LandingPage recipes={data.recipes} categories={data.categories} />

<style lang="scss" scoped>
</style>
