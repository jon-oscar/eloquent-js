import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import JPyramid from './JPyramid';

describe('JPyramid', () => {
  it('renders the JPyramid component', () => {
    render(<JPyramid />);
    const pyramidComponent = screen.getByTestId('j-pyramid');
    expect(pyramidComponent).toBeInTheDocument();
  });

  it('renders the correct initial state', () => {
    render(<JPyramid />);
    const dots = screen.getAllByTestId('j-pyramid-dot');
    expect(dots).toHaveLength(6);
  });

  it('renders the correct value after clicking the "+" button', () => {
    render(<JPyramid />);
    const increaseButton = screen.getByText('+');
    act(() => {
      increaseButton.click();
    });
    const dots = screen.getAllByTestId('j-pyramid-dot');
    expect(dots).toHaveLength(10);
  });

  it('renders the correct value after clicking the "-" button', () => {
    render(<JPyramid />);
    const decreaseButton = screen.getByText('-');
    act(() => {
      decreaseButton.click();
    });
    const dots = screen.getAllByTestId('j-pyramid-dot');
    expect(dots).toHaveLength(3);
  });

  it('renders the correct value after clicking the "+" button 3 times (reset to one row)', () => {
    render(<JPyramid />);
    const increaseButton = screen.getByText('+');
    act(() => {
      increaseButton.click();
    });
    act(() => {
      increaseButton.click();
    });
    act(() => {
      increaseButton.click();
    });
    const dots = screen.getAllByTestId('j-pyramid-dot');
    expect(dots).toHaveLength(1);
  });
});
