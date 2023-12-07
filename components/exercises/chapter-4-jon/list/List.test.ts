import { List, createList } from './List';

describe('createList', () => {
  it('creates a list with a value and rest', () => {
    const value = 'a';
    const rest: List<string> = {
      value: 'b',
      rest: {
        value: 'c',
        rest: null,
      },
    };
    const expectedList: List<string> = {
      value,
      rest,
    };
    const result = createList(value, rest);
    expect(result).toEqual(expectedList);
  });

  it('creates a list with a value and null rest', () => {
    const value = 1;
    const rest = null;
    const expectedList: List<number> = {
      value,
      rest,
    };
    const result = createList(value, rest);
    expect(result).toEqual(expectedList);
  });
});
