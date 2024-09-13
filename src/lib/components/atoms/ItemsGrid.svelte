<script lang="ts">
	export let items: any[];
</script>

<div class="grid">
	{#each items as item}
		<div class="item">
			{item}
		</div>
	{/each}
</div>

<style lang="scss">
	.grid {
		display: flex;
		gap: 10px;

		width: 100%;
		height: 100%;

		flex-wrap: wrap;

		.item {
			margin: 2rem;
		}
	}
</style>
