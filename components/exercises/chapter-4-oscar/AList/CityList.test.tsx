import { render, screen, fireEvent } from '@testing-library/react';
import CityList, { ListItem } from './CityList';

describe('ListItem', () => {
  it('should render the item value', () => {
    const item = {
      value: 'Item 1',
      rest: null,
    };
    render(<ListItem item={item} />);
    const renderedItem = screen.getByText('Item 1');
    expect(renderedItem).toBeInTheDocument();
  });

  it('should render "No more cities to visit" if the rest of the list is null', () => {
    const item = {
      value: 'Item 1',
      rest: null,
    };
    render(<ListItem item={item} />);
    const renderedItem = screen.getByText('No more cities to visit');
    expect(renderedItem).toBeInTheDocument();
  });

  it('should render the rest of the list if it exists', () => {
    const item = {
      value: 'Item 1',
      rest: {
        value: 'Item 2',
        rest: null,
      },
    };
    render(<ListItem item={item} />);
    const renderedItem = screen.getByText('Item 2');
    expect(renderedItem).toBeInTheDocument();
  });
});

describe('CityList component', () => {
  test('renders the list of cities', () => {
    render(<CityList />);
    expect(screen.getByText('Paris')).toBeInTheDocument();
  });

  test('displays the countries of the listed cities', () => {
    render(<CityList />);
    expect(screen.getByText('France 🇫🇷')).toBeInTheDocument();
  });

  test('displays the actual dish', () => {
    render(<CityList />);
    const mainDish = screen.getByText('The main dish is Ratatouille');
    expect(mainDish).toBeInTheDocument();
  });

  test('adds new cities when the "+" button and displays the correct main dish', () => {
    render(<CityList />);
    const addButton = screen.getByText('+');

    fireEvent.click(addButton);

    // Expected main  dish for United Kingdom
    const expectedDish2 = screen.getByText('The main dish is Sunday roast');
    expect(expectedDish2).toBeInTheDocument();

    fireEvent.click(addButton);

    // Expected main  dish for Spain
    const expectedDish3 = screen.getByText('The main dish is Paella');
    expect(expectedDish3).toBeInTheDocument();
  });

  test('displays "There are more cities to add!" when there are less than 7 cities', () => {
    render(<CityList />);
    expect(
      screen.getByText('There are more cities to add!')
    ).toBeInTheDocument();
  });

  test('displays "No more cities to add" when there are exactly 7 cities', () => {
    render(<CityList />);
    const addButton = screen.getByText('+');

    // Simulate clicking the "+" button until there are 7 cities
    for (let i = 0; i < 6; i++) {
      fireEvent.click(addButton);
    }

    // Use a more specific query to get the list items
    const cityListItems = screen.getAllByRole('listitem');
    expect(cityListItems.length).toBe(7);

    // Check if the "No more cities to add" message is displayed after adding 7 cities
    expect(screen.getByText('No more cities to add')).toBeInTheDocument();
  });
});
