import { render, screen } from '@testing-library/react';
import { getFlattenedArray } from './getFlattenedArray';
import Flattening from './Flattening';

describe('Flattening', () => {
  it('renders the flattened phrases correctly', () => {
    render(<Flattening />);
  });

  it('should flatten an array of arrays with 2 positions correctly', () => {
    const result = getFlattenedArray([['a', 'b'], ['c']]);
    expect(result).toEqual(['a', 'b', 'c']);
  });

  it('should flatten the an array of arrays with 3 positions correctly', () => {
    const result = getFlattenedArray([[1, 2], [3, 4], [5]]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should render the correct number of phrases', () => {
    render(<Flattening />);
    const phraseElements = screen.getAllByTestId(/^phrase-/);
    expect(phraseElements.length).toBe(7);
  });
});
