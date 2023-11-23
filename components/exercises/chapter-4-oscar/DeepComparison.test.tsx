import { render, screen, fireEvent } from '@testing-library/react';
import DeepComparison from './DeepComparison';

// Mock the Utils module
jest.mock('./Utils', () => ({
  checkEqual: jest.fn(),
  lastWeekList: [],
  currentWeekList: [],
}));

describe('DeepComparison', () => {
  test('displays "It is not the same list" when the lists are not equal', () => {
    render(<DeepComparison />);

    // Click the add button to make the lists not equal
    fireEvent.click(screen.getByText('+'));

    // Assert that the "It is not the same list" message is displayed
    expect(screen.getByText('It is not the same list')).toBeInTheDocument();
  });

  beforeEach(() => {
    // Clear any previous mock calls and reset the component state
    jest.clearAllMocks();
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
    // Mock the checkEqual function to return true
    jest.spyOn(require('./Utils'), 'checkEqual').mockReturnValue(true);

    render(<DeepComparison />);

    // You can make assertions based on the result of checkEqual
    expect(screen.getByText('It is the same list')).toBeInTheDocument();
  });
});
