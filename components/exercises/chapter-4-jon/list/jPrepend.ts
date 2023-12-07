import { List, createList } from './List';

/**
 * Prepends an element to a linked list.
 * @param element - The element to prepend.
 * @param list - The list to prepend to.
 * @returns A new list with the element prepended.
 */
export default function prepend<T>(element: T, list: List<T> | null): List<T> {
  return createList(element, list);
}
