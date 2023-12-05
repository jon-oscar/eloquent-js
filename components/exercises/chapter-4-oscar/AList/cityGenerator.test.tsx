import { cityGenerator } from './cityGenerator';

describe('cityGenerator', () => {
  it('should return a function', () => {
    const generator = cityGenerator();
    expect(typeof generator).toBe('function');
  });

  it('should return a city from the list', () => {
    const cities = [
      'London',
      'Barcelona',
      'Porto',
      'Milan',
      'Geneva',
      'Budapest',
      'Paris',
    ];
    const generator = cityGenerator();

    for (let i = 0; i < 10; i++) {
      const city = generator();
      expect(cities.includes(city)).toBe(true);
    }
  });

  it('should return a different city each time', () => {
    const generator = cityGenerator();
    const city1 = generator();
    const city2 = generator();
    const city3 = generator();
    const city4 = generator();
    expect(city1).not.toBe(city2);
    expect(city2).not.toBe(city3);
    expect(city3).not.toBe(city4);
  });

  it('should return a city with a valid format', () => {
    const generator = cityGenerator();
    const city = generator();
    expect(typeof city).toBe('string');
    expect(city.length).toBeGreaterThan(0);
  });
});
