import CustomButton from '@/components/CustomButton';
import 'app/globals.css';
import { useState } from 'react';

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
      <div className='flex flex-1 flex-col'>
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
      <div className='flex flex-1 flex-col items-center justify-center gap-2'>
        {state < 8 && (
          <>
            <CustomButton
              btnType='button'
              containerStyles='text-white rounded-full bg-[#B2980B] min-w-[150px] max-h-[48px]'
              handleClick={() =>
                setState((prevState) =>
                  prevState === 8 ? prevState : prevState + 1
                )
              }
              title='Add a row'
            />

            <CustomButton
              btnType='button'
              containerStyles='text-white rounded-full bg-[#B2980B] min-w-[150px] max-h-[48px]'
              handleClick={() =>
                setState((prevState) =>
                  prevState === 0 ? prevState : prevState - 1
                )
              }
              title='Remove a row'
            />
          </>
        )}

        {state === 8 && (
          <>
            <>
              <CustomButton
                btnType='button'
                containerStyles='text-white rounded-full bg-[#B2980B] min-w-[150px] max-h-[48px]'
                handleClick={() =>
                  setState(() => {
                    return 0;
                  })
                }
                title='Start over?'
              />
              <span className=' mt-2 gap-2 text-center text-[14px] font-semibold leading-[17px] text-red-600'>
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
