import { render, screen } from '@testing-library/react';
import Chapter6 from '../pages/chapter6';

describe('Chapter6', () => {
  it('renders the title, subtitle and details', () => {
    render(<Chapter6 />);
    const title = screen.getByText(/Chapter 6/i);
    const subtitle = screen.getByText('The Secret Life of Objects');
    const details = screen.getByText((details) =>
      details.startsWith(
        'So objects do more than just hold their own properties. They have prototypes, which are other objects.'
      )
    );
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(details).toBeInTheDocument();
  });

  it('renders the vector type exercise', () => {
    render(<Chapter6 />);
    const vectorType = screen.getByText(/A Vector Type/i);
    expect(vectorType).toBeInTheDocument();
    const jVector = screen.getByText(/Adding and subtracting vectors/i);
    expect(jVector).toBeInTheDocument();
  });

  it('renders the groups exercise', () => {
    render(<Chapter6 />);
    const vectorType = screen.getByText(/Groups/i);
    expect(vectorType).toBeInTheDocument();
  });

  it('renders the developer card for Oscar Reyes', () => {
    render(<Chapter6 />);
    const oscarCard = screen.getByText(/Oscar Reyes/i);
    expect(oscarCard).toBeInTheDocument();
  });
});
