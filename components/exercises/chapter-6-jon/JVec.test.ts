import Vec from './JVec';

describe('Vec', () => {
  it('should return the sum of two vectors', () => {
    const vec1 = new Vec(1, 2);
    const vec2 = new Vec(2, 3);
    const result = vec1.plus(vec2);
    expect(result).toEqual(new Vec(3, 5));
  });

  it('should return the difference of two vectors', () => {
    const vec1 = new Vec(1, 2);
    const vec2 = new Vec(2, 3);
    const result = vec1.minus(vec2);
    expect(result).toEqual(new Vec(-1, -1));
  });

  it('should return the length of the vector', () => {
    const vec = new Vec(3, 4);
    const result = vec.length;
    expect(result).toBe(5);
  });
});
