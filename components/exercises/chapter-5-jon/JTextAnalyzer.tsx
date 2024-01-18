import React, { useState } from 'react';
import jDominantWritingDirection from './jDominantWritingDirection';

const exampleTexts = [
  'Hello World!',
  'مرحبا بكم!',
  'こんにちは',
  'Hello مرحبا',
];

/**
 * Renders a component that displays a textarea and a message indicating the
 * dominant writing direction of the text in the textarea. The user can click
 * one of the buttons below the textarea to add some example text.
 * @returns JSX.Element
 */
export default function JTextAnalyzer(): JSX.Element {
  const [text, setText] = useState('');

  const dominantWritingDirectionMessage = (() => {
    if (!text || text.trim() === '') {
      return '';
    }

    const direction = jDominantWritingDirection(text);
    if (direction === 'ltr') {
      return 'Left to right';
    } else if (direction === 'rtl') {
      return 'Right to left';
    } else if (direction === 'ttb') {
      return 'Top to bottom';
    } else {
      return 'No dominant direction';
    }
  })();

  return (
    <div className='flex flex-col items-center gap-4'>
      <textarea
        className='h-48 w-96 rounded-md border border-gray-300 p-2'
        onChange={(e) => setText(e.target.value)}
        placeholder='Please add some text or click one of the buttons below.'
        value={text}
      />
      <p>
        Dominant writing direction:
        <strong> {dominantWritingDirectionMessage}</strong>
      </p>
      <div className='flex gap-2'>
        {exampleTexts.map((text) => (
          <button
            className='rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
            key={text}
            onClick={() => setText(text)}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
}
