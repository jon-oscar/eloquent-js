import { isEven } from './Recursion';

describe('isEven', () => {
  it('returns true for even numbers', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(4)).toBe(true);
    expect(isEven(6)).toBe(true);
  });

  it('returns false for odd numbers', () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(3)).toBe(false);
    expect(isEven(5)).toBe(false);
  });

  it('returns true for negative even numbers', () => {
    expect(isEven(-2)).toBe(true);
    expect(isEven(-4)).toBe(true);
    expect(isEven(-6)).toBe(true);
  });

  it('returns false for negative odd numbers', () => {
    expect(isEven(-1)).toBe(false);
    expect(isEven(-3)).toBe(false);
    expect(isEven(-5)).toBe(false);
  });
});
