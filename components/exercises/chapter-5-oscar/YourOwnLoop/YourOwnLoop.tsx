import React from 'react';

let timer = {
  work: 25,
  break: 5,
  seconds: '00',
};

export default function YourOwnLoop() {
  return (
    <div className='flex h-max items-center'>
      <div className='container flex max-w-[592px] flex-col items-center justify-center bg-red-300 p-2'>
        <div className='m-5 grid w-40 grid-cols-2 rounded-lg p-1 text-center shadow-md'>
          <p>Work</p>
          <p>Break</p>
        </div>

        <div className='flex h-60 w-60 items-center justify-center rounded-full shadow-lg'>
          <p className='text-5xl'>{timer.work}</p>
          <p className='text-2xl'>:</p>
          <p className='text-5xl'>{timer.seconds}</p>
          <p></p>
          <p></p>
        </div>

        <div className='mt-3'>
          <button className='text-3xl cursor-pointer'>▶️</button>
          <button className='text-3xl cursor-pointer'>🔄</button>
        </div>
      </div>
    </div>
  );
}
