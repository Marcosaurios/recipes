import api from "./api.js"


const staticPages = []

/**
 * Fetch the content we need from github
 * before the compilation happens.
 */
async function preload() {
  const pages = await api.getIssues()
    console.log(pages)
}

preload()

export default { staticPages }