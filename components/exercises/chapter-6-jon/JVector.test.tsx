import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import JVector from './JVector';

async function submitVector(
  x: number,
  y: number,
  operation: 'Add' | 'Subtract'
) {
  const xInput = screen.getByLabelText('x');
  const yInput = screen.getByLabelText('y');

  await userEvent.type(xInput, x.toString());
  await userEvent.type(yInput, y.toString());

  const button = screen.getByRole('button', { name: operation });
  await userEvent.click(button);
}

describe('JVector', () => {
  it('updates the vector position when clicking "Add" button', async () => {
    render(<JVector />);
    await submitVector(5, 10, 'Add');
    const vectorPosition = screen.getByText('(5, 10)');
    expect(vectorPosition).toBeInTheDocument();
  });

  it('updates the vector position when clicking "Subtract" button', async () => {
    render(<JVector />);
    await submitVector(5, 10, 'Subtract');
    const vectorPosition = screen.getByText('(-5, -10)');
    expect(vectorPosition).toBeInTheDocument();
  });

  it('does not update the vector position when clicking "Add" button when the vector is out of bounds', async () => {
    render(<JVector />);
    await submitVector(1, 1, 'Add');
    expect(screen.getByText('(1, 1)')).toBeInTheDocument();
    await submitVector(100, 100, 'Add');
    expect(screen.getByText('(1, 1)')).toBeInTheDocument();
  });

  it('does not update the vector position when clicking "Subtract" button when the vector is out of bounds', async () => {
    render(<JVector />);
    await submitVector(1, 1, 'Subtract');
    expect(screen.getByText('(-1, -1)')).toBeInTheDocument();
    await submitVector(100, 100, 'Add');
    expect(screen.getByText('(-1, -1)')).toBeInTheDocument();
  });

  it('renders length of vector', async () => {
    render(<JVector />);
    await submitVector(3, 4, 'Add');
    expect(screen.getByText('5')).toBeInTheDocument();
  });
});
