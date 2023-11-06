import jGetMinimumNumber from './JGetMinimumNumber';

describe('jGetMinimumNumber', () => {
  it('returns the smaller of two positive numbers', () => {
    expect(jGetMinimumNumber(2, 5)).toBe(2);
  });

  it('returns the smaller of two negative numbers', () => {
    expect(jGetMinimumNumber(-5, -2)).toBe(-5);
  });

  it('returns the first number if both are equal', () => {
    expect(jGetMinimumNumber(3, 3)).toBe(3);
  });

  it('returns the second number if both are equal', () => {
    expect(jGetMinimumNumber(-4, -4)).toBe(-4);
  });
});
