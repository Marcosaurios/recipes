<script lang="ts">
	import { browser } from '$app/environment';
	import '$lib/i18n'; // Import to initialize. Important :)
	import { locale, waitLocale } from 'svelte-i18n';
	import type { LayoutData } from './$types';

	export const load: LayoutData = async () => {
		if (browser) {
			locale.set(window.navigator.language);
		}
		await waitLocale();
	};
</script>

<nav>
	<a href="/">Logo</a>
</nav>

<slot />

<style lang="scss">
	@import '../lib/globals/styles.scss';

	@include desktopView {
		:global(body) {
			background-color: red;
		}
	}
</style>
