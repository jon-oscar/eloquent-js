import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import JParrots from './JParrots';

describe('JParrots', () => {
  it('renders the parrot buttons', () => {
    render(<JParrots />);
    const parrotButtons = screen.getAllByRole('button');
    expect(parrotButtons).toHaveLength(6);
  });

  it('adds a parrot when a button is clicked, disabling the button', async () => {
    render(<JParrots />);
    const addButton = screen.getByRole('button', { name: 'banana' });
    let parrotImage = screen.queryByAltText('banana parrot');
    expect(parrotImage).not.toBeInTheDocument();
    expect(addButton).not.toBeDisabled();

    await userEvent.click(addButton);
    parrotImage = screen.getByAltText('banana parrot');
    expect(parrotImage).toBeInTheDocument();
    expect(addButton).toBeDisabled();
  });

  it('removes a parrot when the parrot image is clicked, enabling the corresponding button', async () => {
    render(<JParrots />);
    const addButton = screen.getByRole('button', { name: 'banana' });

    await userEvent.click(addButton);
    const parrotImage = screen.getByAltText('banana parrot');
    expect(parrotImage).toBeInTheDocument();
    expect(addButton).toBeDisabled();

    await userEvent.click(parrotImage);
    expect(parrotImage).not.toBeInTheDocument();
    expect(addButton).not.toBeDisabled();
  });
});
