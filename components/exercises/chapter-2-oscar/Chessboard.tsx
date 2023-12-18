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
    <div className='flex flex-row justify-center gap-0.5'>
      {getBoard(size)
        .split('\n')
        .map((row, y) => (
          <div data-testid='gridrow' key={y}>
            {row.split('').map((cell, x) => (
              <div
                className={
                  cell === ' '
                    ? 'h-5 w-5 bg-white'
                    : 'h-5 w-5 animate-bounce bg-[#B2980B]'
                }
                data-testid='gridcell'
                key={x}
              ></div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Chessboard;
