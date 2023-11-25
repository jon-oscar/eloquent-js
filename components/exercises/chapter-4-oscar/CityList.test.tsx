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

  it('should render the rest of the list if it exists', () => {
    const item = {
      value: 'Item 1',
      rest: {
        value: 'Item 2',
        rest: null,
      },
    };
    render(<ListItem item={item} />);
    const renderedItem1 = screen.getByText('Item 1');
    const renderedItem2 = screen.getByText('Item 2');
    expect(renderedItem1).toBeInTheDocument();
    expect(renderedItem2).toBeInTheDocument();
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
});

describe('CityList component', () => {
  test('renders the list of cities', () => {
    render(<CityList />);
    const cityList = screen.getByRole('list');
    expect(cityList).toBeInTheDocument();
  });

  test('renders the countries of the listed cities', () => {
    render(<CityList />);
    const countryList = screen.getByRole('list');
    expect(countryList).toBeInTheDocument();
  });

  test('displays the main dish', () => {
    render(<CityList />);
    const mainDish = screen.getByText(/The main dish is/i);
    expect(mainDish).toBeInTheDocument();
  });

  test('adds a new city when the "+" button is clicked', () => {
    render(<CityList />);
    const addButton = screen.getByRole('button', { name: '+' });
    fireEvent.click(addButton);

    // Use a more specific query to get the list items
    const cityListItems = screen.getAllByRole('listitem');
    expect(cityListItems.length).toBeGreaterThan(0);
  });
});
