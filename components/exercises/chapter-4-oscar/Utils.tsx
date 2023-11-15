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
export function reverseArrayInPlace(arr: any[]): any[] {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    // prevArr is assigned the value at array[0], which is 1
    let prevArr = arr[i];

    // array[0] is assigned the value at array[4], which is 5
    arr[i] = arr[arr.length - 1 - i];

    // array[4] is assigned the value of prevArr, which is 1
    arr[arr.length - 1 - i] = prevArr;

    // After the first iteration, the array becomes [5, 2, 3, 4, 1]
  }
  return arr;
}
