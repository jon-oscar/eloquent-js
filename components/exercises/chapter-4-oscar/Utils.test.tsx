import {
  getRangeWithStep,
  arraySum,
  getReversedArray,
  reverseArrayInPlace,
  arrayToList,
  listToArray,
  prepend,
  nth,
  List,
  getFood,
} from './Utils';
import { render, screen } from '@testing-library/react';

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

describe('arrayToList', () => {
  it('should convert an array of numbers into a linked list', () => {
    const arr = [1, 2, 3];
    const expectedList = {
      value: 1,
      rest: {
        value: 2,
        rest: {
          value: 3,
          rest: null,
        },
      },
    };
    expect(arrayToList(arr)).toEqual(expectedList);
  });

  it('should convert an array into a linked list', () => {
    const arrString = ['a', 'b', 'c'];
    const arrNum = [1, 2, 3, 4, 5];
    const expectedListString = {
      value: 'a',
      rest: {
        value: 'b',
        rest: {
          value: 'c',
          rest: null,
        },
      },
    };

    const expectedListNum = {
      value: 1,
      rest: {
        value: 2,
        rest: {
          value: 3,
          rest: {
            value: 4,
            rest: {
              value: 5,
              rest: null,
            },
          },
        },
      },
    };

    expect(arrayToList(arrString)).toEqual(expectedListString);
    expect(arrayToList(arrNum)).toEqual(expectedListNum);
  });

  it('should return null for an empty array', () => {
    expect(arrayToList([])).toBeNull();
  });
});

describe('listToArray', () => {
  it('should convert a linked list to an array', () => {
    const listNum = {
      value: 1,
      rest: {
        value: 2,
        rest: {
          value: 3,
          rest: null,
        },
      },
    };

    const listString = {
      value: 'a',
      rest: {
        value: 'b',
        rest: {
          value: 'c',
          rest: null,
        },
      },
    };

    const expectedLongerListString = {
      value: 'a',
      rest: {
        value: 'b',
        rest: {
          value: 'c',
          rest: {
            value: 'd',
            rest: {
              value: 'f',
              rest: null,
            },
          },
        },
      },
    };

    const expectedNumArray = [1, 2, 3];
    const expectedStringArray = ['a', 'b', 'c'];
    const expectedLongerStringArray = ['a', 'b', 'c', 'd', 'f'];
    expect(listToArray(listNum)).toEqual(expectedNumArray);
    expect(listToArray(listString)).toEqual(expectedStringArray);
    expect(listToArray(expectedLongerListString)).toEqual(
      expectedLongerStringArray
    );
  });

  it('should return an empty array for a null list', () => {
    expect(listToArray(null)).toEqual([]);
  });
});

describe('prepend', () => {
  it('should add a value at the beginning of list', () => {
    const value = 1;
    const list = {
      value: 2,
      rest: {
        value: 3,
        rest: null,
      },
    };
    const expectedList = {
      value: 1,
      rest: {
        value: 2,
        rest: {
          value: 3,
          rest: null,
        },
      },
    };
    expect(prepend(value, list)).toEqual(expectedList);
  });

  it('should return a new list if the original list is null', () => {
    const value = 1;
    const list = null;
    const expectedList = {
      value: 1,
      rest: null,
    };
    expect(prepend(value, list)).toEqual(expectedList);
  });
});

describe('nth', () => {
  it('should return the value of the nth element in a list', () => {
    const list = {
      value: 1,
      rest: {
        value: 2,
        rest: {
          value: 3,
          rest: null,
        },
      },
    };
    expect(nth(list, 0)).toBe(1);
    expect(nth(list, 1)).toBe(2);
    expect(nth(list, 2)).toBe(3);
  });

  it('should return undefined if the list is empty', () => {
    const list = null;
    expect(nth(list, 0)).toBeUndefined();
  });

  it('should return undefined if the index is out of bounds', () => {
    const list = {
      value: 1,
      rest: {
        value: 2,
        rest: {
          value: 3,
          rest: null,
        },
      },
    };
    expect(nth(list, 3)).toBeUndefined();
  });
});

describe('getFood', () => {
  it('should return the correct food for Paris', () => {
    const items: List = { value: 'Paris', rest: null };
    render(getFood(items));
    const foodElement = screen.getByText('Ratatouille');
    expect(foodElement).toBeInTheDocument();
  });

  it('should return the correct food for London', () => {
    const items: List = { value: 'London', rest: null };
    render(getFood(items));
    const foodElement = screen.getByText('Sunday roast');
    expect(foodElement).toBeInTheDocument();
  });

  it('should return the default food for an unknown city', () => {
    const items: List = { value: 'UnknownCity', rest: null };
    render(getFood(items));
    const foodElement = screen.getByText('Goulash');
    expect(foodElement).toBeInTheDocument();
  });
});
