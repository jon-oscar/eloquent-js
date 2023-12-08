import nth from './nth';

describe('nth', () => {
  it('returns the element at the specified index', () => {
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

  it('returns undefined if the index is out of range', () => {
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
    expect(nth(list, -1)).toBeUndefined();
    expect(nth(list, 3)).toBeUndefined();
  });

  it('returns undefined if the list is empty', () => {
    const list = null;
    expect(nth(list, 0)).toBeUndefined();
  });
});
