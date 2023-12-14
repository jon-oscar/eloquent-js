import { every } from './every';

describe('every', () => {
  it('should return true if every element satisfies the condition', () => {
    const arr = [2, 4, 6, 8];
    const callBack = (num: number) => num < 10;
    expect(every(arr, callBack)).toBe(true);
  });

  it('should return false if at least one element does not satisfy the condition', () => {
    const arr = [20, 4, 7, 8];
    const callBack = (num: number) => num < 10;
    expect(every(arr, callBack)).toBe(false);
  });
});
