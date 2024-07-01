export default {
    recipe(e) {
        const field = e.fields;
        const updated = e.sys.updatedAt;
        const created = e.sys.createdAt;
        const slug = field.slug;

        const recipe = {
          title: field.titulo,
          body: field.descripcion,
          ingredients: field.ingredientes,
          slug,
          created,
          updated,
        };
      
        console.log("Fetched recipe ", recipe.title);
      
        return recipe;
    }
}