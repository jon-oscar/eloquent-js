import { render, screen } from '@testing-library/react';
import CheckIcon from './CheckIcon';

describe('CheckIcon', () => {
  it('renders correctly', () => {
    render(<CheckIcon />);
    const svgElement = screen.getByTestId('check-icon');
    expect(svgElement).toBeInTheDocument();
  });

  it('sets props correctly', () => {
    render(<CheckIcon className='h-6 w-6' />);
    const svgElement = screen.getByTestId('check-icon');
    expect(svgElement).toHaveClass('h-6 w-6');
  });
});
