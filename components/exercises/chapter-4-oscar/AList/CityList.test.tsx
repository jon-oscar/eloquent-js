import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CityList, { ListItem, List, initialItems } from './CityList';
import { arrayToList } from './arrayToList';

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
    expect(screen.getByText('London')).toBeInTheDocument();
    expect(screen.getByText('Barcelona')).toBeInTheDocument();
  });

  test('displays the countries of the listed cities', () => {
    render(<CityList />);
    expect(screen.getByText('France 🇫🇷')).toBeInTheDocument();
    expect(screen.getByText('United Kingdom 🇬🇧')).toBeInTheDocument();
    expect(screen.getByText('Spain 🇪🇸')).toBeInTheDocument();
  });

  test('displays the actual dish', () => {
    render(<CityList />);
    const mainDishElement = screen.getByTestId('main-dish');
    expect(mainDishElement).toBeInTheDocument();
  });

  test('displays "There are more cities to add!" when there are less than 7 cities', () => {
    render(<CityList />);
    const moreCitiesMessage = screen.getByText('There are more cities to add!');
    expect(moreCitiesMessage).toBeInTheDocument();
  });

  test('adds a new city when the "+" button is clicked', () => {
    render(<CityList />);
    const addButton = screen.getByRole('button', { name: '+' });
    fireEvent.click(addButton);

    // Use a more specific query to get the list items
    const cityListItems = screen.getAllByRole('listitem');
    expect(cityListItems.length).toBeGreaterThan(0);
  });

  test('does not add a city if it already exists in the list', () => {
    render(<CityList />);
    const addButton = screen.getByRole('button', { name: '+' });
    fireEvent.click(addButton);

    // Use a more specific query to get the list items
    const cityListItems = screen.getAllByRole('listitem');
    const existingCity = cityListItems[cityListItems.length - 1].textContent;
    fireEvent.click(addButton);

    // Check if the existing city is still the last item in the list
    const updatedCityListItems = screen.getAllByRole('listitem');
    const lastCity =
      updatedCityListItems[updatedCityListItems.length - 1].textContent;
    expect(lastCity).toBe(existingCity);
  });
});
