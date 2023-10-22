import { render, screen } from '@testing-library/react';
import JChessBoard from './JChessBoard';

describe('JChessBoard', () => {
  it('renders a chess board with the correct number of rows', () => {
    const size = 3;
    render(<JChessBoard size={size} />);
    const rows = screen.getAllByTestId('j-chess-board-row');
    expect(rows.length).toBe(size);
  });

  it('renders a chess board with the correct number of cells', () => {
    const size = 5;
    render(<JChessBoard size={size} />);
    const cells = screen.getAllByTestId(/j-chess-board-(white|black)-cell/);
    expect(cells.length).toBe(size * size);
  });

  it('renders a chess board with no cells when size is 0', () => {
    const size = 0;
    render(<JChessBoard size={size} />);
    const cells = screen.queryAllByTestId(/j-chess-board-(white|black)-cell/);
    expect(cells.length).toBe(0);
  });
});
