import jGetChessBoard from './jGetChessBoard';

function Cell({ color }: { color: 'white' | 'black' }) {
  return (
    <div
      data-testid={`j-chess-board-${color}-cell`}
      className={`w-10 h-10 ${
        color === 'white' ? 'bg-slate-300' : 'bg-slate-500'
      }`}
    ></div>
  );
}

export default function JChessBoard({ size }: { size: number }) {
  const chessBoard = jGetChessBoard(size);

  return (
    <div data-testid='j-chess-board'>
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
