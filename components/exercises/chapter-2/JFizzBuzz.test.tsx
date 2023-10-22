import { render, screen } from '@testing-library/react';
import { JFizzBuzz } from './JFizzBuzz';

describe('JFizzBuzz', () => {
  it('renders "Fizz" for multiples of 3', () => {
    render(<JFizzBuzz count={3} />);
    expect(screen.getByText('Fizz')).toBeInTheDocument();
  });

  it('renders "Buzz" for multiples of 5', () => {
    render(<JFizzBuzz count={5} />);
    expect(screen.getByText('Buzz')).toBeInTheDocument();
  });

  it('renders "FizzBuzz" for multiples of 3 and 5', () => {
    render(<JFizzBuzz count={15} />);
    expect(screen.getByText('FizzBuzz')).toBeInTheDocument();
  });

  it('renders the count for non-multiples of 3 or 5', () => {
    render(<JFizzBuzz count={1} />);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('renders "FizzBuzz" for 0', () => {
    render(<JFizzBuzz count={0} />);
    expect(screen.getByText('FizzBuzz')).toBeInTheDocument();
  });
});
