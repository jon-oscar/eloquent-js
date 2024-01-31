import React from 'react';
import { render, screen } from '@testing-library/react';
import JBasket from './JBasket';
import userEvent from '@testing-library/user-event';

describe('JBasket component', () => {
  it('adds and removes items from the basket', async () => {
    render(<JBasket />);

    // Test buttons
    const basketItems = screen.getAllByRole('button');
    expect(basketItems).toHaveLength(3);
    const [wineBtn, cheeseBtn, robotBtn] = basketItems;
    expect(wineBtn).toHaveTextContent('🍷');
    expect(cheeseBtn).toHaveTextContent('🧀');
    expect(robotBtn).toHaveTextContent('🤖');

    expect(screen.queryAllByTestId('basket-icon')).toHaveLength(3);

    // Remove items
    await userEvent.click(wineBtn);
    expect(screen.queryAllByTestId('basket-icon')).toHaveLength(2);
    await userEvent.click(cheeseBtn);
    expect(screen.queryAllByTestId('basket-icon')).toHaveLength(1);
    await userEvent.click(robotBtn);
    expect(screen.queryAllByTestId('basket-icon')).toHaveLength(0);

    // Add items
    await userEvent.click(cheeseBtn);
    expect(screen.queryAllByTestId('basket-icon')).toHaveLength(1);
  });

  it('lists items with and without override protection', async () => {
    render(<JBasket />);

    expect(
      screen.queryByText('In this basket, I have: wine, cheese')
    ).not.toBeInTheDocument();
    expect(
      screen.getByText('In this basket, I have: an Error!')
    ).toBeInTheDocument();

    const overrideProtectionCheckbox = screen.getByLabelText(
      'Use override protection'
    );

    expect(overrideProtectionCheckbox).not.toBeChecked();
    await userEvent.click(overrideProtectionCheckbox);
    expect(overrideProtectionCheckbox).toBeChecked();
    expect(
      screen.queryByText('In this basket, I have: an Error!')
    ).not.toBeInTheDocument();
    expect(
      screen.getByText('In this basket, I have: wine, cheese')
    ).toBeInTheDocument();
  });
});
