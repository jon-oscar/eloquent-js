import { JList, jCreateList } from './JList';

/**
 * Prepends an element to a linked list.
 * @param element - The element to prepend.
 * @param list - The list to prepend to.
 * @returns A new list with the element prepended.
 */
export default function prepend<T>(
  element: T,
  list: JList<T> | null
): JList<T> {
  return jCreateList(element, list);
}
