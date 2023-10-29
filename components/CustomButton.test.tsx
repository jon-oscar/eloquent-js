import { render, fireEvent } from '@testing-library/react';
import CustomButton from './CustomButton';

describe('CustomButton', () => {
  it('renders the button with the correct title', () => {
    const { getByText } = render(<CustomButton title='Click me!' />);
    expect(getByText('Click me!')).toBeInTheDocument();
  });

  it('calls the handleClick function when clicked', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <CustomButton title='Click me!' handleClick={handleClick} />
    );
    fireEvent.click(getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
