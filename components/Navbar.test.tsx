import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />);
    const logo = screen.getByAltText('oreyesdev Logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders the "Contact me" button', () => {
    render(<Navbar />);
    const button = screen.getByRole('button', { name: 'Contact me' });
    expect(button).toBeInTheDocument();
  });
});
