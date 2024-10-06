<script lang="ts">
	import type { Recipe } from '$types';
	import { ListRecipePreview } from '../molecules';

	export let items: Recipe[];
</script>

<ListRecipePreview {items} />

<style>
	/* your styles go here */
</style>
