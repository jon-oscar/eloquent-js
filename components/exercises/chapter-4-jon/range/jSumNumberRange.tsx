/**
 * Sums up all the numbers in an array.
 * @param numbers An array of numbers to sum up.
 * @returns The sum of all the numbers in the array.
 */
export default function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
