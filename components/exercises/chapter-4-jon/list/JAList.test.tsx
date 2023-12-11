import { fireEvent, render, screen } from '@testing-library/react';
import JAList, { INITIAL_LIST_ITEMS } from './JAList';

describe('JAList', () => {
  it('renders the initial list items', () => {
    render(<JAList />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(INITIAL_LIST_ITEMS.length);
    INITIAL_LIST_ITEMS.forEach((item, i) => {
      expect(listItems[i]).toHaveTextContent(item);
    });
  });

  it('adds a new item to the list', () => {
    render(<JAList />);
    const input = screen.getByLabelText('New item');
    const addButton = screen.getByRole('button', { name: 'Add' });

    const newItemValue = 'Apples';
    fireEvent.change(input, { target: { value: newItemValue } });
    fireEvent.click(addButton);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(INITIAL_LIST_ITEMS.length + 1);
    expect(listItems[0]).toHaveTextContent(newItemValue);
  });
});
