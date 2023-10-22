import jGetChessBoard from './jGetChessBoard';

function Cell({ color }: { color: 'white' | 'black' }) {
  return (
    <div
      className={`w-10 h-10 ${
        color === 'white' ? 'bg-slate-300' : 'bg-slate-500'
      }`}
    ></div>
  );
}

export default function JChessBoard({ size }: { size: number }) {
  const chessBoard = jGetChessBoard(size);

  return (
    <div>
      {chessBoard.split('\n').map((row, i) => (
        <div key={i} className='flex'>
          {row.split('').map((square, j) => (
            <Cell key={j} color={square === ' ' ? 'white' : 'black'} />
          ))}
        </div>
      ))}
    </div>
  );
}
