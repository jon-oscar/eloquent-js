import React from 'react';
import Image from 'next/image';
import CustomButton from '@/components/CustomButton';

const getMinimum = (a: number, b: number) => {
  const result = Math.min(a, b);

  return result;
};

const Minimum = () => {
  return (
    <div>
      <div className='wrapper flex flex-col gap-3'>
        <div className='flex flex-row justify-between'>
          <div className='flex-1 flex flex-col flex1 justify-center items-center'>
            <div className='w-32 h-auto'>
              <Image
                src={'/avatar1.png'}
                alt={'Avatar for Josh'}
                width={20}
                height={20}
                layout='responsive'
                objectFit='cover'
                className='rounded-full'
              />
            </div>
            <p className=' text-center'>
              Hi there! I am Josh, <br /> I am 35 years old.
            </p>
          </div>
          <div className='flex-1 flex flex-col flex1 justify-center items-center'>
            <div className='w-32 h-auto'>
              <Image
                src={'/avatar2.png'}
                alt={'Avatar for David'}
                width={20}
                height={20}
                layout='responsive'
                objectFit='cover'
                className='rounded-full'
              />
            </div>
            <p className=' text-center'>
              Hi there! I am Josh, <br /> I am 35 years old.
            </p>
          </div>
        </div>
        <>
          <CustomButton
            title='Click me'
            btnType='button'
            containerStyles='text-white rounded-full bg-[#B2980B] min-w-[150px] max-h-[48px]'
            handleClick={() => {}}
          />
        </>
      </div>
    </div>
  );
};

export default Minimum;
