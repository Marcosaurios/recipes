<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements'
	import { outclick } from '../directives'

	interface Props extends HTMLInputAttributes {
		value?: string
		onclickoutside?: () => void
	}

	let { value = $bindable(''), onclickoutside, ...rest }: Props = $props()
</script>

<div class="InputBox">
	<input type="text" bind:value {...rest} use:outclick {onclickoutside} />
</div>

<style lang="scss">
	@use '$lib/globals/styles.scss';
	@use '$lib/globals/vars.scss';

	$border: 2px;
	.InputBox {
		box-sizing: border-box;
		position: relative;
		padding: 4px;

		input {
			box-sizing: border-box;
			width: 100%;
			height: 2rem;
			border-radius: 20px;

			font-family: vars.$font;
			font-style: italic;
			font-size: 1rem;
			text-indent: 16px;
			// CSS reset
			outline: none;

			border: $border solid vars.$fontColor;

			background: linear-gradient(to left, transparent 50%, vars.$fontColor 50%) right;
			background-size: 210%;
			background-color: transparent;
			transition: 0.15s cubic-bezier(0.165, 0.84, 0.44, 1);
			&:focus {
				background-position: left;
			}
			:not(&:focus) {
				color: vars.$fontColor;
			}
		}
	}
</style>
