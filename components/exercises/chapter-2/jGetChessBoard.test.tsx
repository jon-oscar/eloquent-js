import jGetChessBoard from './jGetChessBoard';

describe('jGetChessBoard', () => {
  it('returns a string representation of a chess board with the given size', () => {
    expect(jGetChessBoard(1)).toEqual(' \n');
    expect(jGetChessBoard(2)).toEqual(' #\n# \n');
    expect(jGetChessBoard(3)).toEqual(' # \n# #\n # \n');
    expect(jGetChessBoard(4)).toEqual(' # #\n# # \n # #\n# # \n');
  });

  it('always starts with a white square', () => {
    const board = jGetChessBoard(5);
    expect(board[0]).toEqual(' ');
  });

  it('always has a trailing newline', () => {
    const board = jGetChessBoard(6);
    expect(board[board.length - 1]).toEqual('\n');
  });
});
