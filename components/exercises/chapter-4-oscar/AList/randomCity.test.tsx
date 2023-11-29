import { randomCity } from './randomCity';

describe('randomCity', () => {
  it('should return a randomly selected city', () => {
    const cities = ['Porto', 'Milan', 'Geneva', 'Budapest'];
    const city = randomCity();

    expect(cities).toContain(city);
  });
});
