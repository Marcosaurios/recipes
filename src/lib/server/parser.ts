import type { Recipe } from "../../types/Recipe";

export default {
  recipe(e): Recipe {
    console.log('This is the recipe returned by the CMS')
    const { titulo, descripcion, ingredientes, slug } = e.fields;
    const updated = e.sys.updatedAt;
    const created = e.sys.createdAt;

    const recipe = {
      title: titulo,
      body: descripcion,
      ingredients: ingredientes,
      slug: slug,
      created,
      updated,
    };

    console.log("Fetched recipe ", recipe.title);

    return recipe;
  }
}