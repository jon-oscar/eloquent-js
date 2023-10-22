import { CustomButton } from '@/components';
import JChessBoard from '@/components/exercises/chapter-2/JChessBoard';
import { useState } from 'react';
import { JFizzBuzz } from './JFizzBuzz';
import JPyramid from './JPyramid';

export const MAX_ROWS_SHOWN = 5;

export function JExercise2() {
  const [count, setCount] = useState(2);
  const [selectedComponent, setSelectedComponent] = useState('pyramid');

  // handler to increase count on click
  const handleIncrease = () => setCount(count + 1);

  // handler to decrease count on click, preventing negative numbers
  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // get a derived value from the count in order to always show
  // a max of 5 rows on pyramid and chessboard
  const rowsShown = count === 0 ? 0 : (count % MAX_ROWS_SHOWN) + 1;

  const buttonStyles =
    'bg-slate-500 hover:bg-slate-400 w-10 h-10 rounded-full m-2 text-2xl font-bold';

  return (
    <div className='text-white flex justify-center flex-col w-[15-rem]'>
      <div className='flex flex-col items-center justify-center h-[15rem]'>
        {selectedComponent === 'pyramid' && <JPyramid rows={rowsShown} />}
        {selectedComponent === 'fizzBuzz' && <JFizzBuzz count={count} />}
        {selectedComponent === 'chessboard' && <JChessBoard size={rowsShown} />}
      </div>

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
        <div className='flex'>
          <CustomButton
            handleClick={() => setSelectedComponent('pyramid')}
            title='P'
            containerStyles={buttonStyles}
          />
          <CustomButton
            handleClick={() => setSelectedComponent('fizzBuzz')}
            title='F'
            containerStyles={buttonStyles}
          />
          <CustomButton
            handleClick={() => setSelectedComponent('chessboard')}
            title='C'
            containerStyles={buttonStyles}
          />
        </div>
      </div>
    </div>
  );
}
