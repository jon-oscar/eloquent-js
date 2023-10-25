import { useState } from 'react';
import CustomButton from '@/components/CustomButton';

import Pyramid from '@/components/exercises/chapter-2-oscar/Pyramid';
import FizzBuzz from '@/components/exercises/chapter-2-oscar/FizzBuzz';

const initialState = {
  rows: 1,
  phrase: '',
};

const PageChapter2 = () => {
  const [state, setState] = useState(initialState);

  return (
    <div>
      <div className='Pyramid'>
        <Pyramid rows={state.rows} />
        <div>
          <CustomButton
            title='Add a row'
            btnType='button'
            containerStyles='text-white rounded-full bg-[#B2980B] min-w-[150px]'
            handleClick={() =>
              setState((prevState) => ({
                ...prevState,
                rows: prevState.rows + 1,
              }))
            }
          />
        </div>
        <div>
          <CustomButton
            title='Remove a row'
            btnType='button'
            containerStyles='text-white rounded-full bg-[#B2980B] min-w-[150px]'
            handleClick={() =>
              setState((prevState) => ({
                ...prevState,
                rows: prevState.rows - 1,
              }))
            }
          />
        </div>
      </div>

      <div className='FizzBuzz'>
        <FizzBuzz
          phraseValue={state.phrase}
          onChange={(e) =>
            setState((prevState) => ({
              ...prevState,
              phrase: e.target.value,
            }))
          }
        />
      </div>
    </div>
  );
};

export default PageChapter2;
