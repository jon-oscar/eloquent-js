import { JList } from './JList';
import prepend from './jPrepend';

describe('prepend', () => {
  it('adds an element to the beginning of a list', () => {
    const list: JList<number> = {
      value: 2,
      rest: {
        value: 3,
        rest: {
          value: 4,
          rest: null,
        },
      },
    };
    const element = 1;
    const expectedList: JList<number> = {
      value: 1,
      rest: {
        value: 2,
        rest: {
          value: 3,
          rest: {
            value: 4,
            rest: null,
          },
        },
      },
    };
    const result = prepend(element, list);
    expect(result).toEqual(expectedList);
  });

  it('adds an element to the beginning of an empty list', () => {
    const list = null;
    const element = 1;
    const expectedList: JList<number> = {
      value: 1,
      rest: null,
    };
    const result = prepend(element, list);
    expect(result).toEqual(expectedList);
  });

  it('adds an element to the beginning of a list with one element', () => {
    const list: JList<number> = {
      value: 2,
      rest: null,
    };
    const element = 1;
    const expectedList: JList<number> = {
      value: 1,
      rest: {
        value: 2,
        rest: null,
      },
    };
    const result = prepend(element, list);
    expect(result).toEqual(expectedList);
  });
});
