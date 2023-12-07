import jReverseArray from './jReverseArray';

describe('jReverseArray', () => {
  it('returns a reversed array', () => {
    const array = [1, 2, 3, 4, 5];
    const result = jReverseArray(array);
    expect(result).toEqual([5, 4, 3, 2, 1]);
  });

  it('returns a new array', () => {
    const array = [1, 2, 3];
    const result = jReverseArray(array);
    expect(result).not.toBe(array);
  });

  it('returns an empty array when given an empty array', () => {
    const array: any[] = [];
    const result = jReverseArray(array);
    expect(result).toEqual([]);
  });

  it('returns a reversed array when given an array with 1 element', () => {
    const array = [1];
    const result = jReverseArray(array);
    expect(result).toEqual([1]);
  });
});
