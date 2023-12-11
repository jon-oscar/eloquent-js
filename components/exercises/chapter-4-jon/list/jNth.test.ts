import jNth from './jNth';

describe('jNth', () => {
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
    expect(jNth(list, 0)).toBe(1);
    expect(jNth(list, 1)).toBe(2);
    expect(jNth(list, 2)).toBe(3);
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
    expect(jNth(list, -1)).toBeUndefined();
    expect(jNth(list, 3)).toBeUndefined();
  });

  it('returns undefined if the list is empty', () => {
    const list = null;
    expect(jNth(list, 0)).toBeUndefined();
  });
});
