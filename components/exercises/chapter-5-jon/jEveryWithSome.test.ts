import jEveryWithSome from './jEveryWithSome';

describe('jEveryWithSome', () => {
  it('returns true if all elements pass the test', () => {
    const array = [2, 4, 6, 8];
    const test = (element: number) => element % 2 === 0;
    const result = jEveryWithSome(array, test);
    expect(result).toBe(true);
  });

  it('returns false if any element fails the test', () => {
    const array = [2, 4, 7, 8];
    const test = (element: number) => element % 2 === 0;
    const result = jEveryWithSome(array, test);
    expect(result).toBe(false);
  });

  it('returns true for an empty array', () => {
    const array: number[] = [];
    const test = (element: number) => element % 2 === 0;
    const result = jEveryWithSome(array, test);
    expect(result).toBe(true);
  });

  it('works with other types', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    const test = (element: string) => element.length === 1;
    expect(jEveryWithSome(array, test)).toBe(true);

    const array2 = [true, false, true, false];
    const test2 = (element: boolean) => element === true;
    expect(jEveryWithSome(array2, test2)).toBe(false);

    const array3 = [{}, {}, {}, {}];
    const test3 = (element: object) => Object.keys(element).length === 0;
    expect(jEveryWithSome(array3, test3)).toBe(true);
  });
});
