<script lang="ts">
	import { parseMd } from '$lib/components/atoms/markdown';
	import type { PageData } from './$types';

	/**
	 * It's the recipe page. Only takes data (from +page.server.ts) and
	 * displays it as html
	 */

	export let data: PageData;
</script>

<h2>{data.title}</h2>
<h2>{@html parseMd(data.description)}</h2>

<div></div>
