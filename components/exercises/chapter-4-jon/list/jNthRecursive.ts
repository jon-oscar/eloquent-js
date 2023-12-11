import { JList } from './JList';

/**
 * Returns the nth value in a linked list, uses recursion.
 * @param list - The list to search.
 * @param n - The index of the value to return.
 * @returns The nth value in the list.
 */
export default function jNthRecursive<T>(
  list: JList<T> | null,
  n: number
): T | undefined {
  if (n < 0 || list === null) {
    return undefined;
  }
  if (n === 0) {
    return list.value;
  }
  return jNthRecursive(list.rest, n - 1);
}
