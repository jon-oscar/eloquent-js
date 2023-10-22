import { fireEvent, render, screen } from '@testing-library/react';
import { JExercise2 } from './JExercise2';

describe('JExercise2', () => {
  it('renders the pyramid component by default', () => {
    render(<JExercise2 />);
    const pyramidElement = screen.getByTestId('j-pyramid');
    expect(pyramidElement).toBeInTheDocument();
  });

  it('renders the fizzBuzz component when the F button is clicked', () => {
    render(<JExercise2 />);
    const fizzBuzzButton = screen.getByText('F');
    fireEvent.click(fizzBuzzButton);
    const fizzBuzzElement = screen.getByTestId('j-fizz-buzz');
    expect(fizzBuzzElement).toBeInTheDocument();
  });

  it('renders the chessboard component when the C button is clicked', () => {
    render(<JExercise2 />);
    const chessboardButton = screen.getByText('C');
    fireEvent.click(chessboardButton);
    const chessboardElement = screen.getByTestId('j-chess-board');
    expect(chessboardElement).toBeInTheDocument();
  });

  it('increases the count when the + button is clicked', () => {
    render(<JExercise2 />);
    const countElement = screen.getByText('+');
    // test by getting updated value of fizzBuzz
    const fizzBuzzButton = screen.getByText('F');
    fireEvent.click(fizzBuzzButton);

    // initial count state
    const fizzBuzzElement = screen.getByTestId('j-fizz-buzz');
    expect(fizzBuzzElement).toHaveTextContent('2');

    fireEvent.click(countElement);
    // updated count state to 3
    expect(fizzBuzzElement).toHaveTextContent('Fizz');
  });

  it('decreases the count when the - button is clicked', () => {
    render(<JExercise2 />);
    const countElement = screen.getByText('-');
    // test by getting updated value of fizzBuzz
    const fizzBuzzButton = screen.getByText('F');
    fireEvent.click(fizzBuzzButton);

    // initial count state
    const fizzBuzzElement = screen.getByTestId('j-fizz-buzz');
    expect(fizzBuzzElement).toHaveTextContent('2');

    fireEvent.click(countElement);
    // updated count state to 1
    expect(fizzBuzzElement).toHaveTextContent('1');
  });

  it('does not decrease the count below 0', () => {
    render(<JExercise2 />);
    const countElement = screen.getByText('-');
    // test by getting updated value of fizzBuzz
    const fizzBuzzButton = screen.getByText('F');
    fireEvent.click(fizzBuzzButton);

    // initial count state
    const fizzBuzzElement = screen.getByTestId('j-fizz-buzz');
    expect(fizzBuzzElement).toHaveTextContent('2');

    fireEvent.click(countElement);
    fireEvent.click(countElement);
    fireEvent.click(countElement);
    fireEvent.click(countElement);
    fireEvent.click(countElement);
    // updated count state to 0
    expect(fizzBuzzElement).toHaveTextContent('FizzBuzz');
  });

  // get a derived value from the count in order to always show
  // a max of 5 rows on pyramid and chessboard
  it('shows a max of 5 rows on pyramid', () => {
    render(<JExercise2 />);
    const countElement = screen.getByText('+');
    // Select pyramid component
    const pyramidButton = screen.getByText('P');
    fireEvent.click(pyramidButton);

    // initial count state
    const pyramidDots = screen.getAllByTestId('j-pyramid-dot');
    expect(pyramidDots.length).toBe(6);

    fireEvent.click(countElement);
    fireEvent.click(countElement);
    fireEvent.click(countElement);

    // updated count state to 5
    const updatedPyramidDots = screen.getAllByTestId('j-pyramid-dot');
    expect(updatedPyramidDots.length).toBe(1);
  });

  it('shows a max of 5 rows on chessboard', () => {
    render(<JExercise2 />);
    const countElement = screen.getByText('+');
    // Select chessboard component
    const chessboardButton = screen.getByText('C');
    fireEvent.click(chessboardButton);

    // initial count state
    const chessboardSquares = screen.getAllByTestId(
      /j-chess-board-(white|black)-cell/
    );
    expect(chessboardSquares.length).toBe(9);

    fireEvent.click(countElement);
    fireEvent.click(countElement);
    fireEvent.click(countElement);

    // updated count state to 5
    const updatedChessboardSquares = screen.getAllByTestId(
      /j-chess-board-(white|black)-cell/
    );
    expect(updatedChessboardSquares.length).toBe(1);
  });
});
