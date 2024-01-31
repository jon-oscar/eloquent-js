import { render, screen } from '@testing-library/react';
import Chapter6 from '../pages/chapter6';

describe('Chapter6', () => {
  it('renders the title and subtitle', () => {
    render(<Chapter6 />);
    const title = screen.getByText(/Chapter 6/i);
    const subtitle = screen.getByText('The Secret Life of Objects');
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });

  it('renders the vector exercise', () => {
    render(<Chapter6 />);
    const jVector = screen.getByText(/Adding and subtracting vectors/i);
    expect(jVector).toBeInTheDocument();
  });

  it('renders the group exercise', () => {
    render(<Chapter6 />);
    const jGroup = screen.getByText(/party parrots/i);
    expect(jGroup).toBeInTheDocument();
  });

  it('renders the borrow a method exercise', () => {
    render(<Chapter6 />);
    const jBasket = screen.getByText(/Basket with overrides/i);
    expect(jBasket).toBeInTheDocument();
  });

  it('renders the developer card for Oscar Reyes', () => {
    render(<Chapter6 />);
    const oscarCard = screen.getByText(/Oscar Reyes/i);
    expect(oscarCard).toBeInTheDocument();
  });
});
