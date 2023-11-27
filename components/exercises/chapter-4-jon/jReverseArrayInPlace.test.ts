import reverseArrayInPlace from './jReverseArrayInPlace';

describe('reverseArrayInPlace', () => {
  it('reverses the array in place', () => {
    const array = [1, 2, 3, 4, 5];
    reverseArrayInPlace(array);
    expect(array).toEqual([5, 4, 3, 2, 1]);
  });

  it('does not create a new array', () => {
    const array = [1, 2, 3];
    const originalArray = array;
    reverseArrayInPlace(array);
    expect(array).toBe(originalArray);
  });

  it('does nothing when given an empty array', () => {
    const array: any[] = [];
    reverseArrayInPlace(array);
    expect(array).toEqual([]);
  });

  it('does nothing when given an array with 1 element', () => {
    const array = [1];
    reverseArrayInPlace(array);
    expect(array).toEqual([1]);
  });
});
