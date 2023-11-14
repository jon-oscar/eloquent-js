import Image from 'next/image';
import React, { useState } from 'react';
import { getRangeWithStep } from './getRangeWithStep';
import { arraySum } from './arraySum';

/**
 * Array of animal objects with id, name, and img properties.
 */
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

/**
 * Represents the initial range for the sum of a range exercise.
 * @type {Object}
 * @property {number} start - The starting number of the range.
 * @property {number} end - The ending number of the range.
 * @property {number} step - The step between each number in the range.
 */
const initialRange = {
  start: 1,
  end: 10,
  step: 1,
};

export default function SumOfARange(): React.JSX.Element {
  const [range, setRange] = useState(initialRange);
  /**
   * Handles the change event of the start select element and updates the range state accordingly.
   * @param event - The change event of the start select element.
   */

  function handleChangeStart(event: React.ChangeEvent<HTMLSelectElement>) {
    setRange((prevState) => {
      const range = { ...prevState, start: parseInt(event.target.value) };
      if (range.start <= range.end) {
        range.step = 1;
      }

      return range;
    });
  }

  /**
   * Handles the change event of the end select element and updates the range state accordingly.
   * @param event - The change event of the end select element.
   */
  function handleChangeEnd(event: React.ChangeEvent<HTMLSelectElement>) {
    setRange((prevState) => {
      const range = {
        ...prevState,
        end: parseInt(event.target.value),
      };
      if (range.start > range.end) {
        range.step = -1;
      }
      return range;
    });
  }

  return (
    <div>
      <div className='container grid grid-cols-5 grid-rows-2 gap-3'>
        {getRangeWithStep(range.start, range.end, range.step)?.map(
          (num) =>
            num === animals[num - 1].id && (
              <figure
                className='w-24 h-24 flex flex-col text-center justify-center items-center rounded-md space-y-1'
                key={animals[num - 1].name}
              >
                <Image
                  width={60}
                  height={60}
                  src={animals[num - 1].img}
                  alt={animals[num - 1].name}
                />
                <div>{animals[num - 1].name}</div>
              </figure>
            )
        )}
      </div>

      <div className='flex flex-row'>
        <div className='flex flex-col flex-[1.5]'>
          <div className='flex flex-col'>
            <p className='mt-3 mb-2'>Select an option to display animals</p>
            <div className='flex flex-row justify-between items-center'>
              <div className='w-40 relative'>
                <select
                  data-testid='Start'
                  value={range.start}
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
              <div className='w-40 relative'>
                <select
                  data-testid='End'
                  value={range.end}
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
          </div>
        </div>
        <div className='flex flex-col flex-[0.5] ml-2'>
          <p className='mt-3 mb-2'>Sum of animals</p>

          <p className='flex flex-row justify-start py-1'>
            {arraySum(getRangeWithStep(range.start, range.end))}
          </p>
        </div>
      </div>
    </div>
  );
}
