<script lang="ts">
	import type { PageData } from './$types';

    /**
     * It's the recipe page itself. Only takes data (from receta.ts) and
     * displays it as html
    */

    /** @type {import('./$types').PageData} */ 
    export let data: PageData;
    const { title } = data
    console.log('page.svelte CLIENT ', data)
    // export async function load({ page, fetch }) {
    //   // TODO
    //   const url = `/receta/${page.params.slug}.json`;
    //   const res = await fetch(url);
    //   console.log(url, res.status);
    
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
    
    
    <h2>{data.title}</h2>
    <h2>{data.body}</h2>
    <h2>{title}</h2>
        
    <div>
    </div>
    