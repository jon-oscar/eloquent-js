import React from 'react';
import { render, screen } from '@testing-library/react';
import PageCard, { Info } from './PageCard';

describe('PageCard', () => {
  const info: Info = {
    id: 1,
    title: 'Test Title',
    details: 'Test Details',
    code: () => <div>Test Code</div>,
  };

  it('renders the title', () => {
    render(<PageCard {...info} />);
    const infoTitle = screen.getByText(info.title);
    expect(infoTitle).toBeInTheDocument();
  });

  it('renders the details', () => {
    render(<PageCard {...info} />);
    const infoDetails = screen.getByText(info.details);
    expect(infoDetails).toBeInTheDocument();
  });

  it('renders the code', () => {
    render(<PageCard {...info} />);
    const infoCode = screen.getByText('Test Code');
    expect(infoCode).toBeInTheDocument();
  });
});
