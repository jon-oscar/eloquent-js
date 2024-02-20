import { render, screen, fireEvent } from '@testing-library/react';
import BorrowingMethod, { checkIfExist } from './BorrowingMethod';

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

describe('BorrowingMethod', () => {
  test('should display a message if the input food already exists in the list', () => {
    render(<BorrowingMethod />);
    const input = screen.getByLabelText('Phrase');

    fireEvent.change(input, { target: { value: 'hotdog' } });

    expect(
      screen.getByText('The food is already in the list')
    ).toBeInTheDocument();
  });

  test('should not display a message if the input food does not exist in the list', () => {
    render(<BorrowingMethod />);
    const input = screen.getByLabelText('Phrase');

    fireEvent.change(input, { target: { value: 'pizza' } });

    expect(screen.queryByText('The food is already in the list')).toBeNull();
  });
});
