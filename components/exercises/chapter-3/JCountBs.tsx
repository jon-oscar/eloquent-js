/**
 * Counts the number of uppercase "B" characters in a given string.
 * @param str - The string to count "B" characters in.
 * @returns The number of uppercase "B" characters in the string.
 */
export default function JCountBs(str: string): number {
  const count = str.split("").filter(char => char === "B").length;
  return count;
}
