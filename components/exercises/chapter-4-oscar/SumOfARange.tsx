import React from 'react';

/**
 * Calculates the sum of a range of numbers.
 * @param start - The starting number of the range.
 * @param end - The ending number of the range.
 * @returns An array containing all the numbers in the range.
 */
const calcRangeSum = (start: number, end: number) => {
  const range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
};

/**
 * Calculates the sum of a range of numbers based on a given start, end, and step.
 * @param start - The starting number of the range.
 * @param end - The ending number of the range.
 * @param step - The step to increment or decrement the range by.
 * @returns An array of numbers representing the range.
 */
const calcRangeSumMod = (start: number, end: number, step: number) => {
  const range = [];

  if (step === 1) {
    // if step is 1, then we can just use the original function
    for (let i = start; i <= end; i += step) {
      range.push(i);
    }
  } else if (step < 1) {
    // if step is less than 1, then we need to decrement the range
    for (let i = start; i >= end; i += step) {
      range.push(i);
    }
  } else {
    return;
  }
  return range;
};

/**
 * Calculates the sum of all numbers in an array.
 * @param arr - The array of numbers to sum.
 * @returns The sum of all numbers in the array.
 */
const arraySum = (arr: number[]) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  return sum;
};

const SumOfARange = () => {
  return (
    <div>
      <div>{calcRangeSum(1, 10)}</div>
      <div>{calcRangeSumMod(10, 1, -2)}</div>
      <div>{arraySum([1, 2, 3, 4, 5])}</div>
    </div>
  );
};

export default SumOfARange;
