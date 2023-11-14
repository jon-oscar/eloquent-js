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
  