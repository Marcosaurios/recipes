<script lang="ts">
	import { t } from '$lib/i18n'
	import type { Recipe } from '$types'
	import { RecipePreviewList } from '../molecules'

	interface Props {
		items: Recipe[]
		category: string
	}

	let { items, category }: Props = $props()
</script>

<h2>{[$t('templates.category.title'), category].join(' ')}</h2>

<RecipePreviewList {items} />
