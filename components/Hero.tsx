'use client';
import Image from 'next/image';
import { CustomButton } from './';

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className='hero'>
      <div className='flex-1 padding-x pt-36'>
        <h1 className='hero__title'>
          This is a web project about the book Eloquent JavaScript!
        </h1>
        <p className='hero__subtitle'>
          A mentoring project crafted showing what I have learned in
          collaboration with a senior engineer, using real world practices.
        </p>
        <CustomButton
          title='Explore chapters'
          containerStyles='bg-[#B2980B] text-white rounded-full mt-10'
          handleClick={handleScroll}
        />
      </div>

      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image
            className='object-contain'
            src='/hero.png'
            alt='hero image'
            fill
          />
        </div>
        <div className='hero__image-overlay' />
      </div>
    </div>
  );
};

export default Hero;
