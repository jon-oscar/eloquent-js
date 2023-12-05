import { List } from './CityList';
import { nth } from './nth';

/**
 * Retrieves the corresponding food for a given city.
 * @param items - The list of items.
 * @returns The food associated with the city.
 */
export function getFood(items: List | null) {
  const city = nth(items, 0);
  let food = '';

  switch (city) {
    case 'Paris':
      food = 'Ratatouille';
      break;
    case 'London':
      food = 'Sunday roast';
      break;
    case 'Barcelona':
      food = 'Paella';
      break;
    case 'Porto':
      food = 'Salted cod';
      break;
    case 'Milan':
      food = 'Lasagna';
      break;
    case 'Geneva':
      food = 'Fondue';
      break;
    case 'Budapest':
      food = 'Goulash';
      break;
    default:
      food = 'No food for this city';
      break;
  }
  return food;
}
