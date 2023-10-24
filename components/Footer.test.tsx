import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />);
    const logo = screen.getByAltText('oreyesdev logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders the footer links', () => {
    render(<Footer />);
    const footerLinks = screen.getAllByRole('link');
    expect(footerLinks).toHaveLength(6);
  });

  it('renders the privacy and policy link', () => {
    render(<Footer />);
    const privacyLink = screen.getByText('Privacy & Policy');
    expect(privacyLink).toBeInTheDocument();
  });

  it('renders the terms and condition link', () => {
    render(<Footer />);
    const termsLink = screen.getByText('Terms & Condition');
    expect(termsLink).toBeInTheDocument();
  });
});
