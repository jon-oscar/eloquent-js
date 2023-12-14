/**
 * Checks if at least one element in the array satisfies the provided testing function.
 * @param array - The array to iterate over.
 * @param callback The testing function.
 * @returns `true` if at least one element satisfies the testing function, otherwise `false`.
 */
export const some = (
  arr: number[],
  callback: (arg: number) => boolean
): boolean => !arr.some((n) => !callback(n));
