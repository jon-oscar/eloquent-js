import { listToArray } from './listToArray';

describe('listToArray', () => {
  it('should convert a linked list to an array of numbers', () => {
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
    const expectedNumArray = [1, 2, 3];
    expect(listToArray(listNum)).toEqual(expectedNumArray);
  });

  it('should convert a linked list to an array of strings', () => {
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
    const expectedStringArray = ['a', 'b', 'c'];
    expect(listToArray(listString)).toEqual(expectedStringArray);
  });

  it('should convert a linked list to an array of strings of 5 positions', () => {
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
    const expectedLongerStringArray = ['a', 'b', 'c', 'd', 'f'];
    expect(listToArray(expectedLongerListString)).toEqual(
      expectedLongerStringArray
    );
  });

  it('should return an empty array for a null list', () => {
    expect(listToArray(null)).toEqual([]);
  });
});
