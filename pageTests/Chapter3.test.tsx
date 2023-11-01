import { render, screen } from '@testing-library/react';
import Chapter3 from '../pages/chapter3';
describe('Chapter3', () => {
  it('renders the title, subtitle and details', () => {
    render(<Chapter3 />);
    const title = screen.getByText(/Chapter 3/i);
    const subtitle = screen.getByText(/Functions/i);
    const details = screen.getByText((details) =>
      details.startsWith(
        'This chapter taught you how to write your own functions.'
      )
    );
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(details).toBeInTheDocument();
  });

  it('renders the Minimum, Recursion, and BeanCounting exercises', () => {
    render(<Chapter3 />);
    const minimum = screen.getByText(/Minimum/i);
    const recursion = screen.getByText(/Recursion/i);
    const beanCounting = screen.getByText(/Bean Counting/i);
    expect(minimum).toBeInTheDocument();
    expect(recursion).toBeInTheDocument();
    expect(beanCounting).toBeInTheDocument();
  });

  it('renders the developer card for Oscar', () => {
    render(<Chapter3 />);
    const oscarCard = screen.getByText(/Oscar Reyes/i);
    expect(oscarCard).toBeInTheDocument();
  });

  it('renders the developer card for Jon', () => {
    render(<Chapter3 />);
    const jonCard = screen.getByText(/Jon Snow/i);
    expect(jonCard).toBeInTheDocument();
  });
});
