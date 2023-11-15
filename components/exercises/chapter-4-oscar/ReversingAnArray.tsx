import React, { useState } from 'react';
import { getReverseArray, getReverseArrayInPlace } from './Utils';
import CustomButton from '@/components/CustomButton';

/**
 * An array of objects containing a name and a value array.
 * The value array can contain any type of element.
 */
const initialArrays = [
  { value: ['🟡', '🟢', '🟣', '🔴', '⚪️'] },
  { value: [1, 2, 3, 4, 5] },
];

/**
 * Renders a component that displays two arrays and allows the user to reverse them.
 * @returns A JSX element representing the component.
 */
export default function ReversingAnArray(): JSX.Element {
  const [arrays, setArrays] = useState(initialArrays);

  const handleReverse = () => {
    setArrays((prevState) => {
      // create a copy of the state
      const newArrays = [...prevState];

      // update the value of the first array
      newArrays[0].value = getReverseArray(newArrays[0].value);
      return newArrays;
    });
  };

  const handleReverseInPlace = () => {
    setArrays((prevState) => {
      // create a copy of the state
      const newArrays = [...prevState];

      // update the value of the second array
      newArrays[1].value = getReverseArrayInPlace(newArrays[1].value);
      return newArrays;
    });
  };

  return (
    <div className='flex'>
      <div className='flex flex-col flex-1 justify-center items-center'>
        <div className='mx-2 my-2'>
          <p className='text-4xl tracking-widest'>{arrays[0].value}</p>
        </div>
        <CustomButton
          title='Click to reverse'
          containerStyles='bg-[#B2980B] text-white rounded-full mt-2 min-w-[222px]'
          handleClick={handleReverse}
        />
      </div>
      <div className='flex flex-col flex-1 justify-center items-center'>
        <div className='mx-2 my-2'>
          <p className='text-4xl tracking-widest'>{arrays[1].value}</p>
        </div>
        <CustomButton
          title='Click to reverse in place'
          containerStyles='bg-[#B2980B] text-white rounded-full mt-2 min-w-[222px]'
          handleClick={handleReverseInPlace}
        />
      </div>
    </div>
  );
}
