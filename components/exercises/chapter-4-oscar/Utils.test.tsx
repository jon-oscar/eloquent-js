import { getRangeWithStep, arraySum } from './Utils';

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
