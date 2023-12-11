import jArrayToList from './jArrayToList';
import { JList } from './JList';

describe('jArrayToList', () => {
  it('converts an array of strings to a linked list', () => {
    const array = ['a', 'b', 'c'];
    const expectedList: JList<string> = {
      value: 'a',
      rest: {
        value: 'b',
        rest: {
          value: 'c',
          rest: null,
        },
      },
    };
    const result = jArrayToList(array);
    expect(result).toEqual(expectedList);
  });

  it('converts an array of numbers to a linked list', () => {
    const array = [1, 2, 3, 4, 5];
    const expectedList: JList<number> = {
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
    const result = jArrayToList(array);
    expect(result).toEqual(expectedList);
  });

  it('returns null when given an empty array', () => {
    const array: any[] = [];
    const result = jArrayToList(array);
    expect(result).toBeNull();
  });
});
