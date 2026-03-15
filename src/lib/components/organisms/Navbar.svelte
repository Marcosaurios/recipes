<script lang="ts">
	import { type Component } from 'svelte'
	import { t, navigateToLocale, AVAILABLE_LOCALES, DEFAULT_LOCALE } from '$lib/i18n'
	import { store } from '$lib/store/state.svelte'
	import SearchIcon from '~icons/fa7-solid/magnifying-glass?raw'
	import InputBox from '$lib/components/atoms/InputBox.svelte'
	import Button from '../atoms/Button.svelte'
	import LanguageDropdown from '../atoms/LanguageDropdown.svelte'
	import type { UILocales } from '../../../preBuild/types'

	import House from '~icons/fa7-solid/house?raw'
	import Users from '~icons/fa7-solid/users?raw'
	import Language from '~icons/fa7-solid/language?raw'

	interface Section {
		title: string
		icon: Component<any>
		href?: string
		callback?: () => void
	}

	interface Props {
		locale: string
	}

	let { locale }: Props = $props()
	const currentLocale = $derived(locale as UILocales)

	// Search

	// For mobile we show/hide the searchbar based on user touching the icon or not
	let searchBarEnabled = $state(false)
	function triggerSearchbar() {
		searchBarEnabled = !searchBarEnabled
	}

	$effect(() => {
		store.showSearchResults = store.searchTerm.length > 0
	})

	const onclickoutside = () => {
		searchBarEnabled = false
	}

	// Language dropdown
	let languageDropdownOpen = $state(false)
	function toggleLanguageDropdown() {
		languageDropdownOpen = !languageDropdownOpen
	}

	const i18n_sections_key = 'components.navbar.sections'
	const sections: Section[] = [
		{
			title: 'home',
			icon: House,
			href: '/'
		},
		{
			title: 'about',
			icon: Users,
			href: '/about'
		},
		{
			title: 'language',
			icon: Language,
			callback: toggleLanguageDropdown
		},
		{
			title: 'search',
			icon: SearchIcon,
			callback: triggerSearchbar
		}
	]
</script>

<nav>
	<a class="title" href="/">
		<h1>{$t('components.navbar.title')}</h1>
	</a>
	<div class="sections">
		{#each sections as { href, title, icon, callback }}
			{#if title === 'language'}
				<span class="languageWrapper">
					{#if languageDropdownOpen}
						<LanguageDropdown
							languages={[...AVAILABLE_LOCALES]}
							{currentLocale}
							onselect={(locale) => {
								languageDropdownOpen = false
								navigateToLocale(locale as UILocales)
							}}
							onclose={() => (languageDropdownOpen = false)}
						/>
					{/if}
					<Button label={$t(`${i18n_sections_key}.${title}`)} class={[title]} onclick={callback}>
						{#snippet content()}
							<span class="icon">
								{@html icon}
							</span>
						{/snippet}
					</Button>
				</span>
			{:else}
				<Button
					{href}
					label={$t(`${i18n_sections_key}.${title}`)}
					class={[title]}
					onclick={callback}
				>
					{#snippet content()}
						<span class="icon">
							{@html icon}
						</span>
					{/snippet}
				</Button>
			{/if}
		{/each}

		<span class={['item', 'desktopSearch', searchBarEnabled ? 'enabled' : '']}>
			<InputBox bind:value={store.searchTerm} {onclickoutside}></InputBox>
		</span>
	</div>
</nav>

<style lang="scss" scoped>
	@use '$lib/globals/styles';

	nav {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 100;
	}

	.title {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 100;
		background-color: styles.$bgColor;
		text-decoration: none;
		color: styles.$fontColor;
	}

	.sections {
		width: 100%;

		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		background-color: styles.$bgColor;
	}

	.languageWrapper {
		position: relative;
	}

	h1 {
		text-align: center;
		margin: 0;
		padding: 1rem;
	}

	.desktopSearch {
		position: absolute;
		bottom: 100%;
		width: 100%;
		height: 50px;

		transition: clip-path ease-in-out 0.2s;
		will-change: clip-path;
		clip-path: inset(100% 0 0 0);

		&.enabled {
			clip-path: inset(0 0 0 0);
		}
	}

	@include styles.desktopView() {
		nav {
			position: relative;
			bottom: auto;
			left: auto;
			display: flex;
			height: fit-content;
		}

		.title {
			position: relative;
			top: auto;
			left: auto;
			width: auto;
			background-color: transparent;
			flex: 1;
		}

		.sections {
			flex: 1;
			position: relative;
			align-items: center;
			flex-wrap: nowrap;
			gap: 10px;
		}

		// Override globally otherwise the icons won't grab the styling
		:global(nav .sections .Button .icon),
		:global(nav .sections .Button.search) {
			display: none;
		}

		.desktopSearch,
		.desktopSearch.enabled {
			position: relative;
			bottom: initial;
			transform: none;
			order: initial;
			clip-path: inset(0 0 0 0);
		}
	}
</style>
