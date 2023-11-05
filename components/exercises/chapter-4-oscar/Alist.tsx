import React from 'react';

/**
 * Converts an array of numbers into a linked list.
 * @param arr - The array of numbers to be converted.
 * @returns The resulting linked list.
 */
const arrayToList = (arr: number[]) => {
  let list = null;

  // arr.length - 1 --> because we want to start from the last element of the array as starts from 0
  for (let i = arr.length - 1; i >= 0; i--) {
    // list will store the result of every iteration, which is {value: 20, rest: null} so on
    list = { value: arr[i], rest: list };
  }

  return list;
};

/**
 * Converts a linked list to an array.
 * @param list - The linked list to convert.
 * @returns An array containing the values of the linked list.
 */
const listToArray = (list: any) => {
  let arr = [];

  // node as condition because we want to stop when node is null
  // node.rest because we want to move to the next node
  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }

  return arr;
};

/**
 * Prepends a value to a list.
 * @param value - The value to prepend to the list.
 * @param list - The list to which the value will be prepended.
 * @returns A new list with the value prepended to it.
 */
const prepend = (value: number, list: any) => {
  // list is null when we reach the end of the list
  return { value, rest: list };
};

/**
 * Returns the value of the nth element in a list.
 * @param list - The list to search for the nth element.
 * @param n - The index of the element to retrieve.
 * @returns The value of the nth element in the list, or undefined if the list is empty or n is out of bounds.
 */
const nth = (list: any, n: number): any => {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  // list.rest because we want to move to the next node
  else return nth(list.rest, n - 1);
};

const Alist = () => {
  return (
    <div>
      <div>arrayToList([10, 20])</div>;
      <div>{listToArray(arrayToList([10, 20, 30]))}</div>;
      <div>prepend(10, prepend(20, null))</div>;
      <div>{nth(arrayToList([10, 20, 30]), 1)}</div>;
    </div>
  );
};

export default Alist;
