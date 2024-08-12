import { describe, expect, it } from 'vitest'
import type { Entry, EntryFields } from 'contentful'

import parser from '../parser'
import type { TypeRecetaSkeleton } from '../../../types'

describe('CMS parser', () => {
  it('Should load a single recipe successfully', () => {
    const cmsRecipe = MakeRecipeHelper('one title', 'first-entry', ["starter"])

    parser.recipe(cmsRecipe)

    expect(parser.recipes[0]).toMatchObject({
      title: 'one title',
      ingredients: ['potatoes'],
      description: 'A description',
      slug: 'first-entry',
      minutes: 5,
      difficulty: 10,
      category: ['starter'],
      createdAt: '5',
      updatedAt: '2'
    })
  })

  it('Should load categories with their recipes successfully', () => {
    const r: Entry<TypeRecetaSkeleton, undefined, string>[] = [
      MakeRecipeHelper("one title", "first-entry", ["starter"]),
      MakeRecipeHelper("2nd title", "2nd-entry", ["starter"])
    ]

    r.forEach(parser.recipe)

    expect(parser.byCategories).toHaveProperty('starter')
    expect(parser.bySlug).toHaveProperty('first-entry')
    expect(parser.bySlug).toHaveProperty('2nd-entry')
  })
})

function MakeRecipeHelper(title: string, slug: string, category: string[]): Entry<TypeRecetaSkeleton, undefined, string> {
  return {
    metadata: {
      tags: []
    },
    sys: {
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: "receta"
        }
      },
      type: 'Entry',
      id: "receta",
      createdAt: "5" as EntryFields.Date,
      updatedAt: "2" as EntryFields.Date,
      revision: 1,
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: "receta"
        }
      },
      environment: {
        sys: {
          type: 'Link',
          linkType: 'Environment',
          id: "receta"
        }
      }
    },
    fields: {
      title,
      ingredients: ['potatoes'],
      description: 'A description',
      images: [{ original_secure_url: 'anImage.jpg' }],
      imageMain: [{ original_secure_url: 'secondImage.whatever' }],
      slug,
      minutes: 5,
      difficulty: 10,
      category: category as any,
    }
  }
}