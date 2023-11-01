import { render, screen } from '@testing-library/react';
import Minimum from './Minimum';

describe('Minimum component', () => {
  it('renders the name of the youngest person', () => {
    render(<Minimum />);
    const nameElement = screen.getByText(/Jacob/i);
    expect(nameElement).toBeInTheDocument();
  });

  it('renders the age of the youngest person', () => {
    render(<Minimum />);
    const ageElement = screen.getByText(/23/i);
    expect(ageElement).toBeInTheDocument();
  });

  it('renders the image of the youngest person', () => {
    render(<Minimum />);
    const imageElement = screen.getByAltText(/Jacob/i);
    expect(imageElement).toBeInTheDocument();
  });

  it('renders the phrase of the youngest person', () => {
    render(<Minimum />);
    const phraseElement = screen.getByText(
      /Hi there! I am Jacob, I am 23 years old./i
    );
    expect(phraseElement).toBeInTheDocument();
  });
});
