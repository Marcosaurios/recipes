import { Octokit } from "@octokit/core";
import dotenv from "dotenv";
dotenv.config();

const personal_access_token = process.env.VITE_GIT_PERSONAL_TOKEN;
const owner = process.env.VITE_GIT_OWNER;
const repo = process.env.VITE_GIT_REPO;

const octokit = new Octokit({ auth: personal_access_token });
export default {
  // TODO paginated to 30, make it wider
  async getIssues() {
    return octokit
      .request("GET /repos/{owner}/{repo}/issues", {
        owner,
        repo,
      })
      .then((res) => parseResponse(res));
  },
  get() {},
};

function parseResponse(res) {
  if (!res.data) return Error(`Problem calling git, status ${res.status}`);

  return res.data.map((issue) => {
    return {
      title: issue.title,
      body: issue.body,
      labels: issue.labels,
      author: issue.user.login,
      created: issue.created_at,
      updated: issue.updated_at,
    };
  });
}
