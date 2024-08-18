<script>
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';

	export let config = {
		arrows: false,
		infinite: true,
		initialPageIndex: 0,
		duration: 700,
		autoplay: true,
		autoplayDuration: 6000,
		autoplayDirection: 'next',
		pauseOnFocus: true,
		autoplayProgressVisible: true,
		dots: false
	};
</script>

{#if browser}
	<Carousel {...config}>
		<slot></slot>
	</Carousel>
{/if}
