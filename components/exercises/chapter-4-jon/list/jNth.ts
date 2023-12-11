import { JList } from './JList';

/**
 * Returns the nth value in a linked list.
 * @param list - The list to search.
 * @param n - The index of the value to return.
 * @returns The nth value in the list.
 */
export default function jNth<T>(
  list: JList<T> | null,
  n: number
): T | undefined {
  if (n < 0 || list === null) {
    return undefined;
  }
  let node = list;
  for (let i = 0; i < n; i++) {
    if (node.rest === null) {
      return undefined;
    }
    node = node.rest;
  }
  return node.value;
}
