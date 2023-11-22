import range from './jGetRange';

describe('range', () => {
  it('returns an array of numbers from start to end (inclusive) with the given step', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8, 10]);
    expect(range(10, 0, -1)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
  });

  it('returns an empty array if start is greater than end and step is positive', () => {
    expect(range(5, 1)).toEqual([]);
    expect(range(10, 0, 2)).toEqual([]);
  });

  it('returns an empty array if start is less than end and step is negative', () => {
    expect(range(1, 5, -1)).toEqual([]);
    expect(range(0, 10, -2)).toEqual([]);
  });

  it('returns an array with one element if start and end are equal', () => {
    expect(range(5, 5)).toEqual([5]);
  });
});
