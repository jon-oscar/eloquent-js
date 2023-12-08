/**
 * Flattens an array of arrays into a single array.
 * @param arrays - The array of arrays to be flattened.
 * @returns The flattened array.
 */
export function getFlattenedArray(
  arrays: (string | number)[][]
): (string | number)[] {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}
