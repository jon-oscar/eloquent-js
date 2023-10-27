import React from 'react';

type Props = {
  size: number;
};

const getBoard = (size: number) => {
  let board = '';

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      board += (x + y) % 2 == 0 ? ' ' : '#';
    }
    board += '\n';
  }

  return board;
};

const Chessboard = ({ size }: Props) => {
  return (
    <div className='flex flex-row gap-0.5 justify-center'>
      {getBoard(size)
        .split('\n')
        .map((row, y) => (
          <div key={y}>
            {row.split('').map((col, x) => (
              <div
                key={x}
                className={
                  col === ' '
                    ? 'bg-white w-5 h-5'
                    : 'bg-[#B2980B] w-5 h-5 animate-bounce'
                }
              ></div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Chessboard;
