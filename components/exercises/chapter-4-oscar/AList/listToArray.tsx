import { List } from './CityList';

/**
 * Converts a linked list to an array.
 * @param list - The linked list to convert.
 * @returns An array containing the values of the linked list.
 */
export function listToArray(list: List | null): (string | number)[] {
  let arr: (string | number)[] = [];

  // node as condition because we want to stop when node is null
  let node: List | null = list;

  while (node) {
    arr.push(node.value);

    // node.rest because we want to move to the next node
    node = node.rest;
  }

  return arr;
}
