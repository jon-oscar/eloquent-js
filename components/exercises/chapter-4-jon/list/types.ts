export type List<T> = {
  value: T;
  rest: List<T> | null;
};
