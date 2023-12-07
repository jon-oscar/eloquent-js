import { List } from './types';

function arrayToList<T>(arr: T[]): List<T> {
  let list: List<T> | null = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
}

export default arrayToList;
