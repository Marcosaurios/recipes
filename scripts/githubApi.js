////////////////////////////////////
//////////// Github ////////////////
////////////////////////////////////

//////////// deprecated ////////////

import { Octokit } from "@octokit/core";
import dotenv from "dotenv";
import { parser } from "./markdown.js";
dotenv.config();

const personal_access_token = process.env.VITE_GIT_PERSONAL_TOKEN;
const owner = process.env.VITE_GIT_OWNER;
const repo = process.env.VITE_GIT_REPO;
const octokit = new Octokit({ auth: personal_access_token });

export default {
  // TODO paginated to 30, make it wider
  getIssues() {
    return octokit
      .request("GET /repos/{owner}/{repo}/issues", {
        owner,
        repo,
      })
      .then((res) => parseResponse(res));
  },
};

function parseResponse(res) {
  if (!res.data) {
    console.error("data property is empty from Github");
    return [];
  }

  return res.data.map((issue, i) => {
    // TODO parse markdown to get ingredients, categories
    const md = parser(issue.body);

    const ingredients = md.attributes.ingredients || [];

    const slug =
      md.attributes.slug || console.log("PARSED MARKDOWN for :", issue.body);
    console.log(parser(issue.body));

    return {
      title: issue.title,
      slug: issue.title,
      body: issue.body,
      gitLabels: issue.labels,
      ingredients: [],
      author: issue.user.login,
      created: issue.created_at,
      updated: issue.updated_at,
    };
  });
}
