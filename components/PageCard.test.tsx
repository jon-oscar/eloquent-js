import React from 'react';
import { render } from '@testing-library/react';
import PageCard, { Info } from './PageCard';

describe('PageCard', () => {
  const info: Info = {
    id: 1,
    title: 'Test Title',
    details: 'Test Details',
    code: () => <div>Test Code</div>,
  };

  it('renders the title', () => {
    const { getByText } = render(<PageCard {...info} />);
    expect(getByText(info.title)).toBeInTheDocument();
  });

  it('renders the details', () => {
    const { getByText } = render(<PageCard {...info} />);
    expect(getByText(info.details)).toBeInTheDocument();
  });

  it('renders the code', () => {
    const { getByText } = render(<PageCard {...info} />);
    expect(getByText('Test Code')).toBeInTheDocument();
  });
});
