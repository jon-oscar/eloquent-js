import { fireEvent, render, screen } from '@testing-library/react';
import CustomButton from './CustomButton';

describe('CustomButton', () => {
  it('renders the button with the correct title', () => {
    render(<CustomButton title='Click me' />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls the handleClick function when clicked', () => {
    const handleClick = jest.fn();
    const getByTextResult = render(
      <CustomButton handleClick={handleClick} title='Click me' />
    ).getByText;
    fireEvent.click(getByTextResult('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('calls the handleMouseDown function when mouse is pressed down', () => {
    const handleMouseDown = jest.fn();
    const getByTextResult = render(
      <CustomButton handleMouseDown={handleMouseDown} title='Click me' />
    ).getByText;
    fireEvent.mouseDown(getByTextResult('Click me'));
    expect(handleMouseDown).toHaveBeenCalledTimes(1);
  });

  it('calls the handleMouseUp function when mouse is released', () => {
    const handleMouseUp = jest.fn();
    const getByTextResult = render(
      <CustomButton handleMouseUp={handleMouseUp} title='Click me' />
    ).getByText;
    fireEvent.mouseUp(getByTextResult('Click me'));
    expect(handleMouseUp).toHaveBeenCalledTimes(1);
  });
});
