import snarkdown from "snarkdown";

export function parser(content: string): string {
  return snarkdown(content)
}