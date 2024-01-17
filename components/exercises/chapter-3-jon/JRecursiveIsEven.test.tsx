import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import JRecursiveIsEven from './JRecursiveIsEven';

describe('JRecursiveIsEven', () => {
  it('renders the JRecursiveIsEven component', () => {
    render(<JRecursiveIsEven />);
    const recursiveIsEvenComponent = screen.getByTestId('j-recursive-is-even');
    expect(recursiveIsEvenComponent).toBeInTheDocument();
  });

  it('renders the correct initial state', () => {
    render(<JRecursiveIsEven />);
    expect(screen.getByText('Is 7 Even?')).toBeInTheDocument();
  });

  it('renders the correct value after clicking the "+" button', () => {
    render(<JRecursiveIsEven />);
    const increaseButton = screen.getByText('+');
    act(() => {
      increaseButton.click();
    });
    expect(screen.getByText('Is 8 Even?')).toBeInTheDocument();
  });

  it('renders the correct value after clicking the "-" button', () => {
    render(<JRecursiveIsEven />);
    const decreaseButton = screen.getByText('-');
    act(() => {
      decreaseButton.click();
    });
    expect(screen.getByText('Is 6 Even?')).toBeInTheDocument();
  });

  it('recursively calculates if the number is odd', () => {
    render(<JRecursiveIsEven />);
    expect(screen.getByText('Is 7 Even?')).toBeInTheDocument();
    let calculateButton = screen.getByText('7 - 2');
    act(() => {
      calculateButton.click();
    });
    expect(screen.getByText('Is 7 Even?')).toBeInTheDocument();
    calculateButton = screen.getByText('5 - 2');
    act(() => {
      calculateButton.click();
    });
    expect(screen.getByText('Is 7 Even?')).toBeInTheDocument();
    calculateButton = screen.getByText('3 - 2');
    act(() => {
      calculateButton.click();
    });
    expect(screen.getByText('7 is Odd!')).toBeInTheDocument();
  });

  it('recursively calculates if the number is even', () => {
    render(<JRecursiveIsEven />);
    expect(screen.getByText('Is 7 Even?')).toBeInTheDocument();
    const decreaseButton = screen.getByText('-');
    act(() => {
      decreaseButton.click();
    });
    expect(screen.getByText('Is 6 Even?')).toBeInTheDocument();
    let calculateButton = screen.getByText('6 - 2');
    act(() => {
      calculateButton.click();
    });
    expect(screen.getByText('Is 6 Even?')).toBeInTheDocument();
    calculateButton = screen.getByText('4 - 2');
    act(() => {
      calculateButton.click();
    });
    expect(screen.getByText('Is 6 Even?')).toBeInTheDocument();
    calculateButton = screen.getByText('2 - 2');
    act(() => {
      calculateButton.click();
    });
    expect(screen.getByText('6 is Even!')).toBeInTheDocument();
  });

  it('works with negative numbers', () => {
    render(<JRecursiveIsEven />);
    expect(screen.getByText('Is 7 Even?')).toBeInTheDocument();
    const decreaseButton = screen.getByText('-');
    act(() => decreaseButton.click());
    act(() => decreaseButton.click());
    act(() => decreaseButton.click());
    act(() => decreaseButton.click());
    act(() => decreaseButton.click());
    act(() => decreaseButton.click());
    act(() => decreaseButton.click());
    act(() => decreaseButton.click());
    act(() => decreaseButton.click());
    act(() => decreaseButton.click());
    expect(screen.getByText('Is -3 Even?')).toBeInTheDocument();
    let calculateButton = screen.getByText('-3 - 2');
    act(() => {
      calculateButton.click();
    });
    expect(screen.getByText('Is -3 Even?')).toBeInTheDocument();
    calculateButton = screen.getByText('3 - 2');
    act(() => {
      calculateButton.click();
    });
    expect(screen.getByText('-3 is Odd!')).toBeInTheDocument();
  });
});
