/**
 * Checks if every element in the array passes the test implemented by the provided function.
 * @param array - The array to iterate over.
 * @param test - The function to test each element against.
 * @returns `true` if all elements pass the test, `false` otherwise.
 */
export default function jEvery<T>(
  array: T[],
  test: (element: T) => boolean
): boolean {
  for (let element of array) {
    if (!test(element)) {
      return false;
    }
  }
  return true;
}
