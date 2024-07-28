<script lang="ts">
	import { onMount } from 'svelte';

	export let value: string;
	export let placeholder: string = 'Buscar contenido...';

	let inputEl: HTMLInputElement;

	onMount(() => (inputEl.value = value));
</script>

<input
	type="text"
	class="search"
	{placeholder}
	on:input={() => (value = inputEl.value)}
	bind:this={inputEl}
/>

<style lang="scss">
	input {
		border: none;

		margin: 5px;
		padding: 5px 10px;

		border-radius: 20px;
		background-color: red;
	}
</style>
