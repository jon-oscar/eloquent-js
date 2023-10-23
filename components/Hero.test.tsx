/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import { Hero } from '.';

describe('Hero', () => {
  it('renders a heading', () => {
    render(<Hero />);

    const heading = screen.getByRole('heading', {
      name: /this is a web project about the book eloquent javascript!/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders a paragraph', () => {
    render(<Hero />);

    const paragraph = screen.getByText(
      /a mentoring project crafted showing what i have learned in collaboration with a senior engineer, using real world practices./i
    );

    expect(paragraph).toBeInTheDocument();
  });

  it('renders a button', () => {
    render(<Hero />);

    const button = screen.getByRole('button', {
      name: /explore chapters/i,
    });

    expect(button).toBeInTheDocument();
  });

  it('renders an image', () => {
    render(<Hero />);

    const image = screen.getByRole('img', {
      name: /hero image/i,
    });

    expect(image).toBeInTheDocument();
  });
});
