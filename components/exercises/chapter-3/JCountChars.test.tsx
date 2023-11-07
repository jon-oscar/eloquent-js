import { fireEvent, render, screen } from '@testing-library/react';
import JCountChars from './JCountChars';

describe('JCountChars', () => {
  it('renders the expected components', () => {
    render(<JCountChars />);
    const component = screen.getByTestId('j-count-chars');
    expect(component).toBeInTheDocument();
    const radioButtons = screen.getAllByRole('radio');
    expect(radioButtons.length).toBe(3);
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  });

  it('renders the correct character count for each word when counting "a"', () => {
    render(<JCountChars />);
    const wordCountMap = {
      BBC: 0,
      kakkerlak: 2,
      chase: 1,
      prejudice: 0,
      revival: 1,
      sacred: 1,
    };
    const aRadioButton = screen.getByTestId('j-count-chars-a-radio');
    fireEvent.click(aRadioButton);
    Object.entries(wordCountMap).forEach(([word, count]) => {
      const countCell = screen.getByTestId(`j-count-chars-${word}-count`);
      expect(countCell).toHaveTextContent(count.toString());
    });
  });

  it('renders the correct character count for each word when counting "B"', () => {
    render(<JCountChars />);
    const wordCountMap = {
      BBC: 2,
      kakkerlak: 0,
      chase: 0,
      prejudice: 0,
      revival: 0,
      sacred: 0,
    };
    const bRadioButton = screen.getByTestId('j-count-chars-B-radio');
    fireEvent.click(bRadioButton);
    Object.entries(wordCountMap).forEach(([word, count]) => {
      const countCell = screen.getByTestId(`j-count-chars-${word}-count`);
      expect(countCell).toHaveTextContent(count.toString());
    });
  });

  it('renders the correct character count for each word when counting "c"', () => {
    render(<JCountChars />);
    const wordCountMap = {
      BBC: 0,
      kakkerlak: 0,
      chase: 1,
      prejudice: 1,
      revival: 0,
      sacred: 1,
    };
    const cRadioButton = screen.getByTestId('j-count-chars-c-radio');
    fireEvent.click(cRadioButton);
    Object.entries(wordCountMap).forEach(([word, count]) => {
      const countCell = screen.getByTestId(`j-count-chars-${word}-count`);
      expect(countCell).toHaveTextContent(count.toString());
    });
  });
});
