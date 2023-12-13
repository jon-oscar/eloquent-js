/**
 * Executes a loop until a test condition is false.
 * @param value - The initial value for the loop.
 * @param test - A function that tests the value for the loop condition.
 * @param update - A function that updates the value for each iteration of the loop.
 * @param body - A function that is executed for each iteration of the loop.
 */
export function loop(
  value: number,
  test: (value: number) => boolean,
  update: (value: number) => number,
  body: (value: number) => void
): void {
  const loopIteration = () => {
    if (test(value)) {
      body(value);
      value = update(value);
      setInterval(loopIteration, 1000);
    }
  };
  loopIteration();
}
