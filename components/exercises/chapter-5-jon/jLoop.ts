/**
 * Executes a loop with a given initial value, test condition, update function, and body function.
 * @template T The type of the value.
 * @param value The initial value.
 * @param test A function that tests the value for a condition.
 * @param update A function that updates the value.
 * @param body A function that is executed on each iteration of the loop.
 */
export default function jLoop<T>(
  value: T,
  test: (value: T) => boolean,
  update: (value: T) => T,
  body: (value: T) => void
) {
  while (test(value)) {
    body(value);
    value = update(value);
  }
}
