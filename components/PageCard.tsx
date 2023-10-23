import React from 'react';

const PageCard = () => {
  return (
    <div className='flex-1 flex flex-col p-6 justify-center items-start text-black-100 bg-[#FEFCF3] hover:bg-white hover:shadow-md rounded-3xl'>
      <div className='chapter-card__content'>
        <h2 className='chapter-card__content-title'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
      </div>

      <span className='self-start mt-2 text-[14px] leading-[17px] font-semibold'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit quo
        ipsum molestiae dignissimos explicabo asperiores delectus veritatis a,
        pariatur magni perferendis tempore, minima atque! Ea perspiciatis
        debitis veniam inventor
      </span>
      <div>CODE GOES HERE</div>
    </div>
  );
};

export default PageCard;
