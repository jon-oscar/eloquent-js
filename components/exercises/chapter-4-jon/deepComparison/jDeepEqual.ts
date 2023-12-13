/**
 * Deeply compares two values to determine if they are equal.
 *
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @returns True if the values are deeply equal, false otherwise.
 */
export default function jDeepEqual<T>(a: T, b: T): boolean {
  if (a === b) {
    return true;
  }

  if (
    typeof a !== 'object' ||
    a === null ||
    typeof b !== 'object' ||
    b === null
  ) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (let key of keysA) {
    if (
      !keysB.includes(key) ||
      !jDeepEqual(a[key as keyof typeof a], b[key as keyof typeof b])
    ) {
      return false;
    }
  }

  return true;
}
