import { render, screen, fireEvent } from '@testing-library/react';
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

  it('only displays the youngest person when the button is clicked', () => {
    render(<Minimum />);
    const buttonElement = screen.getByRole('button', {
      name: /Click me/i,
    });
    fireEvent.click(buttonElement);
    const nameElement = screen.getByText(/Jacob/i);
    expect(nameElement).toBeInTheDocument();
    const ageElement = screen.getByText(/23/i);
    expect(ageElement).toBeInTheDocument();
    const imageElement = screen.getByAltText(/Jacob/i);
    expect(imageElement).toBeInTheDocument();
    const phraseElement = screen.getByText(
      /Hi there! I am Jacob, I am 23 years old./i
    );
    expect(phraseElement).toBeInTheDocument();
    const otherNameElement = screen.queryByText(/Josh/i);
    expect(otherNameElement).not.toBeInTheDocument();
    const otherAgeElement = screen.queryByText(/35/i);
    expect(otherAgeElement).not.toBeInTheDocument();
    const otherImageElement = screen.queryByAltText(/Josh/i);
    expect(otherImageElement).not.toBeInTheDocument();
    const otherPhraseElement = screen.queryByText(
      /Hi there! I am Josh, I am 35 years old./i
    );
    expect(otherPhraseElement).not.toBeInTheDocument();
  });
});
