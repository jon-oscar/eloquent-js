import { fireEvent, render, screen } from '@testing-library/react';
import JMinimum from './JMinimum';

describe('JMinimum', () => {
  it('renders two bug counters and a "Which code has fewer bugs?" button', () => {
    render(<JMinimum />);
    expect(screen.getByText('Which code has fewer bugs?')).toBeInTheDocument();
    expect(screen.getByTestId('bug-counter-1')).toBeInTheDocument();
    expect(screen.getByTestId('bug-counter-2')).toBeInTheDocument();
  });

  it('increases the number of bugs when pressing on the increase button', () => {
    render(<JMinimum />);
    const bugs = screen.getAllByText('🐛');
    expect(bugs.length).toBe(8);

    const increaseButtons = screen.getAllByText('+');
    expect(increaseButtons.length).toBe(2);
    fireEvent.mouseDown(increaseButtons[0]);
    fireEvent.mouseUp(increaseButtons[0]);
    fireEvent.mouseDown(increaseButtons[1]);
    fireEvent.mouseUp(increaseButtons[1]);

    const updatedBugs = screen.getAllByText('🐛');
    expect(updatedBugs.length).toBe(10);
  });

  it('decreases the number of bugs when pressing on the decrease button', () => {
    render(<JMinimum />);
    const bugs = screen.getAllByText('🐛');
    expect(bugs.length).toBe(8);

    const decreaseButtons = screen.getAllByText('-');
    expect(decreaseButtons.length).toBe(2);
    fireEvent.mouseDown(decreaseButtons[0]);
    fireEvent.mouseUp(decreaseButtons[0]);
    fireEvent.mouseDown(decreaseButtons[1]);
    fireEvent.mouseUp(decreaseButtons[1]);

    const updatedBugs = screen.getAllByText('🐛');
    expect(updatedBugs.length).toBe(6);
  });

  it('changes the border style of the counter with the fewest bugs when the "Which code has fewer bugs?" button is clicked', () => {
    render(<JMinimum />);
    const minButton = screen.getByText('Which code has fewer bugs?');
    const bugCounter1 = screen.getByTestId('bug-counter-1');
    const bugCounter2 = screen.getByTestId('bug-counter-2');
    expect(bugCounter1).toHaveClass('border-transparent');
    expect(bugCounter2).toHaveClass('border-transparent');

    fireEvent.click(minButton);
    expect(bugCounter1).toHaveClass('border-transparent');
    expect(bugCounter2).toHaveClass('border-[#B2430B9F]');
  });
});
