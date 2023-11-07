import jCountBs from './jCountBs';

describe('jCountBs', () => {
  it('returns 0 when given an empty string', () => {
    const result = jCountBs('');
    expect(result).toBe(0);
  });

  it('returns 0 when given a string with no "B" characters', () => {
    const result = jCountBs('hello world');
    expect(result).toBe(0);
  });

  it('returns the correct count when given a string with only "B" characters', () => {
    const result = jCountBs('BBBBBB');
    expect(result).toBe(6);
  });

  it('returns the correct count when given a string with both "B" and non-"B" characters', () => {
    const result = jCountBs('aBcBdB');
    expect(result).toBe(3);
  });
});
