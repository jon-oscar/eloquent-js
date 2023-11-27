import { prepend } from './prepend';

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
