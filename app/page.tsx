'use client';

import { Hero, ChapterCard } from '@/components';
import { chapter } from '@/constants/chapter';

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Select exercise</h1>
          <p>Explore every exercise included in every chapter</p>
        </div>

        <div className='home__chapter-wrapper'>
          {chapter.map(({ title, subtitle, image, exercises, link }) => {
            return (
              <ChapterCard
                title={title}
                subtitle={subtitle}
                image={image}
                exercises={exercises}
                link={link}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
