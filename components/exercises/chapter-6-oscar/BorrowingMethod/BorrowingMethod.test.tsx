import { render, screen, fireEvent } from '@testing-library/react';
import BorrowingMethod, { checkIfExist } from './BorrowingMethod';

describe('checkIfExist', () => {
  it('should return true if the key exists in the list', () => {
    const list = {
      hotdog: true,
      chips: true,
      hamburger: true,
      hasOwnProperty: true,
    };
    const key = 'hotdog';
    const result = checkIfExist(list, key);
    expect(result).toBe(true);
  });

  it('should return false if the key does not exist in the list', () => {
    const list = {
      hotdog: true,
      chips: true,
      hamburger: true,
      hasOwnProperty: true,
    };
    const key = 'pizza';
    const result = checkIfExist(list, key);
    expect(result).toBe(false);
  });
});

describe('BorrowingMethod', () => {
  it('should render a message if the input exists in the list', () => {
    render(<BorrowingMethod />);
    const inputElement = screen.getByPlaceholderText('Type a food');
    fireEvent.change(inputElement, { target: { value: 'hotdog' } });

    const messageElement = screen.getByText('The food is already in the list');
    expect(messageElement).toBeInTheDocument();
  });

  it('should not render a message if the input does not exist in the list', () => {
    render(<BorrowingMethod />);
    const messageElement = screen.getByText('The food is already in the list');
    expect(messageElement).not.toBeInTheDocument();
  });
});
