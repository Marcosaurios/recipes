export * from './generated/index'
import type { UploadApiResponse } from 'cloudinary/types'

export type Recipe = {
	title: string
	slug: string
	category: string[]
	ingredients: string[]
	description: string
	imageMain?: string
	images?: string[]
	minutes?: number
	difficulty?: number
	updatedAt: string
	createdAt: string
	// "virtual" props
	url: string
}

export type Category = {
	name: string
	url: string
}

/**
 * Cloudinary image type returned by the CMS
 * We only grab `original_secure_url` value as src
 */
export type ImageCMS = Omit<
	UploadApiResponse,
	'signature' &
		'pages' &
		'etag' &
		'placeholder' &
		'original_filename' &
		'moderation' &
		'access_control' &
		'acces_mode'
> & {
	raw_transformation: string // CommonTransformationOptions
	duration?: null | number | string
	original_secure_url: string //'https://res.cloudinary.com/cloudflare-cloudinary-recipes-bucket/image/upload/v1723401745/test_zbunsb.jpg'
	original_url: string // 'http://res.cloudinary.com/cloudflare-cloudinary-recipes-bucket/image/upload/v1723401745/test_zbunsb.jpg',
}
