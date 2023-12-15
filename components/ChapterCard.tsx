'use client';

import Image from 'next/image';

import Link from 'next/link';
import CustomButton from './CustomButton';

export type ChapterCardProps = {
  title: string;
  subtitle: string;
  image: string;
  exercises: string;
  link: string;
};

const ChapterCard = ({
  title,
  subtitle,
  image,
  exercises,
  link,
}: ChapterCardProps) => {
  return (
    <div className='chapter-card group'>
      <div className='chapter-card__content'>
        <h2 className='chapter-card__content-title'>{title}</h2>
      </div>

      <p className='mt-6 flex text-[32px] font-extrabold leading-[38px]'>
        <span className='self-start text-[14px] font-semibold leading-[17px]'>
          {subtitle}
        </span>
      </p>

      <div className='relative my-3 h-40 w-full object-contain'>
        <Image
          alt='chapter image'
          className='object-contain'
          fill
          priority
          src={image}
        />
      </div>

      <div className='relative mt-2 flex w-full'>
        <div className='flex w-full justify-between text-grey group-hover:invisible'>
          <div className='flex flex-col items-center justify-center gap-2'>
            <span className='self-end text-[14px] font-medium leading-[17px]'>
              {exercises}
            </span>
          </div>
        </div>

        <Link className='chapter-card__btn-container' href={link}>
          <CustomButton
            containerStyles='w-full py-[16px] rounded-full bg-[#B2980B]'
            rightIcon='/right-arrow.svg'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            title='View More'
          />
        </Link>
      </div>
    </div>
  );
};

export default ChapterCard;
