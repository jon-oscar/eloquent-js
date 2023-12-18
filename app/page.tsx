'use client';

import ChapterCard from '@/components/ChapterCard';
import Hero from '@/components/Hero';
import chapter from '@/constants/chapter.json';

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='padding-x padding-y max-width mt-12' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Select exercise</h1>
          <p>Explore every exercise included in every chapter</p>
        </div>

        <div className='home__chapter-wrapper'>
          {chapter.map(({ title, subtitle, image, exercises, link }) => {
            return (
              <ChapterCard
                exercises={exercises}
                image={image}
                key={title}
                link={link}
                subtitle={subtitle}
                title={title}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
