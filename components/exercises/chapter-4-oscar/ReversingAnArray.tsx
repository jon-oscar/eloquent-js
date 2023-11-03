import React from 'react';

/**
 * Reverses the order of elements in an array.
 * @param arr - The array to be reversed.
 * @returns A new array with the elements in reverse order.
 */
const reverseArray = (arr: string[]) => {
  const newArr = [];

  // loop through the array backwards and arr.length - 1 = 4 to match with indexation
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
};

/**
 * Reverses an array in place.
 * @param arr - The array to be reversed.
 */
const reverseArrayInPlace = (arr: number[]) => {
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
};

const ReversingAnArray = () => {
  return (
    <div>
      <div>{reverseArray(['A', 'B', 'C', 'D', 'E'])}</div>
      <div>{reverseArrayInPlace([1, 2, 3, 4, 5])}</div>
    </div>
  );
};

export default ReversingAnArray;
