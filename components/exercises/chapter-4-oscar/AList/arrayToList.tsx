import { List } from './CityList';

/**
 * Converts an array of numbers into a linked list.
 * @param arr - The array to be converted.
 * @returns The resulting linked list.
 */
export function arrayToList(arr: string[] | number[]): List | null {
  let list = null;

  // arr.length - 1 --> because we want to start from the last element of the array as starts from 0
  for (let i = arr.length - 1; i >= 0; i--) {
    // list will store the result of every iteration
    list = { value: arr[i], rest: list };
  }
  return list;
}
