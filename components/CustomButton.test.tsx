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
      <CustomButton title='Click me' handleClick={handleClick} />
    ).getByText;
    fireEvent.click(getByTextResult('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
