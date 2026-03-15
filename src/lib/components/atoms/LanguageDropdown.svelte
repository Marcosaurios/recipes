<script lang="ts">
	import { onMount } from 'svelte'

	interface Props {
		languages: string[]
		currentLocale: string
		onselect: (locale: string) => void
		onclose: () => void
	}

	let { languages, currentLocale, onselect, onclose }: Props = $props()
	let dropdown: HTMLElement

	onMount(() => {
		const timer = setTimeout(() => {
			document.addEventListener('click', handleClickOutside, true)
		}, 0)
		return () => {
			clearTimeout(timer)
			document.removeEventListener('click', handleClickOutside, true)
		}
	})

	function handleClickOutside(e: MouseEvent) {
		if (dropdown && !dropdown.contains(e.target as Node)) {
			onclose()
		}
	}
</script>

<div class="dropdown" bind:this={dropdown}>
	{#each languages as lang}
		<button class:active={lang === currentLocale} onclick={() => onselect(lang)}>
			{lang.toUpperCase()}
		</button>
	{/each}
</div>

<style lang="scss">
	@use '$lib/globals/vars';

	.dropdown {
		position: absolute;
		bottom: 100%;
		left: 50%;
		transform: translateX(-50%);
		z-index: 200;

		display: flex;
		flex-direction: column;
		border-radius: 8px;
		overflow: hidden;
		border: 1px solid rgba(vars.$fontColor, 0.2);
		background-color: vars.$bgColor;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
	}

	button {
		padding: 0.5rem 1.5rem;
		border: none;
		background: transparent;
		color: vars.$fontColor;
		font-family: vars.$font;
		font-size: 0.9rem;
		cursor: pointer;
		transition: background-color 0.1s ease;

		&:hover {
			background-color: rgba(vars.$fontColor, 0.1);
		}

		&.active {
			background-color: rgba(vars.$fontColor, 0.15);
			font-weight: 700;
		}
	}
</style>
