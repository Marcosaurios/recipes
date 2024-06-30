import dotenv from "dotenv";
import contentful from "contentful"

import parser from "./parser.js"
import mockedApi from './__mocks__/contentfulApi.js'


// CMS client init
dotenv.config();
const space = process.env.VITE_CONTENTFUL_SPACE;
const accessToken = process.env.VITE_CONTENTFUL_CD_API;
const isProd = (space && accessToken)
const api = isProd
    ? contentful.createClient({
        space,
        accessToken,
    })
    : mockedApi

const TYPES = {
    RECIPE: 'receta'
}
export default {
    async getRecipes() {
        try {
            const res = await api.getEntries({ content_type: TYPES.RECIPE });
            return res.items.map(parser.recipe);
        } catch(e) {
            console.error("Error fetching data from contentful", e)
        }
    },
  };