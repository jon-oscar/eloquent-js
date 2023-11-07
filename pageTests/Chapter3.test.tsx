import { render, screen } from '@testing-library/react';
import Chapter3 from '../pages/chapter3';

describe('Chapter3', () => {
  it('renders the title, subtitle and details', () => {
    render(<Chapter3 />);
    const title = screen.getByText(/Chapter 3/i);
    const subtitle = screen.getByText('Functions');
    const details = screen.getByText((details) =>
      details.startsWith(
        'This chapter taught you how to write your own functions.'
      )
    );
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(details).toBeInTheDocument();
  });

  it('renders the Minimum, JMinimum, Recursion, JRecursionIsEven, BeanCounting and JCountChars exercises', () => {
    render(<Chapter3 />);
    const minimum = screen.getByTestId('minimum');
    const jMinimum = screen.getByTestId('j-minimum');
    const recursion = screen.getByTestId('recursion');
    const JRecursionIsEven = screen.getByTestId('j-recursive-is-even');
    const beanCounting = screen.getByTestId('bean counting');
    const jCountChars = screen.getByTestId('j-count-chars');
    expect(minimum).toBeInTheDocument();
    expect(jMinimum).toBeInTheDocument();
    expect(recursion).toBeInTheDocument();
    expect(JRecursionIsEven).toBeInTheDocument();
    expect(beanCounting).toBeInTheDocument();
    expect(jCountChars).toBeInTheDocument();
  });

  it('renders the developer card for Oscar', () => {
    render(<Chapter3 />);
    const oscarCard = screen.getByText(/Oscar Reyes/i);
    expect(oscarCard).toBeInTheDocument();
  });
});
