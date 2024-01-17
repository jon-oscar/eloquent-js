/**
 * Checks if every element in an array satisfies a given condition.
 * @param array - The array to check.
 * @param callback - The condition function to apply to each element.
 * @returns `true` if every element satisfies the condition, `false` otherwise.
 */
export const every = <T>(arr: T[], callback: (arg: T) => boolean): boolean => {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i])) {
      return false;
    }
  }
  return true;
};
