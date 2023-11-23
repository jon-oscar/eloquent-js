import React, { useState } from 'react';
import { checkEqual } from './Utils';

const lastWeekList = [
  {
    name: '🥚 Eggs',
    description: '6x Large class A free range eggs',
    price: 2.5,
  },
  {
    name: '🐓 Chicken',
    description: '650gr Fresh Class A skinless chicken breast fillet portions.',
    price: 4.7,
  },
  {
    name: '🍚 Basmati rice',
    description:
      '1kg Aromatic & fluffy A long, slender grain grown in the foothills of the Himalayas',
    price: 2.5,
  },
  {
    name: '🥔 Potatoes',
    description: '1kg White potatoes',
    price: 1.5,
  },
];

const currentWeekList = [
  {
    name: '🥚 Eggs',
    description: '6x Large class A free range eggs',
    price: 2.5,
  },
  {
    name: '🐓 Chicken',
    description: '650gr Fresh Class A skinless chicken breast fillet portions.',
    price: 4.7,
  },
  {
    name: '🍚 Basmati rice',
    description:
      '1kg Aromatic & fluffy A long, slender grain grown in the foothills of the Himalayas',
    price: 2.5,
  },
  {
    name: '🥔 Potatoes',
    description: '1kg White potatoes',
    price: 1.5,
  },
];

const newElement = {
  name: '🍅 Tomatoes',
  description: '1kg Fresh tomatoes',
  price: 0.5,
};

const DeepComparison = () => {
  const [groceryList, setGroceryList] = useState([lastWeekList, currentWeekList]);

  function handleClickAdd() {
    setGroceryList((prevGroceryList) => [
      ...prevGroceryList,
      currentWeekList.push(newElement),
    ]);
  }

  function handleClickRemove() {
    setGroceryList((prevGroceryList) => [
      ...prevGroceryList,
      currentWeekList.pop(),
    ]);
  }

  return (
    <div className='flex flex-col'>
      <div className='mt-2 flex flex-row'>
        <div className='mx-[10px] my-auto flex w-[300px] flex-1 flex-col rounded-md border-solid p-[10px] shadow-lg'>
          <strong>Grocery of last week</strong>

          {groceryList &&
            groceryList[0].map((item) => (
              <ol key={item.name}>
                <li className='relative mt-[24px] rounded-lg bg-yellow-200 p-2 pl-[16px] font-[16px] leading-[20px] text-black'>
                  <strong>{item.name}</strong>
                  <p className='mt-2 text-sm'>{item.description}</p>
                  <p className='mt-1 text-right'>{item.price} $</p>
                </li>
              </ol>
            ))}
        </div>
        <div className='mx-[10px] my-auto flex w-[300px] flex-1 flex-col rounded-md border-solid p-[10px] shadow-lg'>
          <div className='flex flex-row justify-between'>
            <strong>Grocery of last week</strong>
            <div>
              <button
                className='rounded-s-full bg-green-300 p-1'
                onClick={handleClickAdd}
              >
                +
              </button>
              <button
                className='rounded-e-full bg-red-300 p-1'
                onClick={handleClickRemove}
              >
                -
              </button>
            </div>
          </div>
          {groceryList &&
            groceryList[1]?.map((item) => (
              <ol key={item.name}>
                <li className='relative mt-[24px] rounded-lg bg-blue-200 p-2 pl-[16px] font-[16px] leading-[20px] text-black'>
                  <strong>{item.name}</strong>
                  <p className='mt-2 text-sm'>{item.description}</p>
                  <p className='mt-1 text-right'>{item.price} $</p>
                </li>
              </ol>
            ))}
        </div>
      </div>
      {checkEqual(lastWeekList, currentWeekList) === true ? (
        <span className='mt-4 cursor-pointer rounded-lg bg-green-300 p-2 shadow-md'>
          It is the same list
          {checkEqual(lastWeekList, currentWeekList)}
        </span>
      ) : (
        <span className='cursor-pointer rounded-lg bg-red-300 p-2 shadow-md '>
          It is not the same list
          {checkEqual(lastWeekList, currentWeekList)}
        </span>
      )}
    </div>
  );
};

export default DeepComparison;
