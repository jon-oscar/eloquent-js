import { List } from './CityList';

/**
 * Prepends a value to a list.
 * @param value - The value to prepend to the list.
 * @param list - The list to which the value will be prepended.
 * @returns A new list with the value prepended to it.
 */
export function prepend(
  value: number | string,
  list: List | null
): List | null {
  // list is null when we reach the end of the list
  return { value, rest: list };
}
