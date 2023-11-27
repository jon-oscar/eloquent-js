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
