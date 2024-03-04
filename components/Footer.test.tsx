import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />);
    const logo = screen.getByAltText('oreyesdev logo');
    expect(logo).toBeInTheDocument();
  });
});
