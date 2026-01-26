<script lang="ts">
	import { t } from '$lib/i18n'
	import { onMount } from 'svelte'

	interface Props {
		value: string
		placeholder?: string
	}

	let { value = $bindable() } = $props()
</script>

<div class="InputBox">
	<input type="text" bind:value />
</div>

<style lang="scss">
	@use '$lib/globals/styles.scss';
	@use '$lib/globals/vars.scss';

	$border: 2px;

	.InputBox {
		width: 100%;
		position: relative;
		margin: 4px;

		input {
			font-family: vars.$font;
			font-style: italic;

			width: calc(100% - $border * 2);
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

			border: $border solid vars.$fontColor;
			color: vars.$bgColor;

			background: linear-gradient(to left, transparent 50%, vars.$fontColor 50%) right;
			background-size: 210%;
			transition: 0.15s cubic-bezier(0.165, 0.84, 0.44, 1);
			&:focus {
				background-position: left;
			}
			:not(&:focus) {
				color: vars.$fontColor;
			}

			&:hover ~ .placeholder {
				filter: brightness(0.9);
			}
		}
	}
</style>
