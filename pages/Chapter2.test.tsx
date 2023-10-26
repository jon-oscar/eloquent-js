import { render, screen } from '@testing-library/react';
import Chapter2 from './chapter2';

describe('chapter2', () => {
  it('renders the title and subtitle', () => {
    render(<Chapter2 />);
    const titleElement = screen.getByText(/Chapter 2/i);
    expect(titleElement).toBeInTheDocument();
    const subtitleElement = screen.getByText(/Program Structure/i);
    expect(subtitleElement).toBeInTheDocument();
  });

  it('renders the details section', () => {
    render(<Chapter2 />);
    const detailsElement = screen.getByText(/Expressions and Statements/i);
    expect(detailsElement).toBeInTheDocument();
  });

  it('renders the developers section', () => {
    render(<Chapter2 />);
    const devOscarElement = screen.getByText(/Oscar Reyes/i);
    expect(devOscarElement).toBeInTheDocument();
    const devJonElement = screen.getByText(/Jon Doe/i);
    expect(devJonElement).toBeInTheDocument();
  });
});
