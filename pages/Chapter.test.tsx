import { render, screen } from '@testing-library/react';
import Chapter2 from '../pages/chapter2';

describe('Chapter2', () => {
  it('renders the title, subtitle and details', () => {
    render(<Chapter2 />);
    const title = screen.getByText(/Chapter 2/i);
    const subtitle = screen.getByText(/Program Structure/i);
    const details = screen.getByText((details) =>
      details.startsWith(
        'This chapter introduces the basic concepts of programming'
      )
    );
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(details).toBeInTheDocument();
  });

  it('renders the Pyramid, FizzBuzz and Chessboard title', () => {
    render(<Chapter2 />);
    const pyramidTitle = screen.getAllByText('Looping a triangle');
    const fizzBuzzTitle = screen.getAllByText(/FizzBuzz/i);
    const chessboardTitle = screen.getAllByText(/Chessboard/i);
    expect(pyramidTitle[0]).toBeInTheDocument();
    expect(fizzBuzzTitle[0]).toBeInTheDocument();
    expect(chessboardTitle[0]).toBeInTheDocument();
  });
});
