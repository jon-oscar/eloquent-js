import { JList, jCreateList } from './JList';

describe('jCreateList', () => {
  it('creates a list with a value and rest', () => {
    const value = 'a';
    const rest: JList<string> = {
      value: 'b',
      rest: {
        value: 'c',
        rest: null,
      },
    };
    const expectedList: JList<string> = {
      value,
      rest,
    };
    const result = jCreateList(value, rest);
    expect(result).toEqual(expectedList);
  });

  it('creates a list with a value and null rest', () => {
    const value = 1;
    const rest = null;
    const expectedList: JList<number> = {
      value,
      rest,
    };
    const result = jCreateList(value, rest);
    expect(result).toEqual(expectedList);
  });
});
