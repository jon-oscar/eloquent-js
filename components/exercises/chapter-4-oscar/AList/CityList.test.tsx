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
    const mainDishElement = screen.getByTestId('main-dish');
    expect(mainDishElement).toBeInTheDocument();
  });

  test('adds new cities when the "+" button and displays the correct main dish', () => {
    render(<CityList />);
    const addButton = screen.getByTestId('add-button');

    // Define the expected dish for France
    const expectedDish1 = 'Ratatouille';
    const mainDish1 = screen.getByTestId('main-dish');
    expect(mainDish1).toHaveTextContent(`The main dish is ${expectedDish1}`);

    fireEvent.click(addButton);

    // Define the expected dish for United Kingdom
    const expectedDish2 = 'Sunday roast';
    const mainDish2 = screen.getByTestId('main-dish');
    expect(mainDish2).toHaveTextContent(`The main dish is ${expectedDish2}`);

    fireEvent.click(addButton);

    // Define the expected dish for Spain
    const expectedDish3 = 'Paella';
    const mainDish3 = screen.getByTestId('main-dish');
    expect(mainDish3).toHaveTextContent(`The main dish is ${expectedDish3}`);
  });

  test('displays "There are more cities to add!" when there are less than 7 cities', () => {
    render(<CityList />);
    const moreCitiesMessage = screen.getByText('There are more cities to add!');
    expect(moreCitiesMessage).toBeInTheDocument();
  });

  test('displays "No more cities to add" when there are exactly 7 cities', () => {
    render(<CityList />);
    const addButton = screen.getByTestId('add-button');

    // Simulate clicking the "+" button until there are 7 cities
    for (let i = 0; i < 6; i++) {
      fireEvent.click(addButton);
    }

    // Use a more specific query to get the list items
    const cityListItems = screen.getAllByRole('listitem');
    expect(cityListItems.length).toBe(7);

    // Check if the "No more cities to add" message is displayed after adding 7 cities
    expect(screen.getByTestId('no-more-cities-message')).toBeInTheDocument();
  });
});
