import { render, screen, fireEvent } from '@testing-library/react';
import DeepComparison from './DeepComparison';

// Mock the Utils module
jest.mock('./isDeepEqual.tsx', () => ({
  isDeepEqual: jest.fn(),
  lastWeekShoppingList: [],
  currentWeekShoppingList: [],
}));

describe('DeepComparison', () => {
  beforeEach(() => {
    // Clear any previous mock calls and reset the component state
    jest.clearAllMocks();
  });

  test('displays "It is not the same list" when the lists are not equal', () => {
    render(<DeepComparison />);

    // Click the add button to make the lists not equal
    fireEvent.click(screen.getByText('+'));

    // Assert that the "It is not the same list" message is displayed
    expect(screen.getByText('It is not the same list')).toBeInTheDocument();
  });

  it('handles the "Add" button click correctly', () => {
    render(<DeepComparison />);

    // Find and click the "Add" button
    fireEvent.click(screen.getByText('+'));

    // You can make assertions about the updated state or rendered content
    expect(screen.getByText('🍅 Tomatoes')).toBeInTheDocument();
  });

  it('handles the "Remove" button click correctly', () => {
    render(<DeepComparison />);

    // First, add an item
    fireEvent.click(screen.getByText('+'));

    // Then, find and click the "Remove" button
    fireEvent.click(screen.getByText('-'));

    // You can make assertions about the updated state or rendered content
    expect(screen.queryByText('🍅 Tomatoes')).not.toBeInTheDocument();
  });

  it('checks for equality and displays the result', () => {
    // Mock the isDeepEqual function to return true
    jest.spyOn(require('./isDeepEqual'), 'isDeepEqual').mockReturnValue(true);

    render(<DeepComparison />);

    // You can make assertions based on the result of isDeepEqual
    expect(screen.getByText('It is the same list')).toBeInTheDocument();
  });

  it('checks for equality and displays if it is not the same list', () => {
    // Mock the isDeepEqual function to return true
    jest.spyOn(require('./isDeepEqual'), 'isDeepEqual').mockReturnValue(false);

    render(<DeepComparison />);

    // You can make assertions based on the result of isDeepEqual
    expect(screen.getByText('It is not the same list')).toBeInTheDocument();
  });
});
