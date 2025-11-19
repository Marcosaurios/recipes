<script lang="ts">
	import SolidStar from '~icons/fa-solid/star';
	import OutlineStar from '~icons/fa-regular/star';

	interface Props {
		filled: number;
		total?: number;
	}

	let { filled, total = 5 }: Props = $props();
	const stars = new Array(total);
</script>

{#each stars as _, i}
	{#if i < filled}
		<SolidStar></SolidStar>
	{:else}
		<OutlineStar></OutlineStar>
	{/if}
{/each}
