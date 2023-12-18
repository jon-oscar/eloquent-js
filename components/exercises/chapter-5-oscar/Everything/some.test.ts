import { some } from './some';

describe('some', () => {
  it('should return true if each element satisfies the condition for numbers', () => {
    const arr = [2, 4, 6, 8];
    const callBack = (num: number) => num < 10;
    expect(some(arr, callBack)).toBe(true);
  });

  it('should return false if at least one element does not satisfy the condition for numbers', () => {
    const arr = [20, 4, 7, 8];
    const callBack = (num: number) => num < 10;
    expect(some(arr, callBack)).toBe(false);
  });

  it('should return true if each element satisfies the condition for strings', () => {
    const arr = ['a', 'b', 'c'];
    const callBack = (s: string) => s.length === 1;
    expect(some(arr, callBack)).toBe(true);
  });

  it('should return false if at least one element does not satisfy the condition for strings', () => {
    const arr = ['a', 'bb', 'c'];
    const callBack = (s: string) => s.length === 1;
    expect(some(arr, callBack)).toBe(false);
  });

  it('should return true if each element satisfies the condition for objects', () => {
    const arr = [{ name: 'John' }, { name: 'Jane' }, { name: 'Bob' }];
    const callBack = (obj: { name: string }) => obj.name.length > 0;
    expect(some(arr, callBack)).toBe(true);
  });

  it('should return false if at least one element does not satisfy the condition for objects', () => {
    const arr = [{ name: 'John' }, { name: '' }, { name: 'Bob' }];
    const callBack = (obj: { name: string }) => obj.name.length > 0;
    expect(some(arr, callBack)).toBe(false);
  });

  it('should return true if each element satisfies the condition for arrays', () => {
    const arr = [[1], [2, 3], [4, 5, 6]];
    const callBack = (arr: number[]) => arr.length > 0;
    expect(some(arr, callBack)).toBe(true);
  });

  it('should return false if at least one element does not satisfy the condition for arrays', () => {
    const arr = [[], [2, 3], [4, 5, 6]];
    const callBack = (arr: number[]) => arr.length > 0;
    expect(some(arr, callBack)).toBe(false);
  });

  it('should return true if each element satisfies the condition for null and undefined', () => {
    const arr = [null, undefined, null, undefined];
    const callBack = (val: null | undefined) =>
      val === null || val === undefined;
    expect(some(arr as (null | undefined)[], callBack)).toBe(true);
  });

  it('should return false if at least one element does not satisfy the condition for null and undefined', () => {
    const arr = [null, undefined, 0, undefined];
    const callBack = (val: null | undefined) =>
      val === null || val === undefined;
    expect(some(arr as (null | undefined)[], callBack)).toBe(false);
  });
});
