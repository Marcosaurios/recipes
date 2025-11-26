import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode
} from 'contentful'

export interface TypeRecetaFields {
	title: EntryFieldTypes.Symbol
	slug: EntryFieldTypes.Symbol
	category: EntryFieldTypes.Array<
		EntryFieldTypes.Symbol<
			'arroz' | 'de cuchara' | 'ensaladas' | 'entrante' | 'favoritos' | 'postre'
		>
	>
	imageMain?: EntryFieldTypes.Object
	images?: EntryFieldTypes.Object
	ingredients: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
	description: EntryFieldTypes.Text
	minutes?: EntryFieldTypes.Integer
	difficulty?: EntryFieldTypes.Integer
}

export type TypeRecetaSkeleton = EntrySkeletonType<TypeRecetaFields, 'receta'>
export type TypeReceta<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode = LocaleCode
> = Entry<TypeRecetaSkeleton, Modifiers, Locales>
