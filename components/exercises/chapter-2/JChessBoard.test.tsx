import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import JChessBoard from './JChessBoard';

describe('JChessBoard', () => {
  it('renders the JChessBoard component', () => {
    render(<JChessBoard />);
    const chessBoardComponent = screen.getByTestId('j-chess-board');
    expect(chessBoardComponent).toBeInTheDocument();
  });

  it('renders the correct initial state', () => {
    render(<JChessBoard />);
    const whiteCells = screen.getAllByTestId('j-chess-board-white-cell');
    const blackCells = screen.getAllByTestId('j-chess-board-black-cell');
    expect(whiteCells).toHaveLength(5);
    expect(blackCells).toHaveLength(4);
  });

  it('renders the correct value after clicking the "+" button', () => {
    render(<JChessBoard />);
    const increaseButton = screen.getByText('+');
    act(() => {
      increaseButton.click();
    });
    const whiteCells = screen.getAllByTestId('j-chess-board-white-cell');
    const blackCells = screen.getAllByTestId('j-chess-board-black-cell');
    expect(whiteCells).toHaveLength(8);
    expect(blackCells).toHaveLength(8);
  });

  it('renders the correct value after clicking the "-" button', () => {
    render(<JChessBoard />);
    const decreaseButton = screen.getByText('-');
    act(() => {
      decreaseButton.click();
    });
    const whiteCells = screen.getAllByTestId('j-chess-board-white-cell');
    const blackCells = screen.getAllByTestId('j-chess-board-black-cell');
    expect(whiteCells).toHaveLength(2);
    expect(blackCells).toHaveLength(2);
  });

  it('renders the correct value after clicking the "+" button 3 times (reset to one row)', () => {
    render(<JChessBoard />);
    const increaseButton = screen.getByText('+');
    act(() => {
      increaseButton.click();
    });
    act(() => {
      increaseButton.click();
    });
    act(() => {
      increaseButton.click();
    });
    const whiteCells = screen.getAllByTestId('j-chess-board-white-cell');
    const blackCells = screen.queryByTestId('j-chess-board-black-cell');
    expect(whiteCells).toHaveLength(1);
    expect(blackCells).not.toBeInTheDocument();
  });
});
