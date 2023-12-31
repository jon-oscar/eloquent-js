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

  it('renders the The sum of a range, reversing an array, a list and deep comparison exercises', () => {
    render(<Chapter4 />);
    const sumOfARange = screen.getByText(/The sum of a range/i);
    expect(sumOfARange).toBeInTheDocument();
    const ReversingAnArray = screen.getByText(/Reversing an array/i);
    expect(ReversingAnArray).toBeInTheDocument();
    const CityList = screen.getByText(/A list/i);
    expect(CityList).toBeInTheDocument();
    const DeepComparison = screen.getByText(/Deep comparison/i);
    expect(DeepComparison).toBeInTheDocument();
    const jArrayReversion = screen.getByText(/Reversion Arrays/i);
    expect(jArrayReversion).toBeInTheDocument();
    const jAList = screen.getByText(/Prepend to linked list/i);
    expect(jAList).toBeInTheDocument();
    const jDeepComparison = screen.getByText(/Compare two texts/i);
    expect(jDeepComparison).toBeInTheDocument();
  });

  it('renders the developer card for Oscar Reyes', () => {
    render(<Chapter4 />);
    const oscarCard = screen.getByText(/Oscar Reyes/i);
    expect(oscarCard).toBeInTheDocument();
  });
});
