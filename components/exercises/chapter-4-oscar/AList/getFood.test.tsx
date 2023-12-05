import { getFood } from './getFood';
import { List } from './CityList';

describe('getFood', () => {
  it('should return the correct food for Paris', () => {
    const items: List = {
      value: 'Paris',
      rest: {
        value: 'London',
        rest: {
          value: 'Barcelona',
          rest: null,
        },
      },
    };
    const food = getFood(items);
    expect(food).toBe('Ratatouille');
  });

  it('should return the correct food for a London', () => {
    const items: List = {
      value: 'London',
      rest: {
        value: 'Barcelona',
        rest: {
          value: 'Paris',
          rest: null,
        },
      },
    };
    const food = getFood(items);
    expect(food).toBe('Sunday roast');
  });

  it('should return the correct food for a Barcelona', () => {
    const items: List = {
      value: 'Barcelona',
      rest: {
        value: 'Paris',
        rest: {
          value: 'London',
          rest: null,
        },
      },
    };
    const food = getFood(items);
    expect(food).toBe('Paella');
  });

  it('should return the correct food for Porto', () => {
    const items: List = {
      value: 'Porto',
      rest: {
        value: 'Milan',
        rest: {
          value: 'Geneva',
          rest: null,
        },
      },
    };
    const food = getFood(items);
    expect(food).toBe('Salted cod');
  });

  it('should return the correct food for Milan', () => {
    const items: List = {
      value: 'Milan',
      rest: {
        value: 'Geneva',
        rest: {
          value: 'Porto',
          rest: null,
        },
      },
    };
    const food = getFood(items);
    expect(food).toBe('Lasagna');
  });

  it('should return the default food for an unknown city', () => {
    const items: List = {
      value: 'UnknownCity',
      rest: {
        value: 'Porto',
        rest: {
          value: 'Milan',
          rest: null,
        },
      },
    };
    const food = getFood(items);
    expect(food).toBe('No food for this city');
  });
});
