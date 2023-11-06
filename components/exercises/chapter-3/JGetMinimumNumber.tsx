/**
 * Returns the minimum of two numbers.
 * @param num1 - The first number to compare.
 * @param num2 - The second number to compare.
 * @returns The minimum of the two numbers.
 */
export default function jGetMinimumNumber(num1: number, num2: number): number {
  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
}
