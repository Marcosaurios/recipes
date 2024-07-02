import * as contentful from "contentful"

/** CMS models used in this app */
export enum ContentModels {
  Receta = 'receta'
}

/** CMS definition of Receta */
export type RecetaEntry = {
  contentTypeId: ContentModels.Receta
  fields: {
    titulo: contentful.EntryFieldTypes.Text
    ingredientes: contentful.EntryFieldTypes.Text
    descripcion: contentful.EntryFieldTypes.RichText
    slug: contentful.EntryFieldTypes.Text
    tiempo: contentful.EntryFieldTypes.Integer
    dificultad: contentful.EntryFieldTypes.Integer
    categoria: contentful.EntryFieldTypes.Text
  }
}

