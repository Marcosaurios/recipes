<script context="module">
export async function load({ fetch, params }) {
  const res = await fetch(`recetas.json`);
  console.log("loading recetas... ", res.status);
  console.log(res);
  const body = await res.json();
  console.log(body);

  if (res.ok) {
    return {
      props: {
        data: body,
      },
    };
  }

  return {
    status: res.status,
    error: new Error(`Could not load "content/index.json" ${res}`),
  };
}
</script>

<script lang="ts">
import type { Recipe } from "src/_types/Recipe";
import RecipePreview from "$lib/atoms/recipe-preview.svelte";
import Searchbar from "$lib/molecules/searchbar.svelte";

type DataResponse = {
  recipes: Array<Recipe>;
  ingredients: Array<String>;
};

export let data: DataResponse;

let inputSearch = "";
$: console.log(inputSearch);
</script>

<Searchbar ingredients="{data.ingredients}" bind:input="{inputSearch}" />

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

  margin: 10px 0;
  padding: inherit;
}
</style>
