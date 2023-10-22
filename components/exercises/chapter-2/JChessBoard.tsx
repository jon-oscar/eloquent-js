import jGetChessBoard from './jGetChessBoard';

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
      className={`w-10 h-10 ${
        color === 'white' ? 'bg-slate-300' : 'bg-slate-500'
      }`}
    ></div>
  );
}

/**
 * Renders a chess board with the specified size.
 * @param {Object} props - The component props.
 * @param {number} props.size - The size of the chess board.
 * @returns {JSX.Element} - The rendered chess board component.
 */
export default function JChessBoard({ size }: { size: number }): JSX.Element {
  const chessBoard = jGetChessBoard(size);

  return (
    <div data-testid='j-chess-board' className='w-[15rem] h-[15rem]'>
      {chessBoard.split('\n').map((row, i) => (
        <div key={`row-${i}`} className='flex' data-testid='j-chess-board-row'>
          {row.split('').map((square, j) => (
            <Cell
              key={`cell-${i}-${j}`}
              color={square === ' ' ? 'white' : 'black'}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
