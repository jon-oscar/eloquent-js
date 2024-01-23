import { render, screen, fireEvent } from '@testing-library/react';
import DominantDirection from './DominantDirection';

describe('DominantDirection', () => {
  test('displays the correct dominant direction when input is left to right', () => {
    render(<DominantDirection />);
    const input = screen.getByLabelText('Phrase');
    fireEvent.change(input, { target: { value: 'Hello, World!' } });
    const directionText = screen.getByText(
      /Dominant direction is left to right/i
    );
    expect(directionText).toBeInTheDocument();
  });

  test('displays the correct dominant direction when input is right to left', () => {
    render(<DominantDirection />);
    const input = screen.getByLabelText('Phrase');
    fireEvent.change(input, { target: { value: 'مرحبا بكم' } });
    const directionText = screen.getByText(
      /Dominant direction is right to left/i
    );
    expect(directionText).toBeInTheDocument();
  });

  test('displays the correct dominant direction when input is top to bottom', () => {
    render(<DominantDirection />);
    const input = screen.getByLabelText('Phrase');
    fireEvent.change(input, { target: { value: 'こんにちは' } });
    const directionText = screen.getByText(
      /Dominant direction is top to bottom/i
    );
    expect(directionText).toBeInTheDocument();
  });
});
