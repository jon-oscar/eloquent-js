import React, { useState } from 'react';
import Image from 'next/image';
import CustomButton from '@/components/CustomButton';

const initialState = [
  {
    name: 'Josh',
    age: 35,
    image: '/avatar1.png',
    phrase: 'Hi there! I am Josh, I am 35 years old.',
  },
  {
    name: 'Jacob',
    age: 23,
    image: '/avatar2.png',
    phrase: 'Hi there! I am Jacob, I am 23 years old.',
  },
];

const getMinimum = (a: number, b: number) => Math.min(a, b);

const stateFiltered = initialState.filter((item) =>
  item.age === getMinimum(initialState[0].age, initialState[1].age)
    ? item
    : null
);

const Minimum = () => {
  const [state, setState] = useState(initialState);

  return (
    <div>
      <div className='wrapper flex flex-col'>
        <div className='flex flex-row justify-between'>
          {state.map((item) => (
            <div
              key={item.name}
              className='flex-1 flex flex-col flex1 justify-center items-center m-2'
            >
              <div className='w-32 h-auto'>
                <Image
                  src={item.image}
                  alt={`Avatar for ${item.name}}`}
                  width={20}
                  height={20}
                  layout='responsive'
                  objectFit='cover'
                  className='rounded-full'
                />
              </div>
              <p className='text-center mt-2'>{item.phrase}</p>
            </div>
          ))}
        </div>
        <>
          <CustomButton
            title='Click me'
            btnType='button'
            containerStyles='text-white rounded-full bg-[#B2980B] min-w-[150px] max-h-[48px]'
            handleClick={() => setState(stateFiltered)}
          />
        </>
      </div>
    </div>
  );
};

export default Minimum;
