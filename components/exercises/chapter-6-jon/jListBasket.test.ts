import {
  jListObjectsInBasket,
  jListObjectsInBasketOverrideSafe,
} from './jListBasket';

describe('jListObjectsInBasket', () => {
  it('returns a string with a list of items in the basket', () => {
    const basket = {
      cheese: true,
      wine: false,
    };
    const result = jListObjectsInBasket(basket);
    expect(result).toBe('In this basket, I have: cheese');
  });

  it('returns a string with an Error message when an overriding method is in the basket', () => {
    const basket = {
      cheese: false,
      wine: false,
      hasOwnProperty: true,
    };
    const result = jListObjectsInBasket(basket);
    expect(result).toBe('In this basket, I have: an Error!');
  });
});

describe('jListObjectsInBasketOverrideSafe', () => {
  it('returns a string with a list of items in the basket', () => {
    const basket = {
      cheese: true,
      wine: true,
      hasOwnProperty: false,
    };
    const result = jListObjectsInBasketOverrideSafe(basket);
    expect(result).toBe('In this basket, I have: cheese, wine');
  });

  it('returns a string with a list of items when an overriding method is in the basket', () => {
    const basket = {
      cheese: true,
      wine: true,
      hasOwnProperty: true,
    };
    const result = jListObjectsInBasketOverrideSafe(basket);
    expect(result).toBe('In this basket, I have: cheese, wine, hasOwnProperty');
  });
});
