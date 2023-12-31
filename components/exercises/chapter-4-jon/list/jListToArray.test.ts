import { JList } from './JList';
import jListToArray from './jListToArray';

describe('jListToArray', () => {
  it('converts a linked list of strings to an array', () => {
    const list: JList<string> = {
      value: 'a',
      rest: {
        value: 'b',
        rest: {
          value: 'c',
          rest: null,
        },
      },
    };
    const expectedArray = ['a', 'b', 'c'];
    const result = jListToArray(list);
    expect(result).toEqual(expectedArray);
  });

  it('converts a linked list of numbers to an array', () => {
    const list: JList<number> = {
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
    const expectedArray = [1, 2, 3, 4, 5];
    const result = jListToArray(list);
    expect(result).toEqual(expectedArray);
  });

  it('returns an empty array when given a null list', () => {
    const list = null;
    const expectedArray: any[] = [];
    const result = jListToArray(list);
    expect(result).toEqual(expectedArray);
  });
});
