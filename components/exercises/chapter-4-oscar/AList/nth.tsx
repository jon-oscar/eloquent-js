import { List } from './CityList';

/**
 * Returns the value of the nth element in a list.
 * @param list - The list to search for the nth element.
 * @param n - The index of the element to retrieve.
 * @returns The value of the nth element in the list, or undefined if the list is empty or n is out of bounds.
 */
export function nth(list: List | null, n: number): undefined | string | number {
  if (!list) return undefined;
  else if (n === 0) return list.value;
  // list.rest because we want to move to the next node
  else return nth(list.rest, n - 1);
}
