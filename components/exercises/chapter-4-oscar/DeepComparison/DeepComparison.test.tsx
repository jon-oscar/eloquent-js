import { render, screen, fireEvent } from '@testing-library/react';
import DeepComparison from './DeepComparison';

describe('DeepComparison', () => {
  it('should render the component showing Grocery of last week and Grocery of this week', () => {
    render(<DeepComparison />);
    const groceryLastWeek = screen.getByText('Grocery of last week');
    const groceryThisWeek = screen.getByText('Grocery of this week');
    expect(groceryLastWeek).toBeInTheDocument();
    expect(groceryThisWeek).toBeInTheDocument();
  });

  it('should add an element to the grocery list when the "+" button is clicked', () => {
    render(<DeepComparison />);
    const addButton = screen.getByText('+');
    fireEvent.click(addButton);
    const groceryItems = screen.getAllByTestId('grocery-item');
    expect(groceryItems).toHaveLength(5);
  });

  it('should remove an element from the grocery list when the "-" button is clicked', () => {
    render(<DeepComparison />);
    const removeButton = screen.getByText('-');
    fireEvent.click(removeButton);
    const groceryItems = screen.getAllByTestId('grocery-item');
    expect(groceryItems).toHaveLength(3);
  });

  it('should display "It is the same list" message when lists are deeply equal', () => {
    render(<DeepComparison />);
    const sameListMessage = screen.getByTestId('same-list-message');
    expect(sameListMessage).toBeInTheDocument();
    expect(sameListMessage).toHaveTextContent('It is the same list');
  });

  it('should display "It is not the same list" message when lists are not deeply equal', () => {
    render(<DeepComparison />);
    const addButton = screen.getByText('+');
    fireEvent.click(addButton);
    const notSameListMessage = screen.getByTestId('not-same-list-message');
    expect(notSameListMessage).toBeInTheDocument();
    expect(notSameListMessage).toHaveTextContent('It is not the same list');
  });
});
