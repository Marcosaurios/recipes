<script lang="ts">
	import SolidStar from '~icons/fa-solid/star';
	import OutlineStar from '~icons/fa-regular/star';

	export let filled;
	export let total = 5;
	const stars = new Array(total);
</script>

{#each stars as _, i}
	{#if i < filled}
		<SolidStar></SolidStar>
	{:else}
		<OutlineStar></OutlineStar>
	{/if}
{/each}
