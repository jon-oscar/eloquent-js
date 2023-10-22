import { render, screen } from '@testing-library/react';
import JPyramid from './JPyramid';

describe('JPyramid', () => {
  it('renders a single dot for rows = 1', () => {
    render(<JPyramid rows={1} />);
    const dots = screen.getAllByTestId('j-pyramid-dot');
    expect(dots.length).toBe(1);
  });

  it('renders a pyramid of dots for rows = 3', () => {
    render(<JPyramid rows={3} />);
    const dots = screen.getAllByTestId('j-pyramid-dot');
    expect(dots.length).toBe(6);
  });

  it('renders a pyramid of dots for rows = 5', () => {
    render(<JPyramid rows={5} />);
    const dots = screen.getAllByTestId('j-pyramid-dot');
    expect(dots.length).toBe(15);
  });
});
