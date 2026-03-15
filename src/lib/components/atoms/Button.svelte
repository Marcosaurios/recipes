<script lang="ts">
	import type { HTMLButtonAttributes, HTMLAnchorAttributes, ClassValue } from 'svelte/elements'

	interface Props extends HTMLButtonAttributes, HTMLAnchorAttributes {
		label?: string
		content?: any
		class?: ClassValue
	}
	let { href, label, content, class: className, ...rest }: Props = $props()

	const component = $derived(href ? 'a' : 'button')
</script>

<svelte:element this={component} {href} class={['Button', className]} {...rest}>
	{#if content}
		{@render content()}
	{/if}
	{#if label}
		<span class="label">
			{label}
		</span>
	{/if}
</svelte:element>

<style lang="scss">
	@use '$lib/globals/styles';

	.Button {
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: center;
		align-items: center;
		gap: 3px;

		cursor: pointer;
		padding: 1em;

		// Reset
		text-decoration: none;
		color: styles.$fontColor;

		background-color: unset;
		border: none;

		width: unset;
		height: unset;
		font-size: styles.$fontSize;
	}

	.label {
		align-content: center;
	}
</style>
