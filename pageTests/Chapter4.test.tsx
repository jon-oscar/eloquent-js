import { render, screen } from '@testing-library/react';
import Chapter4 from '../pages/chapter4';

describe('Chapter4', () => {
  it('renders the title, subtitle and details', () => {
    render(<Chapter4 />);
    const title = screen.getByText(/Chapter 4/i);
    const subtitle = screen.getByText('Data Structures: Objects and Arrays');
    const details = screen.getByText((details) =>
      details.startsWith(
        'Objects and arrays (which are a specific kind of object) provide ways to group several'
      )
    );
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(details).toBeInTheDocument();
  });

  it('renders the The sum of a range exercise', () => {
    render(<Chapter4 />);
    const sumOfARange = screen.getByText(/The sum of a range/i);
    expect(sumOfARange).toBeInTheDocument();
  });

  it('renders the developer card for Oscar Reyes', () => {
    render(<Chapter4 />);
    const oscarCard = screen.getByText(/Oscar Reyes/i);
    expect(oscarCard).toBeInTheDocument();
  });
});
