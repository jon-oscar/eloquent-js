import { useState } from 'react';
import { getDirection } from './getDirection';

/**
 * Determines the dominant writing direction of a given text.
 * @param phrase - The input phrase to analyze.
 * @returns The dominant direction ('left to right', 'right to left', or 'top to bottom').
 */

export default function DominantDirection(): JSX.Element {
  const [phrase, setPhrase] = useState<string>('');

  function displayDirection(): string {
    if (getDirection(phrase) === 'ltr') {
      return 'left to right';
    } else if (getDirection(phrase) === 'rtl') {
      return 'right to left';
    } else {
      return 'top to bottom';
    }
  }

  return (
    <div className='flex flex-col items-center gap-2 text-center'>
      <input
        aria-label='Phrase'
        className='h-[50px] w-full rounded-3xl border-2 bg-[#FEFCF3] text-center'
        onChange={(e) => setPhrase(e.target.value)}
        placeholder='Enter your phrase here'
        type='text'
        value={phrase}
      />

      {phrase && (
        <p className='font-semibold'>
          Dominant direction is {displayDirection()}
        </p>
      )}
    </div>
  );
}
