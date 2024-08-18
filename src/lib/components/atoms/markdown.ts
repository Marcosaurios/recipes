import * as marked from 'marked'

export function parseMd(content: string) {
  return marked.parse(content.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, ""));
}
