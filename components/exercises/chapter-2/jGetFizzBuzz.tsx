/**
 * Returns "Fizz" if the input number is divisible by 3, "Buzz" if it's divisible by 5,
 * "FizzBuzz" if it's divisible by both 3 and 5, and the input number as a string otherwise.
 * @param count The number to check for divisibility.
 * @returns "Fizz", "Buzz", "FizzBuzz", or the input number as a string.
 */
export default function jGetFizzBuzz(
  count: number
): string | 'FizzBuzz' | 'Fizz' | 'Buzz' {
  if (count % 3 === 0 && count % 5 === 0) {
    return 'FizzBuzz';
  } else if (count % 3 === 0) {
    return 'Fizz';
  } else if (count % 5 === 0) {
    return 'Buzz';
  } else {
    return count.toString();
  }
}
