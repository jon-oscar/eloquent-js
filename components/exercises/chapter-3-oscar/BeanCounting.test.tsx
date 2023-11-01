import { countBs, countChar } from './BeanCounting';

describe('countBs', () => {
  it('returns the number of uppercase "B" characters in a string', () => {
    expect(countBs('BBC')).toBe(2);
    expect(countBs('BbB')).toBe(2);
    expect(countBs('abc')).toBe(0);
  });
});

describe('countChar', () => {
  it('returns the number of occurrences of a given character in a string', () => {
    expect(countChar('kakkerlak', 'k')).toBe(4);
    expect(countChar('banana', 'a')).toBe(3);
    expect(countChar('hello', 'z')).toBe(0);
  });
});
