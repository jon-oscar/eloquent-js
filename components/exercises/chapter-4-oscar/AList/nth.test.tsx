import { nth } from './nth';

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
