import React, { useEffect, useState } from 'react';
import { loop } from './loop';

let initialTimer = 10;

/**
 * YourOwnLoop is a React component that displays a countdown timer and provides
 * controls to start and reset the timer. When the timer reaches 0, it automatically stops.
 */
export default function YourOwnLoop(): JSX.Element {
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(initialTimer);

  useEffect(() => {
    loop(
      timer,
      (n: number) => n >= 0,
      (n: number) => n - 1,
      (n: number) => {
        if (isRunning) {
          setTimer(n);
        }
      }
    );
  }, [timer, isRunning]);

  // starts the timer
  function startTimer(): void {
    setIsRunning(true);
  }

  // resets the timer to its initial settings
  function resetTimer(): void {
    setIsRunning(false);
    setTimer(initialTimer);
  }

  return (
    <div className='flex h-max items-center'>
      <div className='container flex max-w-[592px] flex-col items-center justify-center p-2'>
        <div
          className='mt-3 flex h-60 w-60 items-center justify-center rounded-full shadow-lg'
          data-testid='timer-display'
        >
          <p className='text-[6rem]'>{timer}</p>
        </div>
        <div className='mt-3'>
          <div className='m-5 grid w-40 grid-cols-2 rounded-lg p-1 text-center shadow-md'>
            <button className='cursor-pointer text-3xl' onClick={startTimer}>
              ▶️
            </button>
            <button className='cursor-pointer text-3xl' onClick={resetTimer}>
              🔄
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
