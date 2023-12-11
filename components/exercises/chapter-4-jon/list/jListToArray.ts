import { JList } from './JList';

/**
 * Converts a linked list to an array.
 * @param list The linked list to convert.
 * @returns An array containing the values from the linked list.
 */
export default function jListToArray<T>(list: JList<T> | null): T[] {
  const array: T[] = [];
  let current: JList<T> | null = list;
  while (current) {
    array.push(current.value);
    current = current.rest;
  }
  return array;
}
