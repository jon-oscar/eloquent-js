/**
 * Returns a string representation of a chess board with the given size.
 * Black squares are represented by "#" and white squares are represented by " ".
 * Breaks between lines are represented by "\n".
 * The top-left corner is always a white square.
 * The board is always square. The size is always a positive integer.
 * @param size - The size of the chess board.
 * @returns A string representation of the chess board.
 */
export default function jGetChessBoard(size: number): string {
  let board = '';

  // Loop through each row of the board
  for (let row = 0; row < size; row++) {
    // Loop through each column of the board
    for (let col = 0; col < size; col++) {
      // Determine whether the current square should be black or white
      if ((row + col) % 2 === 0) {
        board += ' '; // White square
      } else {
        board += '#'; // Black square
      }
    }

    // Add a newline character after each row (except the last one)
    if (row !== size - 1) {
      board += '\n';
    }
  }

  return board;
}
