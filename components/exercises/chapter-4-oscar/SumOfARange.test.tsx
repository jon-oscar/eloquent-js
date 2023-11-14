import { render, screen, fireEvent } from '@testing-library/react';
import SumOfARange from './SumOfARange';

describe('SumOfARange', () => {
  it('renders the animal images', () => {
    render(<SumOfARange />);
    const bearImage = screen.getByAltText('Bear');
    expect(bearImage).toBeInTheDocument();
    const boarImage = screen.getByAltText('Boar');
    expect(boarImage).toBeInTheDocument();
    const buffaloImage = screen.getByAltText('Buffalo');
    expect(buffaloImage).toBeInTheDocument();
    const monkeyImage = screen.getByAltText('Monkey');
    expect(monkeyImage).toBeInTheDocument();
    const elephantImage = screen.getByAltText('Elephant');
    expect(elephantImage).toBeInTheDocument();
    const hippoImage = screen.getByAltText('Hippo');
    expect(hippoImage).toBeInTheDocument();
    const lionImage = screen.getByAltText('Lion');
    expect(lionImage).toBeInTheDocument();
    const lynxImage = screen.getByAltText('Lynx');
    expect(lynxImage).toBeInTheDocument();
    const ostrichImage = screen.getByAltText('Ostrich');
    expect(ostrichImage).toBeInTheDocument();
    const wolfImage = screen.getByAltText('Wolf');
    expect(wolfImage).toBeInTheDocument();
  });

  it('updates the range state when the start and end select elements change', () => {
    render(<SumOfARange />);
    const startSelect = screen.getByTestId('Start');
    const endSelect = screen.getByTestId('End');
    fireEvent.change(startSelect, { target: { value: '3' } });
    fireEvent.change(endSelect, { target: { value: '7' } });
    expect(startSelect).toHaveValue('3');
    expect(endSelect).toHaveValue('7');
  });

  it('renders animals when selecting different ranges', () => {
    render(<SumOfARange />);
    const startSelect = screen.getByTestId('Start');
    const endSelect = screen.getByTestId('End');

    fireEvent.change(startSelect, { target: { value: '3' } });
    fireEvent.change(endSelect, { target: { value: '6' } });

    const animals = screen.getAllByRole('img');
    expect(animals).toHaveLength(4);

    fireEvent.change(startSelect, { target: { value: '1' } });
    fireEvent.change(endSelect, { target: { value: '10' } });

    const allAnimals = screen.getAllByRole('img');
    expect(allAnimals).toHaveLength(10);
  });

  it('displays the correct sum of animals', () => {
    render(<SumOfARange />);
    const startSelect = screen.getByTestId('Start');
    const endSelect = screen.getByTestId('End');

    fireEvent.change(startSelect, { target: { value: '3' } });
    fireEvent.change(endSelect, { target: { value: '6' } });

    const sum = screen.getByText('18');
    expect(sum).toBeInTheDocument();

    fireEvent.change(startSelect, { target: { value: '1' } });
    fireEvent.change(endSelect, { target: { value: '10' } });

    const allSum = screen.getByText('55');
    expect(allSum).toBeInTheDocument();
  });
});
