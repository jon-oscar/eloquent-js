import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MembersGroup from './MembersGroup';

describe('MembersGroup', () => {
  it('should add a member when the "Add Member" button is clicked', () => {
    render(<MembersGroup />);

    const inputElement = screen.getByPlaceholderText('Enter your member name');
    const addButton = screen.getByText('Add Member');

    fireEvent.change(inputElement, { target: { value: 'John' } });
    fireEvent.click(addButton);

    expect(screen.getByText('John')).toBeInTheDocument();
  });

  it('should not add a member when the input is empty', () => {
    render(<MembersGroup />);

    const inputElement = screen.getByPlaceholderText('Enter your member name');
    const addButton = screen.getByText('Add Member');

    fireEvent.change(inputElement, { target: { value: '' } });
    fireEvent.click(addButton);

    expect(screen.queryByText('John')).not.toBeInTheDocument();
  });

  it('should remove a member when the "Delete Member" button is clicked', () => {
    render(<MembersGroup />);

    const inputElement = screen.getByPlaceholderText('Enter your member name');
    const addButton = screen.getByText('Add Member');
    const deleteButton = screen.getByText('Delete Member');

    fireEvent.change(inputElement, { target: { value: 'John' } });
    fireEvent.click(addButton);
    fireEvent.change(inputElement, { target: { value: 'John' } }); // Input the same name again
    fireEvent.click(deleteButton);

    expect(screen.queryByText('John')).not.toBeInTheDocument();
  });

  it('should disable "Add Member" when the input is empty', () => {
    render(<MembersGroup />);

    const inputElement = screen.getByPlaceholderText('Enter your member name');
    const addButton = screen.getByText('Add Member');

    expect(addButton).toBeDisabled();

    fireEvent.change(inputElement, { target: { value: 'John' } });

    expect(addButton).not.toBeDisabled();
  });

  it('should show an error message when trying to add a duplicate member', () => {
    render(<MembersGroup />);

    const inputElement = screen.getByPlaceholderText('Enter your member name');
    const addButton = screen.getByText('Add Member');

    fireEvent.change(inputElement, { target: { value: 'John' } });
    fireEvent.click(addButton);

    fireEvent.change(inputElement, { target: { value: 'John' } });

    expect(
      screen.getByText('Member is already in the list')
    ).toBeInTheDocument();
  });
});
