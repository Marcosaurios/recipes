import snarkdown from "snarkdown";

export function parseMd(content: string) {
  return snarkdown(content);
}
