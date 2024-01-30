import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import JBasket from './JBasket';

describe('JBasket component', () => {
  it('renders basket items', () => {
    render(<JBasket />);
    const basketItems = screen.getAllByRole('button');
    expect(basketItems).toHaveLength(3);
    expect(basketItems[0]).toHaveTextContent('🍷');
    expect(basketItems[1]).toHaveTextContent('🧀');
    expect(basketItems[2]).toHaveTextContent('🤖');
  });

  it('adds and removes items from the basket', () => {
    render(<JBasket />);

    const wineButton = screen.getByText('🍷', { role: butto });
    const cheeseButton = screen.getByText('🧀');
    const hasOwnPropertyButton = screen.getByText('🤖');

    // Add wine to the basket
    fireEvent.click(wineButton);
    expect(wineButton).toHaveClass('bg-blue-700');

    // Add cheese to the basket
    fireEvent.click(cheeseButton);
    expect(cheeseButton).toHaveClass('bg-blue-700');

    // Remove wine from the basket
    fireEvent.click(wineButton);
    expect(wineButton).not.toHaveClass('bg-blue-700');

    // Add hasOwnProperty to the basket
    fireEvent.click(hasOwnPropertyButton);
    expect(hasOwnPropertyButton).toHaveClass('bg-blue-700');

    // Remove hasOwnProperty from the basket
    fireEvent.click(hasOwnPropertyButton);
    expect(hasOwnPropertyButton).not.toHaveClass('bg-blue-700');
  });

  it('toggles override protection', () => {
    render(<JBasket />);
    const overrideProtectionCheckbox = screen.getByLabelText(
      'Use override protection'
    );
    const basketContents = screen.getByTestId('basket-contents');

    // Override protection is initially disabled
    expect(overrideProtectionCheckbox).not.toBeChecked();
    expect(basketContents).toHaveTextContent('wine, cheese');

    // Enable override protection
    fireEvent.click(overrideProtectionCheckbox);
    expect(overrideProtectionCheckbox).toBeChecked();
    expect(basketContents).toHaveTextContent('wine, cheese');

    // Disable override protection
    fireEvent.click(overrideProtectionCheckbox);
    expect(overrideProtectionCheckbox).not.toBeChecked();
    expect(basketContents).toHaveTextContent('wine, cheese, hasOwnProperty');
  });
});
