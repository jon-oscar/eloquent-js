import React, { useState } from 'react';

type BeanCountingProps = {
  phraseValue: string;
};

/**
 * Counts the number of uppercase 'B's in a given string.
 * @param param - The string to search for 'B's.
 * @returns The number of 'B's found in the string.
 */
export function countBs(param: string): number {
  let count = 0;
  for (let i = 0; i < param.length; i++) {
    if (param[i] === 'B') {
      count++;
    }
  }
  return count;
}

/**
 * Returns the number of times a character appears in a string.
 * @param param - The string to search for the character.
 * @param char - The character to search for.
 * @returns The number of times the character appears in the string.
 */
export function countChar(param: string, char: string): number {
  let count = 0;
  for (let i = 0; i < param.length; i++) {
    if (param[i] === char) count++;
  }
  return count;
}

/**
 * Renders a component that takes a phrase as input and displays the number of 'B' and 's' letters in it.
 * @returns JSX.Element
 */

export default function BeanCounting({ phraseValue }: BeanCountingProps) {
  const [state, setState] = useState(phraseValue);
  return (
    <div>
      <input
        type='text'
        value={state}
        placeholder='Enter your phrase here'
        onChange={(e) => setState(e.target.value)}
        className='text-center bg-[#FEFCF3] border-2 border-black-50 rounded-3xl w-full h-[50px]'
        aria-label='Phrase'
      />
      <div className='flex flex-row mt-2'>
        <div className='flex-1 text-center'>
          <p>This phrase has {countBs(state)} B letter</p>
        </div>
        <div className='flex-1 text-center'>
          <p>This phrase has {countChar(state, 's')} s letter</p>
        </div>
      </div>
    </div>
  );
}
