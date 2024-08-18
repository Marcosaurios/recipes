<script lang="ts">
	import type { Recipe } from '$types';
	import LandingPage from '$lib/components/templates/LandingPage.svelte';

	type DataResponse = {
		recipes: Array<Recipe>;
	};
	export let data: DataResponse;
</script>

<LandingPage recipes={data.recipes}></LandingPage>

<style lang="scss" scoped>
</style>
