/** Recipe type inside the webapp */
export interface Recipe {
  title: string;
  body: string;
  ingredients: Array<string>;
  slug: string;
  created: string;
  updated: string;
}
