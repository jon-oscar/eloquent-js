import jDeepEqual from './jDeepEqual';

describe('jDeepEqual', () => {
  it('returns true for equal primitive values', () => {
    expect(jDeepEqual(5, 5)).toBe(true);
    expect(jDeepEqual('hello', 'hello')).toBe(true);
    expect(jDeepEqual(true, true)).toBe(true);
  });

  it('returns true for equal objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    expect(jDeepEqual(obj1, obj2)).toBe(true);
  });

  it('returns true for equal nested objects', () => {
    const obj1 = { a: { b: { c: 1 } } };
    const obj2 = { a: { b: { c: 1 } } };
    expect(jDeepEqual(obj1, obj2)).toBe(true);
  });

  it('returns true for equal arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    expect(jDeepEqual(arr1, arr2)).toBe(true);
  });

  it('returns true for equal nested arrays', () => {
    const arr1 = [
      [1, 2],
      [3, 4],
    ];
    const arr2 = [
      [1, 2],
      [3, 4],
    ];
    expect(jDeepEqual(arr1, arr2)).toBe(true);
  });

  it('returns false for different primitive values', () => {
    expect(jDeepEqual(5, 10)).toBe(false);
    expect(jDeepEqual('hello', 'world')).toBe(false);
    expect(jDeepEqual(true, false)).toBe(false);
  });

  it('returns false for different objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 3 };
    expect(jDeepEqual(obj1, obj2)).toBe(false);
  });

  it('returns false for different nested objects', () => {
    const obj1 = { a: { b: { c: 1 } } };
    const obj2 = { a: { b: { c: 2 } } };
    expect(jDeepEqual(obj1, obj2)).toBe(false);
  });

  it('returns false for different arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];
    expect(jDeepEqual(arr1, arr2)).toBe(false);
  });

  it('returns false for different nested arrays', () => {
    const arr1 = [
      [1, 2],
      [3, 4],
    ];
    const arr2 = [
      [1, 2],
      [3, 5],
    ];
    expect(jDeepEqual(arr1, arr2)).toBe(false);
  });
});
