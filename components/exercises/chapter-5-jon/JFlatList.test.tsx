import { act, render, screen } from '@testing-library/react';
import JFlatList from './JFlatList';
import userEvent from '@testing-library/user-event';

async function clickButtonAndExpectResult(
  buttonText: string,
  expectedResult: string
): Promise<void> {
  await userEvent.click(screen.getByText(buttonText));
  expect(screen.getByText(expectedResult)).toBeInTheDocument();
}

describe('JFlatList', () => {
  it('renders with default state', () => {
    render(<JFlatList />);
    [
      'Prefixes',
      'Suffixes',
      'un',
      'dis',
      'super',
      'able',
      'ful',
      'ment',
      'ness',
      'ly',
      'Result',
      'unlikely',
    ].forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it('changes the word when a prefixes and suffixes are deselected and selected', async () => {
    render(<JFlatList />);
    await clickButtonAndExpectResult('un', 'likely');
    await clickButtonAndExpectResult('ly', 'like');
    await clickButtonAndExpectResult('able', 'likeable');
    await clickButtonAndExpectResult('super', 'superlikeable');
    await clickButtonAndExpectResult('ness', 'superlikeableness');
    await clickButtonAndExpectResult('un', 'superunlikeableness');
  });
});
