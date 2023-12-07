import { List } from './types';

/**
 * Converts an array to a linked list.
 * @param arr - The array to convert.
 * @returns The linked list representation of the array.
 */
export default function arrayToList<T>(arr: T[]): List<T> | null {
  let list: List<T> | null = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
}
