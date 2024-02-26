import { render, screen, fireEvent } from '@testing-library/react';
import BorrowingMethod from './BorrowingMethod';

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
