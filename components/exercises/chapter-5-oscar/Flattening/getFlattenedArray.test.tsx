import { getFlattenedArray } from './getFlattenedArray';

describe('getFlattenedArray', () => {
  it('should flatten the array', () => {
    const arrays = [
      [1, 2, 3],
      ['a', 'b', 'c'],
      [4, 5, 6],
    ];
    const expected = [1, 2, 3, 'a', 'b', 'c', 4, 5, 6];
    const result = getFlattenedArray(arrays);
    expect(result).toEqual(expected);
  });

  it('should handle empty arrays', () => {
    const arrays: (string | number)[][] = [];
    const expected: (string | number)[] = [];
    const result = getFlattenedArray(arrays);
    expect(result).toEqual(expected);
  });

  it('should handle arrays with different types', () => {
    const arrays = [
      [1, 'a'],
      [2, 'b'],
      [3, 'c'],
    ];
    const expected = [1, 'a', 2, 'b', 3, 'c'];
    const result = getFlattenedArray(arrays);
    expect(result).toEqual(expected);
  });
});
