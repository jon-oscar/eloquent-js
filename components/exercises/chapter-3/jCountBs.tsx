import jGetNumberOfChars from './jGetNumberOfChars';

/**
 * Counts the number of uppercase "B" characters in a given string.
 * @param str - The string to count "B" characters in.
 * @returns The number of uppercase "B" characters in the string.
 */
export default function jCountBs(str: string): number {
  const count = jGetNumberOfChars(str, 'B');
  return count;
}
