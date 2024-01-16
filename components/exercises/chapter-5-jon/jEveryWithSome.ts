/**
 * Checks if every element in the array satisfies the provided testing function.
 * Returns true if all elements pass the test, false otherwise.
 *
 * @param array - The array to iterate over.
 * @param test - The testing function to apply to each element.
 * @returns A boolean indicating whether all elements pass the test.
 */
export default function jEveryWithSome<T>(
  array: T[],
  test: (element: T) => boolean
): boolean {
  return !array.some((element) => !test(element));
}
