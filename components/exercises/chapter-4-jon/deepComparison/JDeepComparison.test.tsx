import { fireEvent, render, screen } from '@testing-library/react';
import JDeepComparison from './JDeepComparison';

describe('JDeepComparison component', () => {
  it('renders two buttons with different text styles', () => {
    render(<JDeepComparison />);

    const button1 = screen.getByText("I don't do fashion.");
    const button2 = screen.getByText('I am fashion.');

    expect(button1).toHaveStyle(`font-family: Impact`);
    expect(button1).toHaveStyle(`color: hotpink`);

    expect(button2).toHaveStyle(`font-family: Bodoni`);
    expect(button2).toHaveStyle(`color: turquoise`);
  });

  it('changes the style of the clicked button', () => {
    render(<JDeepComparison />);

    const button1 = screen.getByText("I don't do fashion.");
    fireEvent.click(button1);
    expect(button1).not.toHaveStyle(`font-family: Impact`);
    expect(button1).not.toHaveStyle(`color: hotpink`);

    const button2 = screen.getByText('I am fashion.');
    fireEvent.click(button2);
    expect(button2).not.toHaveStyle(`font-family: Bodoni`);
    expect(button2).not.toHaveStyle(`color: turquoise`);
  });

  it('displays a message indicating the styles of the two buttons do not match', () => {
    render(<JDeepComparison />);
    expect(screen.getByText('❌ Text styles do not match')).toBeInTheDocument();

    // can't test this appearing since it's random
    expect(screen.queryByText('✅ Text styles match')).not.toBeInTheDocument();
  });
});
