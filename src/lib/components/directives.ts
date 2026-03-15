import type { Action } from 'svelte/action'

// Bound to onoutclick event via use:outclick
export const outclick: Action<
	HTMLInputElement,
	undefined,
	{
		onclickoutside: () => void
	}
> = (node) => {
	const handleClick = (event: MouseEvent) => {
		if (!node.contains(event.target as Node)) {
			node.dispatchEvent(new CustomEvent('clickoutside'))
		}
	}

	document.addEventListener('click', handleClick, true)

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true)
		}
	}
}
