import jReverseArrayInPlace from './jReverseArrayInPlace';

describe('jReverseArrayInPlace', () => {
  it('reverses the array in place', () => {
    const array = [1, 2, 3, 4, 5];
    jReverseArrayInPlace(array);
    expect(array).toEqual([5, 4, 3, 2, 1]);
  });

  it('does not create a new array', () => {
    const array = [1, 2, 3];
    const originalArray = array;
    jReverseArrayInPlace(array);
    expect(array).toBe(originalArray);
  });

  it('does nothing when given an empty array', () => {
    const array: any[] = [];
    jReverseArrayInPlace(array);
    expect(array).toEqual([]);
  });

  it('does nothing when given an array with 1 element', () => {
    const array = [1];
    jReverseArrayInPlace(array);
    expect(array).toEqual([1]);
  });
});
