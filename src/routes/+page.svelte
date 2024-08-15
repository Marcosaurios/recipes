<script lang="ts">
	import { t } from '$lib/i18n';

	import type { Recipe } from '../../types/index';
	import LandingPage from '$lib/components/templates/LandingPage.svelte';

	type DataResponse = {
		recipes: Array<Recipe>;
	};
	export let data: DataResponse;
</script>

<h1>{$t('views.landing.title')}</h1>

<LandingPage recipes={data.recipes}></LandingPage>

<style lang="scss" scoped>
</style>
