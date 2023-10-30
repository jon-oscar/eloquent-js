import React, { ReactNode } from 'react';

export type Info = {
  id: number;
  title: string;
  details: string;
  code: () => ReactNode;
};

const PageCard = ({ id, title, details, code }: Info) => {
  return (
    <>
      <div
        key={id}
        className=' w-[40rem] flex-1 flex flex-col p-6 justify-center items-start text-black-100 bg-[#FEFCF3] hover:bg-white hover:shadow-md rounded-3xl mb-5'
      >
        <div className='chapter-card__content'>
          <h2 className='chapter-card__content-title'>{title}</h2>
        </div>
        <span className='self-start mt-2 text-[14px] leading-[17px] font-semibold'>
          {details}
        </span>

        <div className='bg-white mt-4 w-full h-full rounded-3xl'>
          <div className='p-6'>{code()}</div>
        </div>
      </div>
    </>
  );
};

export default PageCard;
