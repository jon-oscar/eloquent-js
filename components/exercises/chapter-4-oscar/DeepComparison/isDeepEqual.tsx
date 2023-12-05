/**
 * Checks if two values are deeply equal.
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @returns True if the values are deeply equal, false otherwise.
 */
export function isDeepEqual(a: any, b: any): boolean {
  if (a === b) return true;

  // This check ensures that if either a or b is not an object (including arrays), they are not considered equal
  if (
    a === null ||
    typeof a !== 'object' ||
    b === null ||
    typeof b !== 'object'
  )
    return false;

  const keysA = Object.keys(a),
    keysB = Object.keys(b);

  // It checks if the number of keys in a is not equal to the number of keys in b. If the number of keys differs, it returns false, indicating that the objects are not deeply equal.
  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    //It checks if the current key from a is not found in the keys of b, or the values associated with the current key in a and b are not deeply equal (recursive call)
    if (!keysB.includes(key) || !isDeepEqual(a[key], b[key])) return false;
  }
  return true;
}
