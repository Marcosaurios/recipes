<script lang="ts">
	import type { Recipe } from "../../types/Recipe"
export let recipe: Recipe;
</script>

<div class="recipe">
  <a href="receta/{recipe.slug}" class="link">
    {recipe.title}
  </a>
</div>

<style lang="scss" scoped>
.recipe {
  background-color: #6d91ba;
  border-radius: 10px;

  margin-bottom: 1rem;
  transition: background-color cubic-bezier(0.075, 0.82, 0.165, 1) 2s;

  &:hover {
    background-color: #172433;
  }

  .link {
    display: block;
    padding: 1.5rem;
    text-decoration: none;
    transition: color cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;

    &:hover {
      color: white;
    }
  }
}
</style>
