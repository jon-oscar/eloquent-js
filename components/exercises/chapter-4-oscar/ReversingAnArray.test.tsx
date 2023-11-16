import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ReversingAnArray from './ReversingAnArray';

describe('ReversingAnArray', () => {
  it('renders two arrays with their initial values', () => {
    render(<ReversingAnArray />);
    const firstArray = screen.getByText('🟡🟢🟣🔴⚪️');
    expect(firstArray).toBeInTheDocument();
    const secondArray = screen.getByText('12345');
    expect(secondArray).toBeInTheDocument();
  });

  it('reverses the arrays when the "Click to reverse" button and Click to reverse in place is clicked', () => {
    render(<ReversingAnArray />);
    const reverseButton = screen.getByText('Click to reverse');
    fireEvent.click(reverseButton);
    expect(screen.getByText('⚪️🔴🟣🟢🟡')).toBeInTheDocument();
    const reverseButtonInPlace = screen.getByText('Click to reverse in place');
    fireEvent.click(reverseButtonInPlace);
    expect(screen.getByText('54321')).toBeInTheDocument();
  });
});
