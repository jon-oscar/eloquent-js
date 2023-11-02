/**
 * Returns a string representation of a pyramid made of '#' characters.
 * @param rows - The number of rows in the pyramid.
 * @returns A string representation of the pyramid.
 */
export default function jGetPyramid(rows: number): string {
  let pyramid = '';

  for (let i = 1; i <= rows; i++) {
    pyramid += '#'.repeat(i) + '\n';
  }

  return pyramid;
}
