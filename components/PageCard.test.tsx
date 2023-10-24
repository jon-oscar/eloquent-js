import React from 'react';
import { render } from '@testing-library/react';
import PageCard, { Info } from './PageCard';

describe('PageCard', () => {
    const cardInfo: Info[] = [
        {
            id: 1,
            title: 'Title 1',
            details: 'Details 1',
            code: (name: string) => console.log(`Hello, ${name}!`),
        },
        {
            id: 2,
            title: 'Title 2',
            details: 'Details 2',
            code: (name: string) => console.log(`Goodbye, ${name}!`),
        },
    ];

    it('renders a card for each item in cardInfo', () => {
        const { getAllByTestId } = render(<PageCard cardInfo={cardInfo} />);
        expect(getAllByTestId('page-card')).toHaveLength(cardInfo.length);
    });

    it('renders the title and details for each card', () => {
        const { getByText } = render(<PageCard cardInfo={cardInfo} />);
        cardInfo.forEach(({ title, details }) => {
            expect(getByText(title)).toBeInTheDocument();
            expect(getByText(details)).toBeInTheDocument();
        });
    });
});
