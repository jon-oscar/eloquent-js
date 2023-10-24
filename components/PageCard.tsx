import React from 'react';

export interface Info {
  id: number;
  title: string;
  details: string;
  code(name: string): void;
}

export interface PageCardProps {
  cardInfo: Info[];
}

const PageCard = ({ cardInfo }: PageCardProps) => {
  return (
    <>
      {cardInfo.map((info, index) => {
        return (
          <div
            key={info.title}
            className=' w-[40rem] flex-1 flex flex-col p-6 justify-center items-start text-black-100 bg-[#FEFCF3] hover:bg-white hover:shadow-md rounded-3xl mb-5'
          >
            <div className='chapter-card__content'>
              <h2 className='chapter-card__content-title'>{info.title}</h2>
            </div>
            <span className='self-start mt-2 text-[14px] leading-[17px] font-semibold'>
              {info.details}
            </span>

            <div className='bg-white mt-4 w-full h-full rounded-3xl'>
              <div className='p-6'>CODE GOES HERE</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PageCard;
