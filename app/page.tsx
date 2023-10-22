'use client';

import { Hero, ChapterCard } from '@/components';

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
          <ChapterCard
            title='Chapter 1'
            subtitle='Values, Types, and Operators'
            image='/chapter_picture_1.png'
          />
        </div>
      </div>
    </main>
  );
}
