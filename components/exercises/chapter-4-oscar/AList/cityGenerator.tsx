/**
 * Generates a function that returns a city from a predefined list of cities.
 * @returns A function that returns a city from the list.
 */
export const cities = [
  'London',
  'Barcelona',
  'Porto',
  'Milan',
  'Geneva',
  'Budapest',
  'Paris',
];
export function cityGenerator(): () => string {
  let index = 0;

  return function () {
    if (index >= cities.length) {
      index = 0; // Reset the index if we reach the end of the list
    }
    const city = cities[index];
    index++;
    return city;
  };
}
