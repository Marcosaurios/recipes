<script lang="ts">
	import type { PageData } from './$types';

	/**
	 * It's the recipe page. Only takes data (from +page.server.ts) and
	 * displays it as html
	 */

	/** @type {import('./$types').PageData} */
	export let data: PageData;
</script>

<h2>{data.title}</h2>
<h2>{data.description}</h2>

<div></div>
