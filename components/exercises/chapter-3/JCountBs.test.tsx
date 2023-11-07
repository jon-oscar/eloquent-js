import JCountBs from './JCountBs';

describe('JCountBs', () => {
  it('returns 0 when given an empty string', () => {
    const result = JCountBs('');
    expect(result).toBe(0);
  });

  it('returns 0 when given a string with no "B" characters', () => {
    const result = JCountBs('hello world');
    expect(result).toBe(0);
  });

  it('returns the correct count when given a string with only "B" characters', () => {
    const result = JCountBs('BBBBBB');
    expect(result).toBe(6);
  });

  it('returns the correct count when given a string with both "B" and non-"B" characters', () => {
    const result = JCountBs('aBcBdB');
    expect(result).toBe(3);
  });
});
