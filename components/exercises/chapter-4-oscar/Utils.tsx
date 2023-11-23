import { ReactNode } from 'react';

/**
 * Returns an array of numbers from start to end (inclusive) with a given step.
 * @param start - The starting number of the range.
 * @param end - The ending number of the range.
 * @param step - The step between each number in the range. Defaults to 1 if start is less than end, -1 otherwise.
 * @returns An array of numbers from start to end (inclusive) with a given step.
 * @throws An error if step is zero.
 */
export const getRangeWithStep = (
  start: number,
  end: number,
  step: number = start < end ? 1 : -1
): number[] => {
  if (step === 0) {
    throw new Error('Step cannot be zero.');
  }

  const array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }

  return array;
};

/**
 * Calculates the sum of all numbers in an array.
 * @param arr - The array of numbers to sum.
 * @returns The sum of all numbers in the array.
 */
export const arraySum = (arr: number[]): number => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  return sum;
};

/**
 * Reverses the order of elements in an array.
 * @param arr - The array to be reversed.
 * @returns A new array with the elements in reverse order.
 */
export function getReversedArray(arr: any[]): any[] {
  const newArr = [];

  // loop through the passed array in inverse order and add each item to the new array
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

/**
 * Reverses an array in place.
 * @param arr - The array to be reversed.
 */
export function reverseArrayInPlace(arr: any[]): undefined {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    // prevArr is assigned the value at array[0], which is 1
    let prevArr = arr[i];

    // array[0] is assigned the value at array[4], which is 5
    arr[i] = arr[arr.length - 1 - i];

    // array[4] is assigned the value of prevArr, which is 1
    arr[arr.length - 1 - i] = prevArr;

    // After the first iteration, the array becomes [5, 2, 3, 4, 1]
  }
}

/**
 * Represents the properties of a list item.
 */
export type ListItemProp = {
  value: ReactNode;
  rest: ListItemProp | null;
};

/**
 * Converts an array of numbers into a linked list.
 * @param arr - The array of numbers to be converted.
 * @returns The resulting linked list.
 */
export function arrayToList(arr: ReactNode[]): ListItemProp | null {
  let list = null;

  // arr.length - 1 --> because we want to start from the last element of the array as starts from 0
  for (let i = arr.length - 1; i >= 0; i--) {
    // list will store the result of every iteration, which starts on {value: 20, rest: null} so on
    list = { value: arr[i], rest: list };
  }
  return list;
}

/**
 * Converts a linked list to an array.
 * @param list - The linked list to convert.
 * @returns An array containing the values of the linked list.
 */
export function listToArray(list: ListItemProp | null): ReactNode[] {
  let arr: ReactNode[] = [];

  // node as condition because we want to stop when node is null
  // node.rest because we want to move to the next node
  for (let node: ListItemProp | null = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}

/**
 * Prepends a value to a list.
 * @param value - The value to prepend to the list.
 * @param list - The list to which the value will be prepended.
 * @returns A new list with the value prepended to it.
 */
export function prepend(
  value: number | string,
  list: ListItemProp | null
): ListItemProp | null {
  // list is null when we reach the end of the list
  return { value, rest: list };
}

/**
 * Returns the value of the nth element in a list.
 * @param list - The list to search for the nth element.
 * @param n - The index of the element to retrieve.
 * @returns The value of the nth element in the list, or undefined if the list is empty or n is out of bounds.
 */
export function nth(
  list: ListItemProp | null,
  n: number
): undefined | ReactNode {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  // list.rest because we want to move to the next node
  else return nth(list.rest, n - 1);
}

/**
 * Retrieves the corresponding food for a given city.
 * @param items - The list of items.
 * @returns The food associated with the city.
 */
export function getFood(items: ListItemProp | null) {
  const city = nth(items, 0);
  let food = '';

  switch (city) {
    case 'Paris':
      food = 'Ratatouille';
      break;
    case 'London':
      food = 'Sunday roast';
      break;
    case 'Barcelona':
      food = 'Paella';
      break;
    case 'Porto':
      food = 'Salted cod';
      break;
    case 'Milan':
      food = 'Lasagna';
      break;
    case 'Geneva':
      food = 'Fondue';
      break;
    default:
      food = 'Goulash';
      break;
  }
  return <p>{food}</p>;
}

/**
 * Represents a list item.
 * @param item - The item to be rendered.
 * @returns The rendered list item.
 */
export function ListItem({ item }: { item: ListItemProp }) {
  return (
    <li>
      <p className='text-gray-800'>{item.value}</p>
      {item.rest === null ? (
        <div className='mb-2'>
          <div className='cursor-pointer rounded-lg bg-red-600 p-3 shadow'>
            <p className='font-semibold'>No more cities to visit</p>
          </div>
        </div>
      ) : (
        <details className='mb-2'>
          <summary className='cursor-pointer rounded-lg bg-yellow-600 p-3 shadow'>
            <span className='font-semibold'>
              {item.rest && Object.getOwnPropertyNames(item?.rest)[1]}
            </span>
          </summary>
          <div className='bg-white p-4'>
            <ListItem item={item.rest} />
          </div>
        </details>
      )}
    </li>
  );
}
