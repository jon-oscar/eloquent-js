import { listToArray } from './listToArray';

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
