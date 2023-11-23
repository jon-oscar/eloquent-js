import {
  getRangeWithStep,
  arraySum,
  getReversedArray,
  reverseArrayInPlace,
  arrayToList,
  listToArray,
  prepend,
  nth,
  ListItemProp,
  getFood,
  ListItem,
  checkEqual,
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
  it('should convert an array of strings into a linked list', () => {
    const arr = ['a', 'b', 'c'];
    const expectedList = {
      value: 'a',
      rest: {
        value: 'b',
        rest: {
          value: 'c',
          rest: null,
        },
      },
    };
    expect(arrayToList(arr)).toEqual(expectedList);
  });

  it('should return null for an empty array', () => {
    expect(arrayToList([])).toBeNull();
  });
});

describe('listToArray', () => {
  it('should convert a linked list to an array', () => {
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
    const expectedArray = [1, 2, 3];
    expect(listToArray(list)).toEqual(expectedArray);
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

describe('ListItem', () => {
  it('should render the item value', () => {
    const item = {
      value: 'Item 1',
      rest: null,
    };
    render(<ListItem item={item} />);
    const renderedItem = screen.getByText('Item 1');
    expect(renderedItem).toBeInTheDocument();
  });

  it('should render the rest of the list if it exists', () => {
    const item = {
      value: 'Item 1',
      rest: {
        value: 'Item 2',
        rest: null,
      },
    };
    render(<ListItem item={item} />);
    const renderedItem1 = screen.getByText('Item 1');
    const renderedItem2 = screen.getByText('Item 2');
    expect(renderedItem1).toBeInTheDocument();
    expect(renderedItem2).toBeInTheDocument();
  });

  it('should render "No more cities to visit" if the rest of the list is null', () => {
    const item = {
      value: 'Item 1',
      rest: null,
    };
    render(<ListItem item={item} />);
    const renderedItem = screen.getByText('No more cities to visit');
    expect(renderedItem).toBeInTheDocument();
  });
});

describe('getFood', () => {
  it('should return the correct food for Paris', () => {
    const items: ListItemProp = { value: 'Paris', rest: null };
    render(getFood(items));
    const foodElement = screen.getByText('Ratatouille');
    expect(foodElement).toBeInTheDocument();
  });

  it('should return the correct food for London', () => {
    const items: ListItemProp = { value: 'London', rest: null };
    render(getFood(items));
    const foodElement = screen.getByText('Sunday roast');
    expect(foodElement).toBeInTheDocument();
  });

  it('should return the default food for an unknown city', () => {
    const items: ListItemProp = { value: 'UnknownCity', rest: null };
    render(getFood(items));
    const foodElement = screen.getByText('Goulash');
    expect(foodElement).toBeInTheDocument();
  });
});

describe('checkEqual', () => {
  it('should return true for equal values', () => {
    const obj1 = { name: 'John', age: 30 };
    const obj2 = { name: 'John', age: 30 };
    expect(checkEqual(obj1, obj2)).toBe(true);
  });

  it('should return false for different values', () => {
    const obj1 = { name: 'John', age: 30 };
    const obj2 = { name: 'John', age: 25 };
    expect(checkEqual(obj1, obj2)).toBe(false);
  });

  it('should return true for deeply equal values', () => {
    const obj1 = {
      name: 'John',
      age: 30,
      address: { city: 'New York', country: 'USA' },
    };
    const obj2 = {
      name: 'John',
      age: 30,
      address: { city: 'New York', country: 'USA' },
    };
    expect(checkEqual(obj1, obj2)).toBe(true);
  });

  it('should return false for deeply different values', () => {
    const obj1 = {
      name: 'John',
      age: 30,
      address: { city: 'New York', country: 'USA' },
    };
    const obj2 = {
      name: 'John',
      age: 30,
      address: { city: 'Los Angeles', country: 'USA' },
    };
    expect(checkEqual(obj1, obj2)).toBe(false);
  });
});
