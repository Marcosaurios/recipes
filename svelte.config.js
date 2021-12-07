import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import { readFile } from "fs/promises";

const urls = JSON.parse(await readFile("./content/_urls.json"));

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),

  kit: {
    target: "#svelte",
    adapter: adapter(),
    prerender: {
      crawl: true,
      enabled: true,
      entries: urls,
    },
  },
};

export default config;
