import { isDeepEqual } from './isDeepEqual';

describe('isDeepEqual', () => {
  it('should return true for equal values', () => {
    const obj1 = { name: 'John', age: 30 };
    const obj2 = { name: 'John', age: 30 };
    expect(isDeepEqual(obj1, obj2)).toBe(true);
  });

  it('should return false for different values', () => {
    const obj1 = { name: 'John', age: 30 };
    const obj2 = { name: 'John', age: 25 };
    expect(isDeepEqual(obj1, obj2)).toBe(false);
  });

  it('should return true for deeply equal values', () => {
    const obj1 = {
      name: 'John',
      age: 30,
      address: { city: 'New York', country: 'USA' },
    };
    const obj2 = {
      name: 'John',
      age: 30,
      address: { city: 'New York', country: 'USA' },
    };
    expect(isDeepEqual(obj1, obj2)).toBe(true);
  });

  it('should return false for deeply different values', () => {
    const obj1 = {
      name: 'John',
      age: 30,
      address: { city: 'New York', country: 'USA' },
    };
    const obj2 = {
      name: 'John',
      age: 30,
      address: { city: 'Los Angeles', country: 'USA' },
    };
    expect(isDeepEqual(obj1, obj2)).toBe(false);
  });
});
