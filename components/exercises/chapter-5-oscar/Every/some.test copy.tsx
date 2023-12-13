import { some } from './some';

describe('some', () => {
  it('should return true if each satisfies the condition', () => {
    const arr = [2, 4, 6, 8];
    const callBack = (num: number) => num < 10;
    expect(some(arr, callBack)).toBe(true);
  });

  it('should return false if at least one element satisfies the condition', () => {
    const arr = [2, 4, 7, 8, 11];
    const callBack = (num: number) => num < 10;
    expect(some(arr, callBack)).toBe(false);
  });
});
