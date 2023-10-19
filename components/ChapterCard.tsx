'use client';

import { useState } from 'react';
import Image from 'next/image';

import { CardDetails, CustomButton } from '.';

const ChapterCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='chapter-card group'>
      <div className='chapter-card__content'>
        <h2 className='chapter-card__content-title'>Chapter 1</h2>
      </div>

      <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
        <span className='self-start text-[14px] leading-[17px] font-semibold'>
          Values, Types, and Operators
        </span>
      </p>

      <div className='relative w-full h-40 my-3 object-contain'>
        <Image
          src='/hero.png'
          alt='chapter img'
          fill
          priority
          className='object-contain'
        />
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-grey'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <span className='self-end text-[14px] leading-[17px] font-medium'>
              Values, Types, and Operators
            </span>
          </div>
        </div>

        <div className='chapter-card__btn-container'>
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-[#B2980B]'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CardDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </div>
  );
};

export default ChapterCard;
