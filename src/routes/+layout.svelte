<script>
	import { t } from '$lib/i18n';
</script>

<nav>
	<a href="/">Volver a inicio WIP</a>
	<h1>{$t('templates.landing.title')}</h1>
</nav>

<div>
	<slot />
</div>

<style lang="scss">
	@import '$lib/globals/styles.scss';

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
