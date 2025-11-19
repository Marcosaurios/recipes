<script lang="ts">
	import type { Category, Recipe } from '$types';
	import LandingPage from '$lib/components/templates/LandingPage.svelte';

	interface Props {
		data: {
		recipes: Array<Recipe>;
		categories: Array<Category>;
	};
	}

	let { data }: Props = $props();
</script>

<LandingPage recipes={data.recipes} categories={data.categories} />

<style lang="scss" scoped>
</style>
