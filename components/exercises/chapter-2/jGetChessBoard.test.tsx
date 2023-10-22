import jGetChessBoard from './jGetChessBoard';

describe('jGetChessBoard', () => {
  it('returns a string representation of a chess board with the given size', () => {
    expect(jGetChessBoard(1)).toEqual(' ');
    expect(jGetChessBoard(2)).toEqual(' #\n# ');
    expect(jGetChessBoard(3)).toEqual(' # \n# #\n # ');
    expect(jGetChessBoard(4)).toEqual(' # #\n# # \n # #\n# # ');
  });

  it('always starts with a white square', () => {
    const board = jGetChessBoard(5);
    expect(board[0]).toEqual(' ');
  });

  it('with size = 0, returns an empty string', () => {
    expect(jGetChessBoard(0)).toEqual('');
  });

  it('with size = 1, returns a single white square', () => {
    expect(jGetChessBoard(1)).toEqual(' ');
  });
});
