<script context="module">
// export async function load({  }) {
//   const res = await fetch(`index.json`);

//   if (res.ok) {
//     return {
//       props: {
//         data: await res.json(),
//       },
//     };
//   }

//   return {
//     status: res.status,
//     error: new Error(`Could not load ${"content/recipes"}`),
//   };
// }
</script>

<script lang="ts">
import type { Recipe } from "../_types/Recipe";
import RecipePreview from "$lib/atoms/recipe-preview.svelte";
import Ingredient from "$lib/atoms/ingredient.svelte";

type DataResponse = {
  recipes: Array<Recipe>;
  ingredients: Array<String>;
};

export let data: DataResponse;

console.log(data)
</script>

<h1>Recetario</h1>

<div>
  <input type="text" class="search" />
</div>

<!-- <div class="ingredients">
  {#each data.ingredients as i}
    <Ingredient title="{i}" />
  {/each}
</div> -->

<ul class="recipes">
  {#each data.recipes as r}
    <li>
      <RecipePreview title="{r.title}" url="{r.url}" />
    </li>
  {/each}
</ul>

<style lang="scss" scoped>
ul {
  list-style: none;

  margin: inherit;
  padding: inherit;
}

.ingredients {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
