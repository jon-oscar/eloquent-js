/**
 * Returns an array of numbers from start to end (inclusive) with the given step.
 * @param start - The starting number of the range.
 * @param end - The ending number of the range.
 * @param step - The step between each number in the range. Defaults to 1.
 * @returns An array of numbers from start to end (inclusive) with the given step.
 */
export default function range(
  start: number,
  end: number,
  step: number = 1
): number[] {
  const result = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }
  return result;
}
