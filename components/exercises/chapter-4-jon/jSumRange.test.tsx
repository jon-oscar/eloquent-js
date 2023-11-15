import sumArray from './jSumRange';

describe('sumArray', () => {
  it('should return 0 for an empty array', () => {
    expect(sumArray([])).toBe(0);
  });

  it('should return the sum of a single number', () => {
    expect(sumArray([5])).toBe(5);
  });

  it('should return the sum of multiple numbers', () => {
    expect(sumArray([1, 2, 3])).toBe(6);
  });

  it('should return the sum of multiple numbers with negative numbers', () => {
    expect(sumArray([1, -2, 3])).toBe(2);
  });
});
