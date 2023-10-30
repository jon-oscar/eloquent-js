import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import FizzBuzz from './FizzBuzz';

describe('FizzBuzz', () => {
  it('renders the phrase value', () => {
    const phraseValue = 'Hello, world!';
    render(<FizzBuzz phraseValue={phraseValue} />);
    expect(screen.getByText(phraseValue)).toBeInTheDocument();
  });

  it('updates the phrase value when the input changes', () => {
    const phraseValue = 'Hello, world!';
    const newPhraseValue = 'Goodbye, world!';
    render(<FizzBuzz phraseValue={phraseValue} />);
    const input = screen.getByLabelText('Phrase');
    fireEvent.change(input, { target: { value: newPhraseValue } });
    expect(screen.getByText(newPhraseValue)).toBeInTheDocument();
  });
});
