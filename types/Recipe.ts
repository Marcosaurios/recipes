export interface Recipe {
  title: string;
  body: string;
  ingredients: Array<string>;
  slug: string;
  url: string;

  /**
   * A number 0-10
   */
  difficult: number;

  /**
   * Minutes needed to elaborate the recipe
   */
  minutes: number;

  created: string;
  updated: string;
}
