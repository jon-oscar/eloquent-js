import React, { useEffect, useState } from 'react';

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
          className=' petal-rotating w-24 h-24 rounded-full absolute top-0 left-0 right-0 m-auto origin-custom bg-[#b2990b9f]'
        />
      );
    } else {
      petals.push(
        <div
          data-testid='petal'
          key={`petal + ${timeRemaining}`}
          className='petal-rotating w-24 h-24 rounded-full absolute top-0 left-0 right-0 m-auto origin-custom bg-[#b2430b9f]'
        />
      );
    }
  };

  return (
    <div className='min-w-max h-[300px] relative'>
      {petals.map((petal) => petal)}
      <div className='w-52 h-52 rounded-full bg-[#b2980b] absolute top-12 left-0 right-0 m-auto' />
    </div>
  );
}
