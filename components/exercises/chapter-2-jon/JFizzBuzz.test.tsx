import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import JFizzBuzz, { INITIAL_STATE } from './JFizzBuzz';

describe('JFizzBuzz', () => {
  it('renders the FizzBuzz component', () => {
    render(<JFizzBuzz />);
    const fizzBuzzComponent = screen.getByTestId('j-fizz-buzz');
    expect(fizzBuzzComponent).toBeInTheDocument();
  });

  it('renders the correct initial state', () => {
    render(<JFizzBuzz />);
    const fizzBuzzComponent = screen.getByTestId('j-fizz-buzz');
    expect(fizzBuzzComponent).toHaveTextContent(INITIAL_STATE.toString());
  });

  it('renders the correct value after clicking the "+" button', () => {
    render(<JFizzBuzz />);
    const fizzBuzzComponent = screen.getByTestId('j-fizz-buzz');
    const increaseButton = screen.getByText('+');
    act(() => {
      increaseButton.click();
    });
    expect(fizzBuzzComponent).toHaveTextContent('Fizz');
  });

  it('renders the correct value after clicking the "-" button', () => {
    render(<JFizzBuzz />);
    const fizzBuzzComponent = screen.getByTestId('j-fizz-buzz');
    const decreaseButton = screen.getByText('-');
    act(() => {
      decreaseButton.click();
    });
    expect(fizzBuzzComponent).toHaveTextContent('Buzz');
  });
});
