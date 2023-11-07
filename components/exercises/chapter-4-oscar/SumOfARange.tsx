import Image from 'next/image';
import React, { useState } from 'react';

/**
 * Calculates the sum of a range of numbers based on a given start, end, and step.
 * @param start - The starting number of the range.
 * @param end - The ending number of the range.
 * @param step - The step to increment or decrement the range by.
 * @returns An array of numbers representing the range.
 */
const calcRangeSumMod = (start: number, end: number, step: number) => {
  const range = [];

  if (step === 1) {
    // if step is 1, then we can just use the original function
    for (let i = start; i <= end; i += step) {
      range.push(i);
    }
  } else if (step < 1) {
    // if step is less than 1, then we need to decrement the range
    for (let i = start; i >= end; i += step) {
      range.push(i);
    }
  } else {
    return;
  }
  return range;
};

/**
 * Calculates the sum of all numbers in an array.
 * @param arr - The array of numbers to sum.
 * @returns The sum of all numbers in the array.
 */
const arraySum = (arr: number[]) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  return sum;
};

/**
 * Calculates the sum of a range of numbers.
 * @param start - The starting number of the range.
 * @param end - The ending number of the range.
 * @returns An array containing all the numbers in the range.
 */
const calcRangeSum = (start: number, end: number) => {
  const range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
};

const animals = [
  { id: 1, name: 'Bear', img: '/bear.png' },
  { id: 2, name: 'Boar', img: '/boar.png' },
  { id: 3, name: 'Buffalo', img: '/buffalo.png' },
  { id: 4, name: 'Monkey', img: '/monkey.png' },
  { id: 5, name: 'Elephant', img: '/elephant.png' },
  { id: 6, name: 'Hippo', img: '/hippo.png' },
  { id: 7, name: 'Lion', img: '/lion.png' },
  { id: 8, name: 'Lynx', img: '/lynx.png' },
  { id: 9, name: 'Ostrich', img: '/ostrich.png' },
  { id: 10, name: 'Wolf', img: '/wolf.png' },
];

const initialAnimals = {
  start: 1,
  end: 10,
  step: 1,
};

const SumOfARange = () => {
  const [showAnimals, setShowAnimals] = useState(initialAnimals);

  function handleChangeStart(event: React.ChangeEvent<HTMLSelectElement>) {
    setShowAnimals((prevState) => {
      const showAnimals = { ...prevState, start: parseInt(event.target.value) };
      if (showAnimals.start <= showAnimals.end) {
        showAnimals.step = 1;
      }

      return showAnimals;
    });
  }

  function handleChangeEnd(event: React.ChangeEvent<HTMLSelectElement>) {
    setShowAnimals((prevState) => {
      const showAnimals = {
        ...prevState,
        end: parseInt(event.target.value),
      };
      if (showAnimals.start > showAnimals.end) {
        showAnimals.step = -1;
      }
      return showAnimals;
    });
  }

  return (
    <div>
      <div className='animals container grid grid-cols-5 grid-rows-2 gap-3'>
        {calcRangeSumMod(
          showAnimals.start,
          showAnimals.end,
          showAnimals.step
        )?.map((num) => {
          if (num === animals[num - 1].id) {
            return (
              <div
                className='w-24 h-24 flex flex-col text-center justify-center items-center rounded-md space-y-1'
                key={animals[num - 1].id}
              >
                <Image
                  width={60}
                  height={60}
                  src={animals[num - 1].img}
                  alt={animals[num - 1].name}
                />
                <div>{animals[num - 1].name}</div>
              </div>
            );
          }
          return null;
        })}
      </div>

      <p className='mt-3'>Select an option</p>
      <div className='flex flex-row  justify-between items-center '>
        <div className='flex flex-row gap-6'>
          <div className='w-32 relative'>
            <select
              value={showAnimals.start}
              onChange={handleChangeStart}
              className='block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring focus:border-blue-500'
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg
                className='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z' />
              </svg>
            </div>
          </div>
          <p>to</p>
          <div className='w-32 relative'>
            <select
              value={showAnimals.end}
              onChange={handleChangeEnd}
              className='block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring focus:border-blue-500'
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg
                className='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z' />
              </svg>
            </div>
          </div>
        </div>

        <p>{arraySum(calcRangeSum(showAnimals.start, showAnimals.end))}</p>

        {/* <CustomButton
          title='Show animals'
          btnType='button'
          containerStyles='text-white rounded-full bg-[#B2980B] min-w-[150px] max-h-[48px]'
          handleClick={() =>
            setShowAnimals((prevState) => console.log('hey there'))
          }
        /> */}
      </div>
    </div>
  );
};

export default SumOfARange;
