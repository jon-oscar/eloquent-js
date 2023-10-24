import React from 'react';
import { render, screen } from '@testing-library/react';
import PageCard, { Info } from './PageCard';

describe('PageCard', () => {
  const cardInfo: Info[] = [
    {
      id: 1,
      title: 'Title 1',
      details: 'Details 1',
      code: (name: string) => console.log(`Code for ${name}`),
    },
    {
      id: 2,
      title: 'Title 2',
      details: 'Details 2',
      code: (name: string) => console.log(`Code for ${name}`),
    },
  ];

  it('renders the correct number of cards', () => {
    render(<PageCard cardInfo={cardInfo} />);
    expect(screen.getAllByTestId('page-card')).toHaveLength(cardInfo.length);
  });

  it('renders the correct title and details for each card', () => {
    render(<PageCard cardInfo={cardInfo} />);
    cardInfo.forEach((info) => {
      expect(screen.getByText(info.title)).toBeInTheDocument();
      expect(screen.getByText(info.details)).toBeInTheDocument();
    });
  });
});
