import { render, screen } from '@testing-library/react';
import ChapterCard from './ChapterCard';

describe('ChapterCard', () => {
    const props = {
        title: 'Chapter 1',
        subtitle: 'Introduction',
        image: '/chapter1.png',
        exercises: '10',
        link: '/chapter1',
    };

    it('renders the title and subtitle', () => {
        render(<ChapterCard {...props} />);
        expect(screen.getByText(props.title)).toBeInTheDocument();
        expect(screen.getByText(props.subtitle)).toBeInTheDocument();
    });

    it('renders the image', () => {
        render(<ChapterCard {...props} />);
        expect(screen.getByRole('img')).toHaveAttribute('src', props.image);
    });

    it('renders the exercises count', () => {
        render(<ChapterCard {...props} />);
        expect(screen.getByText(`${props.exercises} exercises`)).toBeInTheDocument();
    });

    it('renders a link to the chapter', () => {
        render(<ChapterCard {...props} />);
        expect(screen.getByRole('link')).toHaveAttribute('href', props.link);
    });
});
