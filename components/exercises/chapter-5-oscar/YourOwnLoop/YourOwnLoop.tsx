import React, { useEffect, useState } from 'react';

let initialTimer = {
  minutes: 25,
  seconds: 0,
};

/**
 * YourOwnLoop is a React component that displays a countdown timer and provides
 * controls to start and reset the timer. When the timer reaches 00:00, it automatically stops.
 */
export default function YourOwnLoop(): React.JSX.Element {
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(initialTimer);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;

    // Start or reset the timer interval based on the 'isRunning' state
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          let newTimer = { ...prevTimer };

          // Update timer values each second
          if (newTimer.seconds > 0) {
            newTimer.seconds--;
          } else if (newTimer.minutes > 0) {
            newTimer.minutes--;
            newTimer.seconds = 59;
          } else {
            // When the timer reaches 00:00, stop the interval and set 'isRunning' to false
            clearInterval(interval);
            setIsRunning(false);
          }
          return newTimer;
        });
      }, 1000);
    } else {
      // Clear the interval when 'isRunning' becomes false
      clearInterval(interval);
    }
    // Clean up the interval when the component unmounts or 'isRunning' changes
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

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
          <p className='text-5xl'>{timer.minutes}</p>
          <p className='text-2xl'>:</p>
          <p className='text-5xl'>
            {timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}
          </p>
          <p></p>
          <p></p>
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
