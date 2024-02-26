/**
 * Checks if an object has a specific key.
 * @param list - The object to check.
 * @param key - The key to check for.
 * @returns A boolean indicating whether the object has the specified key.
 */
export function checkIfExist(list: object, key: string) {
  return Object.prototype.hasOwnProperty.call(list, key);
}
