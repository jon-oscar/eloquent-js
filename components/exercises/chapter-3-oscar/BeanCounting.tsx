import React, { useState } from 'react';

export function countBs(param: string): number {
  let count = 0;
  for (let i = 0; i < param.length; i++) {
    if (param[i] === 'B') {
      count++;
    }
  }
  return count;
}

export function countChar(param: string, char: string): number {
  let count = 0;
  for (let i = 0; i < param.length; i++) {
    if (param[i] === char) {
      count++;
    }
  }
  return count;
}

const BeanCounting = () => {
  const [state, setState] = useState('BBC');
  return (
    <div>
      <input
        type='text'
        value={state}
        placeholder='Enter your phrase here'
        onChange={(e) => setState(e.target.value)}
        className='text-center bg-[#FEFCF3] border-2 border-black-50 rounded-3xl w-full h-[50px]'
        aria-label='Phrase'
      />
      <div className='flex flex-row mt-2'>
        <div className='flex-1 text-center'>
          <p>This phrase has {countBs(state)} B letter</p>
        </div>
        <div className='flex-1 text-center'>
          <p>This phrase has {countChar(state, 's')} s letter</p>
        </div>
      </div>
    </div>
  );
};

export default BeanCounting;
