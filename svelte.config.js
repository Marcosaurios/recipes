import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import { readFile } from "fs/promises";

const urls = JSON.parse(await readFile("./content/_urls.json"));

/** @type {import('@sveltejs/kit').Config} */

// TODO update svelte adapter static
const config = {
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: true
    }),
    // For now prerender will be disabled, as every page will be static
    // prerender: {
    //   crawl: true,
    //   entries: urls,
    // },
    alias: {
      "$lib": "src/lib",
      "$lib/*": "src/lib/*",
      "$comp/*": "src/components/*"
    }
  },
};

export default config;
