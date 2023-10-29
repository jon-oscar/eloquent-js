import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FizzBuzz from './FizzBuzz';

describe('FizzBuzz', () => {
  it('renders the phrase value', () => {
    const phraseValue = 'Hello, world!';
    const { getByText } = render(<FizzBuzz phraseValue={phraseValue} />);
    expect(getByText(phraseValue)).toBeInTheDocument();
  });

  it('updates the phrase value when the input changes', () => {
    const phraseValue = 'Hello, world!';
    const newPhraseValue = 'Goodbye, world!';
    const { getByLabelText, getByText } = render(
      <FizzBuzz phraseValue={phraseValue} />
    );
    const input = getByLabelText('Phrase');
    fireEvent.change(input, { target: { value: newPhraseValue } });
    expect(getByText(newPhraseValue)).toBeInTheDocument();
  });
});
