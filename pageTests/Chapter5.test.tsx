import { render, screen } from '@testing-library/react';
import Chapter5 from '../pages/chapter5';

describe('Chapter5', () => {
  it('renders the title, subtitle and details', () => {
    render(<Chapter5 />);
    const title = screen.getByText(/Chapter 5/i);
    const subtitle = screen.getByText('Higher-order Functions');
    const details = screen.getByText((details) =>
      details.startsWith(
        'Being able to pass function values to other functions is a deeply useful aspect of JavaScript.'
      )
    );
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(details).toBeInTheDocument();
  });

  it('renders the flattening exercise', () => {
    render(<Chapter5 />);
    const flattening = screen.getByText(/Flattening/i);
    expect(flattening).toBeInTheDocument();
    const jflattening = screen.getByText(/Compound words/i);
    expect(jflattening).toBeInTheDocument();
  });

  it('renders the your own loop exercise', () => {
    render(<Chapter5 />);
    const yourOwnLoop = screen.getByText(/Your Own Loop/i);
    expect(yourOwnLoop).toBeInTheDocument();
    const orbitingPlanets = screen.getByText(/Orbiting planets/i);
    expect(orbitingPlanets).toBeInTheDocument();
  });

  it('renders the everything exercise', () => {
    render(<Chapter5 />);
    const everything = screen.getByText(/Everything/i);
    expect(everything).toBeInTheDocument();
    const animals = screen.getByText(/find herbivore animals/i);
    expect(animals).toBeInTheDocument();
  });

  it('renders the writing direction exercise', () => {
    render(<Chapter5 />);
    const exercise = screen.getByText(
      /Enter any text to see the writing direction of the majority of the text/i
    );
    expect(exercise).toBeInTheDocument();
    const dominantDirection = screen.getByText(/Check Dominant Direction/i);
    expect(dominantDirection).toBeInTheDocument();
  });

  it('renders the developer card for Oscar Reyes', () => {
    render(<Chapter5 />);
    const oscarCard = screen.getByText(/Oscar Reyes/i);
    expect(oscarCard).toBeInTheDocument();
  });
});
