import React from 'react';
import { checkEqual } from './Utils';

export const shoppingLists = [
  {
    lastWeeksList: [
      {
        name: '🥚 Eggs',
        description: '6x Large class A free range eggs',
        price: 2.5,
      },
      {
        name: '🐓 Chicken',
        description:
          '650gr Fresh Class A skinless chicken breast fillet portions.',
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
    ],
  },
  {
    thisWeeksList: [
      {
        name: '🥚 Eggs',
        description: '6x Large class A free range eggs',
        price: 2.5,
      },
      {
        name: '🐓 Chicken',
        description:
          '650gr Fresh Class A skinless chicken breast fillet portions.',
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
    ],
  },
  ,
];

const copyLastWeeksList = [
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

const copyThisWeeksList = [
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

// console.log(deepEqual(obj, { here: 1, object: 2 }));
// console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }));

if (checkEqual(shoppingLists[0], shoppingLists[1]) === true) {
  console.log('The shopping lists are equal');
}

console.log(checkEqual(shoppingLists[0], shoppingLists[1]));

const DeepComparison = () => {
  return (
    <div className='flex flex-row'>
      <div className='mx-[35px] my-auto flex w-[300px] flex-col rounded-md border-solid p-[10px] shadow-lg'>
        <strong>Shopping list of last week</strong>
        {shoppingLists &&
          shoppingLists[0]?.lastWeeksList?.map((item) => (
            <ol key={item.name}>
              <li className='relative mt-[24px] rounded-lg bg-yellow-200 p-2 pl-[16px] font-[16px] leading-[20px] text-black'>
                <strong>{item.name}</strong>
                <p className='mt-2 text-sm'>{item.description}</p>
                <p className='mt-1 text-right'>{item.price} $</p>
              </li>
            </ol>
          ))}
      </div>
      <div className='mx-[35px] my-auto flex w-[300px] flex-col rounded-md border-solid p-[10px] shadow-lg'>
        <strong>Shopping list of last week</strong>
        {shoppingLists &&
          shoppingLists[1]?.thisWeeksList?.map((item) => (
            <ol key={item.name}>
              <li className='relative mt-[24px] rounded-lg bg-blue-200 p-2 pl-[16px] font-[16px] leading-[20px] text-black'>
                <strong>{item.name}</strong>
                <p className='mt-2 text-sm'>{item.description}</p>
                <p className='mt-1 text-right'>{item.price} $</p>
              </li>
            </ol>
          ))}
      </div>

      {checkEqual(copyThisWeeksList, copyLastWeeksList) && (
        <span>
          It is the same list
          {checkEqual(copyThisWeeksList, copyLastWeeksList)}
        </span>
      )}
    </div>
  );
};

export default DeepComparison;
