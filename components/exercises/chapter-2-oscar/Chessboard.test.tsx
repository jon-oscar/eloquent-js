import React from 'react';
import { render, screen } from '@testing-library/react';
import Chessboard from './Chessboard';

describe('Chessboard', () => {
  it('renders a chessboard with alternating colors', () => {
    const size = 8;
    render(<Chessboard size={size} />);
    const gridCells = screen.getAllByTestId('gridcell');
    gridCells.forEach((cell, index) => {
      const isEvenRow = Math.floor(index / size) % 2 === 0;
      const isEvenColumn = index % 2 === 0;
      const isWhite =
        (isEvenRow && isEvenColumn) || (!isEvenRow && !isEvenColumn);
      if (isWhite) {
        expect(cell).toHaveClass('bg-white');
      } else {
        expect(cell).toHaveClass('bg-[#B2980B]');
      }
    });
  });
});
