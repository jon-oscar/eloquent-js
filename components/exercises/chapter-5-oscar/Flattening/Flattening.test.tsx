import { render, screen } from '@testing-library/react';
import Flattening, { iconsWithPhrases } from './Flattening';

describe('Flattening', () => {
  it('should render the correct number of phrases', () => {
    render(<Flattening />);
    for (const phraseObject of iconsWithPhrases) {
      const phraseElement = screen.getByText(phraseObject.phrase);
      expect(phraseElement).toBeInTheDocument();
    }
  });

  it('should render the correct number of icons', () => {
    render(<Flattening />);
    for (const phraseObject of iconsWithPhrases) {
      const phraseElement = screen.getByText(phraseObject.icon);
      expect(phraseElement).toBeInTheDocument();
    }
  });
});
