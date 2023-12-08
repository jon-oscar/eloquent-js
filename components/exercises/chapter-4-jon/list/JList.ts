export type JList<T> = {
  value: T;
  rest: JList<T> | null;
};

/**
 * Creates a new list.
 * @param value - The value of the list item.
 * @param rest - The rest of the list.
 * @returns The new list.
 */
export function jCreateList<T>(value: T, rest: JList<T> | null): JList<T> {
  return {
    value,
    rest,
  };
}
