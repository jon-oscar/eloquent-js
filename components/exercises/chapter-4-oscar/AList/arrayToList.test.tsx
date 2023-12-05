import { arrayToList } from './arrayToList';

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
    const arrString = ['a', 'b', 'c'];
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
    expect(arrayToList(arrString)).toEqual(expectedListString);
  });

  it('should convert an array of 5 positions into a linked list', () => {
    const arrFive = [1, 2, 3, 4, 5];
    const expectedListFive = {
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
    expect(arrayToList(arrFive)).toEqual(expectedListFive);
  });

  it('should return null for an empty array', () => {
    expect(arrayToList([])).toBeNull();
  });
});
