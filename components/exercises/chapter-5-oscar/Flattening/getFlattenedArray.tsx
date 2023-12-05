export function getFlattenedArray(
  arrays: (string | number)[][]
): (string | number)[] {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}
