import { Vec } from './Vec';

describe('Vec', () => {
    it('should correctly calculate the sum of two vectors', () => {
        const vec1 = new Vec(1, 2);
        const vec2 = new Vec(3, 4);
        const sum = vec1.plus(vec2);
        expect(sum.x).toBe(4);
        expect(sum.y).toBe(6);
    });

    it('should correctly calculate the difference of two vectors', () => {
        const vec1 = new Vec(5, 6);
        const vec2 = new Vec(2, 3);
        const difference = vec1.minus(vec2);
        expect(difference.x).toBe(3);
        expect(difference.y).toBe(3);
    });

    it('should correctly calculate the length of a vector', () => {
        const vec = new Vec(3, 4);
        expect(vec.length).toBe(5);
    });
});
