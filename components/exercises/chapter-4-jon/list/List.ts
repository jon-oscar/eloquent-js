export type List<T> = {
  value: T;
  rest: List<T> | null;
};

/**
 * Creates a new list.
 * @param value - The value of the list item.
 * @param rest - The rest of the list.
 * @returns The new list.
 */
export function createList<T>(value: T, rest: List<T> | null): List<T> {
  return {
    value,
    rest,
  };
}
