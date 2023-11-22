import CustomButton from '@/components/CustomButton';
import { useState } from 'react';
import jGetChessBoard from './jGetChessBoard';

const MAX_ROWS_SHOWN = 5;

/**
 * Renders a single cell of a chess board with the specified color.
 * @param {Object} props - The component props.
 * @param {'white' | 'black'} props.color - The color of the cell.
 * @returns {JSX.Element} - The rendered cell component.
 */
function Cell({ color }: { color: 'white' | 'black' }): JSX.Element {
  return (
    <div
      data-testid={`j-chess-board-${color}-cell`}
      className={`h-10 w-10 ${
        color === 'white' ? 'bg-[#FEFCF3]' : 'bg-[#B2980B]'
      }`}
    ></div>
  );
}

/**
 * Renders a chess board component with adjustable size and colored cells.
 * @returns {JSX.Element} - The rendered chess board component.
 */
export default function JChessBoard(): JSX.Element {
  const [size, setSize] = useState(52);

  // handler to increase size on click
  const handleIncrease = () => setSize(size + 1);

  // handler to decrease size on click, preventing negative numbers
  const handleDecrease = () => {
    if (size > 0) {
      setSize(size - 1);
    }
  };

  const buttonStyles =
    'bg-[#B2980B] w-10 h-10 rounded-full m-2 text-2xl font-bold text-white';

  // get a derived value from the size in order to always show
  // a max of 5 size on chessboard
  const derivedSize = size === 0 ? 0 : (size % MAX_ROWS_SHOWN) + 1;

  const chessBoard = jGetChessBoard(derivedSize);

  return (
    <div data-testid='j-chess-board'>
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
        <div className='h-[13rem] w-[13rem]'>
          {chessBoard.split('\n').map((row, i) => (
            <div
              key={`row-${i}`}
              className='flex'
              data-testid='j-chess-board-row'
            >
              {row.split('').map((square, j) => (
                <Cell
                  key={`cell-${i}-${j}`}
                  color={square === ' ' ? 'white' : 'black'}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
