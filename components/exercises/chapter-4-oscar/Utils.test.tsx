import {
  getRangeWithStep,
  arraySum,
  getReversedArray,
  reverseArrayInPlace,
} from './Utils';

describe('getRangeWithStep', () => {
  it('returns an array of numbers from start to end with a step of 1 if no step is provided', () => {
    expect(getRangeWithStep(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(getRangeWithStep(5, 1)).toEqual([5, 4, 3, 2, 1]);
  });

  it('returns an array of numbers from start to end with the provided step', () => {
    expect(getRangeWithStep(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
    expect(getRangeWithStep(10, 1, -2)).toEqual([10, 8, 6, 4, 2]);
  });

  it('throws an error if step is 0', () => {
    expect(() => getRangeWithStep(1, 5, 0)).toThrowError('Step cannot be zero');
  });
});

describe('arraySum', () => {
  it('should return 0 for an empty array', () => {
    expect(arraySum([])).toBe(0);
  });

  it('should return the sum of a single-element array', () => {
    expect(arraySum([5])).toBe(5);
  });

  it('should return the sum of a multi-element array', () => {
    expect(arraySum([1, 2, 3, 4, 5])).toBe(15);
    expect(arraySum([-1, -2, -3, -4, -5])).toEqual(-15);
  });
});

describe('getReversedArray', () => {
  it('should return an empty array if given an empty array', () => {
    expect(getReversedArray([])).toEqual([]);
  });

  it('should return an array with the elements in reverse order', () => {
    expect(getReversedArray([1, 2, 3])).toEqual([3, 2, 1]);
    expect(getReversedArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
    expect(getReversedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([
      10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
    ]);
    expect(getReversedArray(['a', 'b', 'c', 'd', 'e'])).toEqual([
      'e',
      'd',
      'c',
      'b',
      'a',
    ]);
  });

  it('should not return the same array as the one passed', () => {
    const arr = [1, 2, 3, 4, 5];
    const reversedArr = getReversedArray(arr);
    expect(reversedArr).not.toBe(arr);
  });
});

describe('reverseArrayInPlace', () => {
  it('should return an empty array if given an empty array', () => {
    const arr: any[] = [];
    reverseArrayInPlace(arr);
    expect(arr).toEqual([]);
  });

  it('should return an array with the elements in reverse order', () => {
    const arr1 = [1, 2, 3, 4, 5];
    reverseArrayInPlace(arr1);
    expect(arr1).toEqual([5, 4, 3, 2, 1]);

    const arr2 = ['a', 'b', 'c', 'd', 'e'];
    reverseArrayInPlace(arr2);
    expect(arr2).toEqual(['e', 'd', 'c', 'b', 'a']);
  });
});
