import { render, screen } from '@testing-library/react';
import Flattening, { phrases } from './Flattening';

describe('Flattening', () => {
  it('should render the correct number of phrases', () => {
    render(<Flattening />);
    for (const phrase of phrases) {
      const phraseElement = screen.getByText(phrase.phrase);
      expect(phraseElement).toBeInTheDocument();
    }
  });

  it('should render the correct number of icons', () => {
    render(<Flattening />);
    for (const phrase of phrases) {
      const phraseElement = screen.getByText(phrase.icon);
      expect(phraseElement).toBeInTheDocument();
    }
  });
});
