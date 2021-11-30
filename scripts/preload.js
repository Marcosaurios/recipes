import fs from "fs";
import { cwd } from "process";

import api from "./api.js";
import { parser } from "./markdown.js";

const STATIC_PATH = "content/";

/**
 * Fetch the content we need from github
 * before the compilation happens.
 *
 * This only fetches EVERY dynamic URL that will be fetched inside our blog.
 * Let´s say, we are going to query "/ingredients/tomatoes", then Svelte will know the tag we want to query.
 * Also fetches the content.
 *
 * @returns Array<String>
 */
async function preload() {
  const urls = ["*"];

  const recipes = await api.getIssues();

  const slugs = recipes.map((e) => `${""}/${e.slug}`);
  urls.push(...slugs);

  // TODO add baseURL
  // TODO add categories and extra sections you need
  // console.log("base url is " + base);

  console.log("-- 1 fetched these pages: ", recipes);
  console.log(
    "-- 2 writing in cwd/src/routes/_recipes ",
    `${cwd()}/${STATIC_PATH}/_recipes.json`
  );

  fs.writeFile(
    `${cwd()}/${STATIC_PATH}/_recipes.json`,
    JSON.stringify(recipes),
    (err) => (err ? console.log("Error stringifying ", err) : 0)
  );

  fs.writeFile(
    `${cwd()}/${STATIC_PATH}/_urls.json`,
    JSON.stringify(urls),
    (err) => (err ? console.log("Error stringifying ", err) : 0)
  );
}

preload();
