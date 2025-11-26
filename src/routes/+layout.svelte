<script lang="ts">
	import { t } from '$lib/i18n'
	interface Props {
		children?: import('svelte').Snippet
	}

	let { children }: Props = $props()
</script>

<nav>
	<a href="/">Volver a inicio WIP</a>
	<h1>{$t('templates.landing.title')}</h1>
</nav>

<div>
	{@render children?.()}
</div>

<style lang="scss">
	@use '$lib/globals/styles.scss';

	// @include desktopView {
	// 	:global(body) {
	// 		background-color: red;
	// 	}
	// }
	div {
		padding: 0 1rem 1rem 1rem;
	}

	h1 {
		text-align: center;
	}
</style>
