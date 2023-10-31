import CustomButton from '@/components/CustomButton';
import { useState } from 'react';
import fizzBuzz from './jGetFizzBuzz';

export const INITIAL_STATE = 11;

/**
 * Renders a FizzBuzz component with a count value that can be increased or decreased.
 * @returns JSX element
 */
export default function JFizzBuzz() {
  const [count, setCount] = useState(11);

  // handler to increase count on click
  const handleIncrease = () => setCount(count + 1);

  // handler to decrease count on click, preventing negative numbers
  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const buttonStyles =
    'bg-[#B2980B] w-10 h-10 rounded-full m-2 text-2xl font-bold text-white';

  const fizzBuzzValue = fizzBuzz(count);

  return (
    <div data-testid='j-fizz-buzz'>
      <div className='flex flex-col items-center'>
        <div className='flex align-center justify-center'>
          <CustomButton
            handleClick={handleDecrease}
            title='-'
            containerStyles={buttonStyles}
          />
          <CustomButton
            handleClick={handleIncrease}
            title='+'
            containerStyles={buttonStyles}
          />
        </div>
        <div className='text-[80px] font-bold text-[#B2980B]'>
          {fizzBuzzValue === 'FizzBuzz' ? (
            <span className='text-[#B2980B] animate-pulse'>
              {fizzBuzzValue}
            </span>
          ) : fizzBuzzValue === 'Fizz' || fizzBuzzValue === 'Buzz' ? (
            <span>{fizzBuzzValue}</span>
          ) : (
            fizzBuzzValue
          )}
        </div>
      </div>
    </div>
  );
}
