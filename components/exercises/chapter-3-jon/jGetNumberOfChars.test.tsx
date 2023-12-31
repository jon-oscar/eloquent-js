import jGetNumberOfChars from './jGetNumberOfChars';

describe('jGetNumberOfChars', () => {
  it('returns the correct count when the character is present in the string', () => {
    const str = 'hello world';
    const char = 'l';
    const count = jGetNumberOfChars(str, char);
    expect(count).toBe(3);
  });

  it('returns 0 when the character is not present in the string', () => {
    const str = 'hello world';
    const char = 'z';
    const count = jGetNumberOfChars(str, char);
    expect(count).toBe(0);
  });

  it('returns the correct count when the string is empty', () => {
    const str = '';
    const char = 'a';
    const count = jGetNumberOfChars(str, char);
    expect(count).toBe(0);
  });
});
