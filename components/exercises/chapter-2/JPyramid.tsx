import CustomButton from '@/components/CustomButton';
import { useState } from 'react';
import jGetPyramid from './jGetPyramid';

const MAX_ROWS_SHOWN = 5;
const INITIAL_STATE = 52;

/**
 * A component that renders a pyramid of dots, with the number of rows
 * determined by a count that can be increased or decreased by the user.
 */
export default function JPyramid(): JSX.Element {
  const [count, setCount] = useState(INITIAL_STATE);

  // handler to increase count on click
  const handleIncrease = () => setCount(count + 1);

  // handler to decrease count on click, preventing negative numbers
  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // get a derived value from the count in order to always show
  // a max of 5 rows on pyramid
  const rows = count === 0 ? 0 : (count % MAX_ROWS_SHOWN) + 1;

  const buttonStyles =
    'bg-[#B2980B] w-10 h-10 rounded-full m-2 text-2xl font-bold';

  const pyramid = jGetPyramid(rows);

  return (
    <div data-testid='j-pyramid'>
      <div className='flex flex-col items-center'>
        <div className='flex justify-center'>
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
        <div className='h-[15rem] w-[15rem]'>
          {/* Iterate over pyramid and render a dot for each "#" and a new line for each "/n" */}
          {pyramid.split('').map((char, index) =>
            char === '#' ? (
              // inline rounded div that looks like a dot
              <div
                data-testid='j-pyramid-dot'
                key={index}
                className='m-1 inline-block h-[2em] w-[2em] rounded-full bg-[#B2980B] hover:animate-pulse'
              />
            ) : (
              <br key={index} />
            )
          )}
        </div>
      </div>
    </div>
  );
}
