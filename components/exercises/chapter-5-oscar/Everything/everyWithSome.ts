/**
 * Checks if all the elements in the array satisfy the provided testing function.
 * @param array - The array to iterate over.
 * @param callback The testing function.
 * @returns `true` if satisfies the testing function, otherwise `false`.
 */
export const everyWithSome = <T>(
  arr: T[],
  callback: (arg: T) => boolean
): boolean => !arr.some((n) => !callback(n));
