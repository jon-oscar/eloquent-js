import { render, screen, fireEvent } from '@testing-library/react';
import JHerbivore from './JHerbivore';

function clickNextAnimalButton(): void {
  const button = screen.getByRole('button', { name: 'Next animal' });
  fireEvent.click(button);
}

describe('JHerbivore', () => {
  it('renders two animal images', () => {
    render(<JHerbivore />);
    const animalImages = screen.getAllByRole('img');
    expect(animalImages.length).toBe(2);
  });

  it('changes animal images when the button is clicked', () => {
    render(<JHerbivore />);
    const initialAnimalImages = screen.getAllByRole('img');
    clickNextAnimalButton();

    const updatedAnimalImages = screen.getAllByRole('img');
    expect(updatedAnimalImages[0]).not.toBe(initialAnimalImages[0]);
    expect(updatedAnimalImages[1]).not.toBe(initialAnimalImages[1]);
  });

  it('displays correct message', () => {
    render(<JHerbivore />);
    expect(screen.queryByText('Both herbivores 🌿')).not.toBeInTheDocument();
    expect(screen.getByText('Mixed ❌')).toBeInTheDocument();

    clickNextAnimalButton();
    expect(screen.queryByText('Both herbivores 🌿')).not.toBeInTheDocument();
    expect(screen.getByText('Mixed ❌')).toBeInTheDocument();

    clickNextAnimalButton();
    expect(screen.queryByText('Mixed ❌')).not.toBeInTheDocument();
    expect(screen.getByText('Both herbivores 🌿')).toBeInTheDocument();
  });
});
