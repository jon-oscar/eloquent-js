/**
 * Generates a random city from a predefined list of cities.
 * @returns {string} The randomly selected city.
 */
export function randomCity(): string {
  const cities = ['Porto', 'Milan', 'Geneva', 'Budapest'];
  const randomIndex = Math.floor(Math.random() * cities.length);
  return cities[randomIndex];
}
