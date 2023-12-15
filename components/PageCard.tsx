import { ReactNode } from 'react';

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
        className=' mb-5 flex w-[40rem] flex-1 flex-col items-start justify-center rounded-3xl bg-[#FEFCF3] p-6 text-black-100 hover:bg-white hover:shadow-md'
        key={id}
      >
        <div className='chapter-card__content'>
          <h2 className='chapter-card__content-title'>{title}</h2>
        </div>
        <span className='mt-2 self-start text-[14px] font-semibold leading-[17px]'>
          {details}
        </span>

        <div className='mt-4 h-full w-full rounded-3xl bg-white'>
          <div className='p-6'>{code()}</div>
        </div>
      </div>
    </>
  );
};

export default PageCard;
