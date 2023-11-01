import { render, screen, fireEvent } from '@testing-library/react';
import BeanCounting, { countBs, countChar } from './BeanCounting';

describe('countBs', () => {
  it('returns the number of uppercase "B" characters in a string', () => {
    expect(countBs('BBC')).toBe(2);
    expect(countBs('BbB')).toBe(2);
    expect(countBs('abc')).toBe(0);
  });
});

describe('countChar', () => {
  it('returns the number of occurrences of a given character in a string', () => {
    expect(countChar('kakkerlak', 'k')).toBe(4);
    expect(countChar('banana', 'a')).toBe(3);
    expect(countChar('hello', 'z')).toBe(0);
  });
});

describe('BeanCounting', () => {
  it('renders the phrase value 0, when the input does not include B', () => {
    const phraseValue = 'Hello, world!';
    render(<BeanCounting phraseValue={phraseValue} />);
    expect(screen.getByText('This phrase has 0 B letter')).toBeInTheDocument();
  });
  it('renders the phrase value 1, when the input includes B', () => {
    const phraseValue = 'Bingo!';
    render(<BeanCounting phraseValue={phraseValue} />);
    expect(screen.getByText('This phrase has 1 B letter')).toBeInTheDocument();
  });
  it('renders the phrase value 0, when the input does not include s', () => {
    const phraseValue = 'Hello, world!';
    render(<BeanCounting phraseValue={phraseValue} />);
    expect(screen.getByText('This phrase has 0 s letter')).toBeInTheDocument();
  });
  it('renders the phrase value 1, when the input includes s', () => {
    const phraseValue = 'I like trains';
    render(<BeanCounting phraseValue={phraseValue} />);
    expect(screen.getByText('This phrase has 1 s letter')).toBeInTheDocument();
  });
});
