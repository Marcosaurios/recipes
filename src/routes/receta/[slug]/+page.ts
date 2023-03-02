// import { cwd } from "process";

// // Require hack to load fs-extra dep
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// const fs = require("fs-extra");

// /** @type {import('@sveltejs/kit').RequestHandler} */
// export async function get({ params }) {
//   // param object in get: {
//   //   headers: {
//   //     host: 'localhost:3000',
//   //     connection: 'keep-alive',
//   //     'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
//   //     accept: '*/*',
//   //     dnt: '1',
//   //     'sec-ch-ua-mobile': '?0',
//   //     'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
//   //     'sec-fetch-site': 'same-origin',
//   //     'sec-fetch-mode': 'cors',
//   //     'sec-fetch-dest': 'empty',
//   //     referer: 'http://localhost:3000/receta/tortilla-francesa',
//   //     'accept-encoding': 'gzip, deflate, br',
//   //     'accept-language': 'en-US,en;q=0.9,es-ES;q=0.8,es;q=0.7',
//   //     cookie: 'io=D4OyzG27t5LjdQH7AAAB; userid=7eba8f1b-85ef-4b58-9868-817ef1a9fd0e',
//   //     'if-none-match': '"3hkqt"'
//   //   },
//   //   method: 'GET',
//   //   host: 'localhost:3000',
//   //   path: '/receta/tortilla-francesa.json',
//   //   query: URLSearchParams {},
//   //   rawBody: null,
//   //   body: null,
//   //   params: { slug: 'tortilla-francesa' },
//   //   locals: {}
//   // }
//   console.log("getting ", params.slug);

//   return {
//     body: {
//       recipe: await fs.readJson(`${cwd()}/content/recipes/${params.slug}.json`),
//     },
//   };
// }

import { error } from '@sveltejs/kit';
export const prerender = true

 
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  if (params.slug === 'hello-world') {
    return {
      title: 'Hello world!',
      content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
    };
  }
 
  throw error(404, 'Not found');
}
