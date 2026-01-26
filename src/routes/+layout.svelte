<script lang="ts">
	import Navbar from '$lib/components/molecules/Navbar.svelte'
	// import { searchTermSS } from '$lib/store/state.svelte'
	interface Props {
		children?: import('svelte').Snippet
	}

	let { children }: Props = $props()
</script>

<Navbar />
<main>
	{@render children?.()}
</main>

<style lang="scss" scoped>
	main {
		padding: 0 1rem 1rem 1rem;
	}
</style>
