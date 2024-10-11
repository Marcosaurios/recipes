<script lang="ts">
	import { t } from '$lib/i18n';
	import type { Recipe } from '$types';
	import { ListRecipePreview } from '../molecules';

	export let items: Recipe[];
	export let category: string;
</script>

<h2>{[$t('templates.category.title'), category].join(' ')}</h2>

<ListRecipePreview {items} />

<style>
	/* your styles go here */
</style>
