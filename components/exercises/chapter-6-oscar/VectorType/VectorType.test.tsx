import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import VectorType from './VectorType';

describe('VectorType Component', () => {
  it('should render correctly', () => {
    render(<VectorType />);

    const increaseText = screen.getByText('Increase by 10');
    const widthInput = screen.getByLabelText('Width:');

    expect(increaseText).toBeInTheDocument();
    expect(widthInput).toBeInTheDocument();
  });

  it('should update width input correctly', () => {
    render(<VectorType />);
    const widthInput = screen.getByLabelText('Width:');

    fireEvent.change(widthInput, { target: { value: '80' } });

    expect((widthInput as HTMLInputElement).value).toBe('80');
  });

  it('should update height input correctly', () => {
    render(<VectorType />);
    const heightInput = screen.getByLabelText('Height:');

    fireEvent.change(heightInput, { target: { value: '70' } });

    expect((heightInput as HTMLInputElement).value).toBe('70');
  });
});
