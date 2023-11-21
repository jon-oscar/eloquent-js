import { useEffect, useState } from 'react';
import './recursion.css';
/**
 * Determines if a given number is even or odd using recursion.
 * @param param - The number to be evaluated.
 * @returns A boolean indicating whether the number is even or odd.
 */
export function isEven(param: number): boolean {
  if (param == 0) {
    return true;
  } else if (param == 1) {
    return false;
  } else if (param < 0) {
    return isEven(-param);
  } else {
    return isEven(param - 2);
  }
}

const petals: JSX.Element[] = [];

/**
 * Renders a flower with petals that change color every second using recursion.
 * @returns JSX element
 */
export default function Recursion() {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      addPetal();
      setTimeRemaining(
        timeRemaining === 8 ? timeRemaining + 0 : timeRemaining + 1
      );
    }, 1000);
    return () => clearTimeout(timer);
  });

  /**
   * Adds a new petal to the `petals` array based on the current `timeRemaining` value.
   * If `timeRemaining` is even, a petal with a dark red background color is added.
   * If `timeRemaining` is odd, a petal with a light yellow background color is added.
   */
  const addPetal = () => {
    if (isEven(timeRemaining) === false) {
      petals.push(
        <div
          data-testid='petal'
          key={`petal + ${timeRemaining}`}
          className=' petal-rotating absolute inset-x-0 top-0 m-auto h-24 w-24 origin-custom rounded-full bg-[#b2990b9f]'
        />
      );
    } else {
      petals.push(
        <div
          data-testid='petal'
          key={`petal + ${timeRemaining}`}
          className='petal-rotating absolute inset-x-0 top-0 m-auto h-24 w-24 origin-custom rounded-full bg-[#b2430b9f]'
        />
      );
    }
  };

  return (
    <div data-testid='recursion' className='relative h-[300px] min-w-max'>
      {petals.map((petal) => petal)}
      <div className='absolute inset-x-0 top-12 m-auto h-52 w-52 rounded-full bg-[#b2980b]' />
    </div>
  );
}
