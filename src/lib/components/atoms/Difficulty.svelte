<script lang="ts">
	import Star from '~icons/fa7-solid/star'

	interface Props {
		filled: number
		total?: number
	}

	let { filled, total = 5 }: Props = $props()
	const stars = new Array(total)
</script>

{#each stars as _, i}
	{#if i < filled}
		<Star />
	{:else}
		TODO!! style the Star to outline
		<Star />
	{/if}
{/each}
