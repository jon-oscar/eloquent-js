import jGetFizzBuzz from './jGetFizzBuzz';

describe('jGetFizzBuzz', () => {
  it('returns the string input number if it is not divisible by 3 or 5', () => {
    expect(jGetFizzBuzz(1)).toBe('1');
    expect(jGetFizzBuzz(2)).toBe('2');
    expect(jGetFizzBuzz(4)).toBe('4');
    expect(jGetFizzBuzz(7)).toBe('7');
  });

  it('returns "Fizz" if the input number is divisible by 3', () => {
    expect(jGetFizzBuzz(3)).toBe('Fizz');
    expect(jGetFizzBuzz(6)).toBe('Fizz');
    expect(jGetFizzBuzz(9)).toBe('Fizz');
  });

  it('returns "Buzz" if the input number is divisible by 5', () => {
    expect(jGetFizzBuzz(5)).toBe('Buzz');
    expect(jGetFizzBuzz(10)).toBe('Buzz');
    expect(jGetFizzBuzz(20)).toBe('Buzz');
  });

  it('returns "FizzBuzz" if the input number is divisible by both 3 and 5', () => {
    expect(jGetFizzBuzz(15)).toBe('FizzBuzz');
    expect(jGetFizzBuzz(30)).toBe('FizzBuzz');
    expect(jGetFizzBuzz(45)).toBe('FizzBuzz');
  });
});
