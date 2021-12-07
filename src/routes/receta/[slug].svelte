<script context="module">
/** @type {import('@sveltejs/kit').Load} */
export async function load({ page, fetch }) {
  const url = `/receta/${page.params.slug}.json`;
  const res = await fetch(url);
  console.log(url, res.status);

  if (res.ok) {
    return {
      props: {
        data: await res.json(),
      },
    };
  }

  return {
    status: res.status,
    error: new Error(`Could not load ${"content/recipes"}`),
  };
}
</script>

<script>
export let data;
import { parser } from "$lib/markdown";
</script>

<h2>{data.recipe.title}</h2>

<ul>
  {#each data.recipe.ingredients as ingredient}
    <li>{ingredient}</li>
  {/each}
</ul>

<div>
  {@html parser(data.recipe.body)}
</div>
