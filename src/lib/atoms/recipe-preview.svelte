<script lang="ts">
export let title: string = "";
export let url: string = "";
</script>

<div class="recipe">
  <a href="{url}" class="recipe__link">
    {title}
  </a>
</div>

<style lang="scss">
.recipe {
  background-color: #6d91ba;
  border-radius: 10px;

  margin-bottom: 1rem;
  transition: background-color cubic-bezier(0.075, 0.82, 0.165, 1) 2s;

  &:hover {
    background-color: #172433;
  }

  .recipe__link {
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
