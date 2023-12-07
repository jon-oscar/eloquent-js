import { fireEvent, render, screen } from '@testing-library/react';
import JArrayReversion, {
  INITIAL_EMOJIS_1,
  INITIAL_EMOJIS_2,
} from './JArrayReversion';

describe('JArrayReversion', () => {
  it('renders the emojis1 array in reverse order when "Reverse" button is clicked', () => {
    render(<JArrayReversion />);
    const emojis1Container = screen.getByTestId('emojis1-container');
    expect(emojis1Container).toHaveTextContent(INITIAL_EMOJIS_1.join(''));

    const reverseButton = screen.getByRole('button', { name: 'Reverse' });
    fireEvent.click(reverseButton);
    expect(emojis1Container).toHaveTextContent(
      INITIAL_EMOJIS_1.reverse().join('')
    );
  });

  it('renders the emojis2 array in reverse order when "Reverse in place" button is clicked', () => {
    // Do a deep copy of the array, otherwise can't use it for testing since the original array is mutated
    const emojis2 = JSON.parse(JSON.stringify(INITIAL_EMOJIS_2));

    render(<JArrayReversion />);
    const emojis2Container = screen.getByTestId('emojis2-container');
    expect(emojis2Container).toHaveTextContent(emojis2.join(''));

    const reverseInPlaceButton = screen.getByRole('button', {
      name: 'Reverse in place',
    });
    fireEvent.click(reverseInPlaceButton);
    expect(emojis2Container).toHaveTextContent(emojis2.reverse().join(''));
  });
});
