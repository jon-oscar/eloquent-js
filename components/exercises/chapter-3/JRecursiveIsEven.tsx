import CustomButton from '@/components/CustomButton';
import { useState } from 'react';

/**
 * Renders a counter and a button that decrements the counter by 2 until it reaches 0 or 1.
 * Tells the user if the number is even or odd.
 * @returns JSX element
 */
export default function JRecursiveIsEven(): JSX.Element {
  const [count, setCount] = useState<number>(7);
  const [checkedNumber, setCheckedNumber] = useState<number | null>(null);

  const is0 = count === 0;
  const is1 = count === 1;

  function handleIncrementClick() {
    setCheckedNumber(null);
    setCount(count + 1);
  }

  function handleDecrementClick() {
    setCheckedNumber(null);
    setCount(count - 1);
  }

  // "Recursive" function to swap negative numbers and subtract 2 from the count until it reaches 0 or 1
  function updateCountStep() {
    if (count < 0) {
      setCount(-count);
    } else if (!is0 && !is1) {
      setCount(count - 2);
    }
  }

  function handleClick() {
    if (checkedNumber === null) {
      setCheckedNumber(count);
    }
    updateCountStep();
  }

  const message = (() => {
    if (checkedNumber === null) {
      return `Is ${count} Even?`;
    } else if (is0) {
      return `${checkedNumber} is Even!`;
    } else if (is1) {
      return `${checkedNumber} is Odd!`;
    } else {
      return `Is ${checkedNumber} Even?`;
    }
  })();

  return (
    <div
      className='flex flex-col items-center justify-center'
      data-testid='j-recursive-is-even'
    >
      <p className='mb-8 text-4xl font-bold'>{message}</p>
      <div className='mb-8 flex space-x-4'>
        <CustomButton
          containerStyles='text-white rounded-full bg-[#B2980B]'
          handleClick={handleIncrementClick}
          title='+'
        />
        <CustomButton
          containerStyles='text-white rounded-full bg-[#B2980B]'
          handleClick={handleDecrementClick}
          title='-'
        />
      </div>
      <CustomButton
        containerStyles='text-white rounded-full bg-[#B2980B]'
        handleClick={handleClick}
        isDisabled={is0 || is1}
        title={is0 || is1 ? 'Tap + or -' : `${count} - 2`}
      />
    </div>
  );
}
