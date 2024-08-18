<script lang="ts">
	import SolidStar from '~icons/fa-solid/star';
	import OutlineStar from '~icons/fa-regular/star';

	export let filled;
	export let total = 5;
	const items = new Array(total);
</script>

{#each items as _, i}
	{#if i < filled}
		<SolidStar></SolidStar>
	{:else}
		<OutlineStar></OutlineStar>
	{/if}
{/each}
