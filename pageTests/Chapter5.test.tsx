import { render, screen } from '@testing-library/react';
import Chapter5 from '../pages/chapter5';

describe('Chapter5', () => {
  it('renders the title, subtitle and details', () => {
    render(<Chapter5 />);
    const title = screen.getByText(/Chapter 5/i);
    const subtitle = screen.getByText('Flattening');
    const details = screen.getByText((details) =>
      details.startsWith(
        'Being able to pass function values to other functions is a deeply useful aspect of JavaScript.'
      )
    );
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(details).toBeInTheDocument();
  });

  it('renders the flattering exercise', () => {
    render(<Chapter5 />);
    const flattering = screen.getByText(/Flattening/i);
    expect(flattering).toBeInTheDocument();
  });

  it('renders the developer card for Oscar Reyes', () => {
    render(<Chapter5 />);
    const oscarCard = screen.getByText(/Oscar Reyes/i);
    expect(oscarCard).toBeInTheDocument();
  });
});
