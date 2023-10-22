/**
 * Returns a string representation of a chess board with the given size.
 * Black squares are represented by "#" and white squares are represented by " ".
 * Breaks between lines are represented by "\n".
 * The top-left corner is always a white square.
 * The board is always square. The size is always a positive integer.
 * The returned string will have a trailing newline.
 * @param size - The size of the chess board.
 * @returns A string representation of the chess board.
 */
export default function jGetChessBoard(size: number): string {
  let board = '';
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if ((row + col) % 2 === 0) {
        board += ' ';
      } else {
        board += '#';
      }
    }
    board += '\n';
  }
  return board;
}
