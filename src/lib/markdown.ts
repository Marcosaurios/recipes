import snarkdown from "snarkdown";

export function parser(content: string) {
  return snarkdown(content);
}
