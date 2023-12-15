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
  const [emojis1, setEmojis1] = useState<string[]>(INITIAL_EMOJIS_1);
  const [emojis2, setEmojis2] = useState<string[]>(INITIAL_EMOJIS_2);
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
     * current and previous array references are the same so React doesn't re-render
     * because it doesn't detect a change.
     * By changing the state of a boolean, we force a re-render.
     */
    setHasClickedReverseInPlaceButton(!hasClickedReverseInPlaceButton);
  };

  const buttonStyles =
    'bg-[#B2980B] text-white rounded-full mt-2 min-w-[222px]';

  return (
    <div data-testid='j-array-reversion'>
      <div className='mb-8'>
        <p className='text-xl' data-testid='emojis1-container'>
          {emojis1.map((emoji) => (
            <span key={emoji}>{emoji}</span>
          ))}
        </p>
        <CustomButton
          containerStyles={buttonStyles}
          handleClick={handleReverseButtonClick}
          title='Reverse'
        />
      </div>
      <div>
        <p className='text-xl' data-testid='emojis2-container'>
          {emojis2.map((emoji) => (
            <span key={emoji}>{emoji}</span>
          ))}
        </p>
        <CustomButton
          containerStyles={buttonStyles}
          handleClick={handleReverseInPlaceButtonClick}
          title='Reverse in place'
        />
      </div>
    </div>
  );
}
