import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import JTextAnalyzer from './JTextAnalyzer';
import userEvent from '@testing-library/user-event';

async function typeOnTextAreaAndCheckMessage(
  text: string,
  expectedMessage: string
): Promise<void> {
  const textarea = screen.getByPlaceholderText(
    'Please add some text or click one of the buttons below.'
  );
  await userEvent.clear(textarea);
  await userEvent.type(textarea, text);
  const message = screen.getByText('Dominant writing direction:');
  expect(message).toHaveTextContent(expectedMessage);
}

describe('JTextAnalyzer component', () => {
  it('updates textarea value when button is clicked', () => {
    render(<JTextAnalyzer />);

    const button = screen.getByText('Hello World!');
    fireEvent.click(button);

    const textarea = screen.getByPlaceholderText(
      'Please add some text or click one of the buttons below.'
    ) as HTMLTextAreaElement;
    expect(textarea.value).toBe('Hello World!');
  });

  it('displays dominant writing direction message', async () => {
    render(<JTextAnalyzer />);

    await typeOnTextAreaAndCheckMessage('مرحبا بكم!', 'Right to left');
    await typeOnTextAreaAndCheckMessage('Hello World!', 'Left to right');
    await typeOnTextAreaAndCheckMessage('こんにちは', 'Top to bottom');
    await typeOnTextAreaAndCheckMessage('Hello مرحبا', 'Right to left');
  });
});
