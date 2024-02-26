import { checkIfExist } from './checkIfExist';

describe('checkIfExist', () => {
  it('should return true if the object has the specified key', () => {
    const foodList = {
      hotdog: true,
      chips: true,
      hamburger: true,
      hasOwnProperty: true,
    };

    expect(checkIfExist(foodList, 'hotdog')).toBe(true);
    expect(checkIfExist(foodList, 'chips')).toBe(true);
    expect(checkIfExist(foodList, 'hamburger')).toBe(true);
    expect(checkIfExist(foodList, 'hasOwnProperty')).toBe(true);
  });

  it('should return false if the object does not have the specified key', () => {
    const foodList = {
      hotdog: true,
      chips: true,
      hamburger: true,
      hasOwnProperty: true,
    };

    expect(checkIfExist(foodList, 'pizza')).toBe(false);
    expect(checkIfExist(foodList, 'fries')).toBe(false);
    expect(checkIfExist(foodList, 'soda')).toBe(false);
  });
});
