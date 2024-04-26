<script>
import Ingredient from "$lib/atoms/ingredient.svelte";

// TODO bind input to be returned
export let input;
export let ingredients;

let showFilters = false;
const triggerFilters = () => (showFilters = !showFilters);
</script>

<div class="container">
  <label aria-label="Buscar una receta">
    <input
      type="text"
      placeholder="Buscar una receta"
      class="searchbar"
      bind:value="{input}" />
  </label>

  <div on:click="{triggerFilters}">Filters</div>

  {#if showFilters}
    <div class="ingredients">
      {#each ingredients as i}
        <Ingredient title="{i}" />
      {/each}
    </div>
  {/if}
</div>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  .searchbar {
    border: none;
    height: 41px;
    width: 200px;
    font-size: 19px;
    padding: 0px 20px;
    border-radius: 72px;
    transition: 0.3s;

    &:hover {
      box-shadow: 0 0 3pt 2pt cornflowerblue;
    }
    &:focus-visible {
      border: none;
      outline-style: none;
      box-shadow: 0 0 3pt 2pt cornflowerblue;
      width: 250px;
    }
  }

  .ingredients {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
