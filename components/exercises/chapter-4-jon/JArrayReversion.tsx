import CustomButton from '@/components/CustomButton';
import React, { useState } from 'react';
import jReverseArray from './jReverseArray';
import jReverseArrayInPlace from './jReverseArrayInPlace';

export const INITIAL_EMOJIS_1 = ['😀', '😄', '😁', '😆', '🤣'];
export const INITIAL_EMOJIS_2 = ['🍊', '🍈', '🍉', '🍋', '🍓'];

/**
 * Renders a component that displays two arrays and allows the user to reverse them.
 * The first array is reversed by creating a reversed copy of the array,
 * while the second array is reversed in place.
 * @returns A JSX element representing the component.
 */
export default function JArrayReversion(): React.JSX.Element {
  const [emojis1, setEmojis1] = useState<any[]>(INITIAL_EMOJIS_1);
  const [emojis2, setEmojis2] = useState<any[]>(INITIAL_EMOJIS_2);
  const [hasClickedReverseInPlaceButton, setHasClickedReverseInPlaceButton] =
    useState<boolean>(false);

  const handleReverseButtonClick = () => {
    setEmojis1(jReverseArray(emojis1));
  };

  const handleReverseInPlaceButtonClick = () => {
    jReverseArrayInPlace(emojis2);
    setEmojis2(emojis2);

    /**
     * This is a hack to force a re-render, since the emojis2 array is mutated in place,
     * current and previous array references are the same so React doesn't render
     * because it doesn't detect a change.
     * By changing the state of a boolean, we force a re-render.
     */
    setHasClickedReverseInPlaceButton(!hasClickedReverseInPlaceButton);
  };

  return (
    <div data-testid='j-array-reversion'>
      <div className='mb-8'>
        <p data-testid='emojis1-container' className='text-xl'>
          {emojis1.map((emoji) => (
            <span key={emoji}>{emoji}</span>
          ))}
        </p>
        <CustomButton
          title='Reverse'
          containerStyles='bg-[#B2980B] text-white rounded-full mt-2 min-w-[222px]'
          handleClick={handleReverseButtonClick}
        />
      </div>
      <div>
        <p data-testid='emojis2-container' className='text-xl'>
          {emojis2.map((emoji) => (
            <span key={emoji}>{emoji}</span>
          ))}
        </p>
        <CustomButton
          title='Reverse in place'
          containerStyles='bg-[#B2980B] text-white rounded-full mt-2 min-w-[222px]'
          handleClick={handleReverseInPlaceButtonClick}
        />
      </div>
    </div>
  );
}
