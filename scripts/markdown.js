import fm from "front-matter";

export function parser(content) {
  return fm(content);
}
