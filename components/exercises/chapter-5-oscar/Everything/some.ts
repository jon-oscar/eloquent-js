/**
 * Checks if at least one element in the array satisfies the provided testing function.
 * @param array - The array to iterate over.
 * @param callback The testing function.
 * @returns `true` if at least one element satisfies the testing function, otherwise `false`.
 */
export const some = <T>(arr: T[], callback: (arg: T) => boolean): boolean =>
  !arr.some((n) => !callback(n));
