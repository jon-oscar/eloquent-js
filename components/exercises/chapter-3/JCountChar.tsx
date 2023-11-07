/**
 * Counts the number of times a given character appears in a given string.
 * @param str - The string to count characters in.
 * @param char - The character to count in the string.
 * @returns The number of times the character appears in the string.
 */
export default function countChar(str: string, char: string): number {
  const count = str.split('').filter((c) => c === char).length;
  return count;
}
