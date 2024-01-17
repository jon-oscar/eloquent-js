import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import JOrbit from './JOrbit';

describe('JOrbit component', () => {
  it('renders the correct initial number of planets', () => {
    render(<JOrbit />);
    const numberOfPlanets = screen.getByText(/Number of Planets:/i).textContent;
    expect(numberOfPlanets).toEqual('Number of Planets: 0');
    expect(screen.queryByTestId('orbit')).not.toBeInTheDocument();
    expect(screen.queryByTestId('planet')).not.toBeInTheDocument();
  });

  it('adds and removes planets', () => {
    render(<JOrbit />);

    function modifyPlanetsAndExpectNumberToBe(
      action: 'add' | 'remove',
      numberOfPlanets: number
    ) {
      if (action === 'add') {
        fireEvent.click(screen.getByText('Add'));
      } else if (action === 'remove') {
        fireEvent.click(screen.getByText('Remove'));
      }
      expect(screen.getByText(/Number of Planets:/i).textContent).toEqual(
        `Number of Planets: ${numberOfPlanets}`
      );
      expect(screen.queryAllByTestId('planet')).toHaveLength(numberOfPlanets);
      expect(screen.queryAllByTestId('orbit')).toHaveLength(numberOfPlanets);
    }

    modifyPlanetsAndExpectNumberToBe('add', 1);
    modifyPlanetsAndExpectNumberToBe('add', 2);
    modifyPlanetsAndExpectNumberToBe('remove', 1);
    modifyPlanetsAndExpectNumberToBe('add', 2);
    modifyPlanetsAndExpectNumberToBe('add', 3);
    modifyPlanetsAndExpectNumberToBe('add', 4);
    modifyPlanetsAndExpectNumberToBe('add', 4); // Max number of planets
    modifyPlanetsAndExpectNumberToBe('remove', 3);
    modifyPlanetsAndExpectNumberToBe('remove', 2);
    modifyPlanetsAndExpectNumberToBe('remove', 1);
    modifyPlanetsAndExpectNumberToBe('remove', 0);
    modifyPlanetsAndExpectNumberToBe('remove', 0); // Min number of planets
  });
});
