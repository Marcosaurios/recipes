<script lang="ts">
	import { t } from '$lib/i18n';
	import { onMount } from 'svelte';

	export let value: string;
	export let placeholder: string = $t('components.inputBox.placeholder');

	let inputEl: HTMLInputElement;

	onMount(() => (inputEl.value = value));
</script>

<div class="Searchbox">
	<input type="text" on:input={() => (value = inputEl.value)} bind:this={inputEl} />
	<!-- svelte-ignore a11y-label-has-associated-control -->
	{#if !value}
		<label class="placeholder">{placeholder}</label>
	{/if}
</div>

<style lang="scss">
	@import '$lib/globals/styles.scss';
	@import '$lib/globals/variables.scss';

	.Searchbox {
		position: relative;

		// Both should share the exact same shape
		input,
		.placeholder {
			font-family: $font;
			font-style: italic;

			width: 100%;
			height: 2rem;
			padding: 0;

			border-radius: 20px;
			background-color: transparent;

			font-size: 1rem;
			text-indent: 16px;

			transition: 0.3s ease-in-out;

			// CSS reset
			outline: none;
		}

		input {
			z-index: 1;
			margin: 0 auto;

			border: 2px solid $fontColor;
			color: $bgColor;

			background: linear-gradient(to left, transparent 50%, $fontColor 50%) right;
			background-size: 210%;
			transition: 0.15s cubic-bezier(0.165, 0.84, 0.44, 1);
			&:focus {
				background-position: left;
			}
			:not(&:focus) {
				color: $fontColor;
			}

			&:hover ~ .placeholder {
				filter: brightness(0.9);
			}
		}

		.placeholder {
			position: absolute;
			display: flex;
			align-items: center;
			z-index: -1;
			width: fit-content;
			border: 2px solid transparent;

			top: 0;
			left: 0;
			color: $fontColor;
			@include darken;
		}
	}
</style>
