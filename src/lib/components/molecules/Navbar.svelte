<script lang="ts">
	import type { Component } from 'svelte'
	import { t } from '$lib/i18n'
	import { store } from '$lib/store/state.svelte'
	import House from '~icons/fa7-solid/house'
	import Users from '~icons/fa7-solid/users'
	import SearchIcon from '~icons/fa7-solid/magnifying-glass'
	import InputBox from '$lib/components/atoms/InputBox.svelte'

	interface Section {
		title: string
		icon: Component<any>
		url: string
	}

	const sections: Section[] = [
		{
			title: 'home',
			icon: House,
			url: '/'
		},
		{
			title: 'about',
			icon: Users,
			url: '/about'
		}
	]

	const i18n_sections_key = 'components.navbar.sections'

	// For mobile we show/hide the searchbar based on user touching the icon or not
	let searchBarEnabled = false
	function triggerSearchbar() {
		searchBarEnabled = !searchBarEnabled
	}
</script>

{#snippet item(section: Section)}
	<a href={section.url} class="item">
		<section.icon></section.icon>
		<span class="title">
			{$t(`${i18n_sections_key}.${section.title}`)}
		</span>
	</a>
{/snippet}

<nav>
	<a class="title" href="/">
		<h1>{$t('components.navbar.title')}</h1>
	</a>
	<div class="sections">
		{#each sections as section}
			{@render item(section)}
		{/each}
		<span class={['item', 'desktopSearch', searchBarEnabled ? 'enabled' : '']}>
			<InputBox bind:value={store.searchTerm}></InputBox>
		</span>
		<span onclick={() => triggerSearchbar()} class={['item', 'mobileSearch']}>
			<SearchIcon />
			<span class="title">
				{$t(`${i18n_sections_key}.search`)}
			</span>
		</span>
	</div>
</nav>

<style lang="scss" scoped>
	@use '$lib/globals/styles';

	$searchHeight: 60px;

	.title {
		align-content: center;
	}

	.sections {
		position: absolute;
		bottom: 0;
		width: 100%;
		// height: 60px;

		// Because the searchbar will appear from outside the .sections to within it,
		// we need to make space for it in the shape of padding (in mobile view only).
		// padding-top: $searchHeight;
		// overflow: hidden;

		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.item {
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: center;
		align-items: center;
		gap: 3px;

		text-decoration: none;
		color: styles.$fontColor;
	}

	h1 {
		text-align: center;
		margin: 0;
		padding: 1rem;
	}

	.desktopSearch {
		order: -1;
		width: 100%;
		height: $searchHeight;

		transition: clip-path ease-in-out 0.2s;
		will-change: clip-path;
		clip-path: inset(100% 0 0 0);

		&.enabled {
			clip-path: inset(0 0 0 0);
		}
	}

	@include styles.desktopView() {
		nav {
			display: flex;
			height: fit-content;
		}

		.item.search {
			flex: 5;
		}

		.title,
		.sections {
			flex: 1;
		}

		.sections {
			position: relative;
			gap: 10px;
			flex-wrap: nowrap;
		}

		// Override globally otherwise the icons won't grab the styling
		:global(nav .sections .item .icon) {
			display: none;
		}

		.desktopSearch,
		.desktopSearch.enabled {
			position: relative;
			transform: none;
			order: initial;
			clip-path: inset(0 0 0 0);
		}

		.mobileSearch {
			display: none;
		}
	}
</style>
