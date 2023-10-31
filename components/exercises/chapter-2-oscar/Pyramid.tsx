import React, { useState } from 'react';
import 'app/globals.css';
import CustomButton from '@/components/CustomButton';

interface PyramidProps {
  rows: number;
}

const getPyramid = (rows: number) => {
  let pyramid = '';
  for (let i = 1; i <= rows; i++) {
    pyramid += '🌝'.repeat(i) + '\n';
  }
  return pyramid;
};

const Pyramid = ({ rows }: PyramidProps) => {
  const [state, setState] = useState(rows);

  return (
    <div className='flex flex-row'>
      <div className='flex flex-col flex-1'>
        {getPyramid(state)
          .split('\n')
          .map((row, i) => {
            return (
              <div data-testid='pyramid-row' key={i}>
                {row}
              </div>
            );
          })}
      </div>
      <div className='flex flex-col gap-2 flex-1 justify-center items-center'>
        {state < 8 && (
          <>
            <CustomButton
              title='Add a row'
              btnType='button'
              containerStyles='text-white rounded-full bg-[#B2980B] min-w-[150px] max-h-[48px]'
              handleClick={() =>
                setState((prevState) =>
                  prevState === 8 ? prevState : prevState + 1
                )
              }
            />

            <CustomButton
              title='Remove a row'
              btnType='button'
              containerStyles='text-white rounded-full bg-[#B2980B] min-w-[150px] max-h-[48px]'
              handleClick={() =>
                setState((prevState) =>
                  prevState === 0 ? prevState : prevState - 1
                )
              }
            />
          </>
        )}

        {state === 8 && (
          <>
            <>
              <CustomButton
                title='Start over?'
                btnType='button'
                containerStyles='text-white rounded-full bg-[#B2980B] min-w-[150px] max-h-[48px]'
                handleClick={() =>
                  setState((prevState) => {
                    return (prevState = 0);
                  })
                }
              />
              <span className=' text-red-600 mt-2 text-[14px] leading-[17px] font-semibold text-center gap-2'>
                Max rows reached!
              </span>
            </>
          </>
        )}
      </div>
    </div>
  );
};

export default Pyramid;
