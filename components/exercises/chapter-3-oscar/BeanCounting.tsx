import React, { useState } from 'react';

const countBs = (param: string): number => {
  let count = 0;
  for (let i = 0; i < param.length; i++) {
    if (param[i] === 'B') {
      count++;
    }
  }
  return count;
};

const countChar = (param: string, char: string): number => {
  let count = 0;
  for (let i = 0; i < param.length; i++) {
    if (param[i] === char) {
      count++;
    }
  }
  return count;
};

const BeanCounting = () => {
  const [state, setState] = useState('');
  return (
    <div>
      <div>{countBs('BBC')}</div>
      <div>{countChar('This is a phrase', 's')}</div>
      <input
        type='text'
        value={state}
        placeholder='Enter your phrase here'
        onChange={(e) => setState(e.target.value)}
        className='text-center bg-[#FEFCF3] border-2 border-black-50 rounded-3xl w-full h-[50px]'
        aria-label='Phrase'
      />
      <span className='text-center bg-white border-2 border-[#B2980B] rounded-3xl w-full h-[50px] overflow-hidden'>
        {countBs(state)}
      </span>
    </div>
  );
};

export default BeanCounting;
