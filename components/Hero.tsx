'use client';
import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
  const handleScroll = () => {
    document.getElementById('discover')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='hero'>
      <div className='padding-x flex-1 pt-36'>
        <h1 className='hero__title'>
          This is a web project about the book Eloquent JavaScript!
        </h1>
        <p className='hero__subtitle'>
          A mentoring project crafted showing what I have learned in
          collaboration with a senior engineer, using real world practices.
        </p>
        <CustomButton
          containerStyles='bg-[#B2980B] text-white rounded-full mt-10'
          handleClick={handleScroll}
          title='Explore chapters'
        />
      </div>

      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image
            alt='hero image'
            className='object-contain'
            fill
            src='/hero.png'
          />
        </div>
        <div className='hero__image-overlay' />
      </div>
    </div>
  );
};

export default Hero;
