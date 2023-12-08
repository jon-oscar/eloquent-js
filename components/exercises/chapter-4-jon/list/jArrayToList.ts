import { JList, jCreateList } from './JList';

/**
 * Converts an array to a linked list.
 * @param arr - The array to convert.
 * @returns The linked list representation of the array.
 */
export default function arrayToList<T>(arr: T[]): JList<T> | null {
  let list: JList<T> | null = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = jCreateList(arr[i], list);
  }
  return list;
}
