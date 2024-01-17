/**
 * Flattens a 2D array into a 1D array.
 *
 * @param arr The 2D array to be flattened.
 * @returns The flattened 1D array.
 */
export default function jFlattening<T>(arr: T[][]): T[] {
  return arr.reduce((acc, curr) => acc.concat(curr), []);
}
