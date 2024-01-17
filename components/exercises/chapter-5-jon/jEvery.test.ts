import jEvery from './jEvery';

describe('jEvery', () => {
  it('returns true if all elements pass the test', () => {
    const array = [1, 2, 3, 4, 5];
    const test = (element: number) => element > 0;
    expect(jEvery(array, test)).toBe(true);
  });

  it('returns false if any element fails the test', () => {
    const array = [1, 2, 3, 4, 5];
    const test = (element: number) => element > 3;
    expect(jEvery(array, test)).toBe(false);
  });

  it('returns true for an empty array', () => {
    const array: number[] = [];
    const test = (element: number) => element > 0;
    expect(jEvery(array, test)).toBe(true);
  });

  it('works with other types', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    const test = (element: string) => element.length === 1;
    expect(jEvery(array, test)).toBe(true);

    const array2 = [true, false, true, false];
    const test2 = (element: boolean) => element === true;
    expect(jEvery(array2, test2)).toBe(false);

    const array3 = [{}, {}, {}, {}];
    const test3 = (element: object) => Object.keys(element).length === 0;
    expect(jEvery(array3, test3)).toBe(true);
  });
});
