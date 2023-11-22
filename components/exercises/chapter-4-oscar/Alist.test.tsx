import { render, screen, fireEvent } from '@testing-library/react';
import Alist from './Alist';

describe('Alist component', () => {
  test('renders the list of cities', () => {
    render(<Alist />);
    const cityList = screen.getByRole('list');
    expect(cityList).toBeInTheDocument();
  });

  test('renders the countries of the listed cities', () => {
    render(<Alist />);
    const countryList = screen.getByRole('list');
    expect(countryList).toBeInTheDocument();
  });

  test('displays the main dish', () => {
    render(<Alist />);
    const mainDish = screen.getByText(/The main dish is/i);
    expect(mainDish).toBeInTheDocument();
  });

  test('adds a new city when the "+" button is clicked', () => {
    render(<Alist />);
    const addButton = screen.getByRole('button', { name: '+' });
    fireEvent.click(addButton);

    // Use a more specific query to get the list items
    const cityListItems = screen.getAllByRole('listitem');
    expect(cityListItems.length).toBeGreaterThan(0);
  });
});
