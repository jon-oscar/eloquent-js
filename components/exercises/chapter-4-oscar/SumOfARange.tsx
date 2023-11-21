import Image from 'next/image';
import React, { useState } from 'react';
import { arraySum, getRangeWithStep } from './Utils';

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
                className='flex h-24 w-24 flex-col items-center justify-center space-y-1 rounded-md text-center'
                key={animals[num - 1].name}
              >
                <Image
                  width={60}
                  height={60}
                  src={animals[num - 1].img}
                  alt={animals[num - 1].name}
                />
                <figcaption>{animals[num - 1].name}</figcaption>
              </figure>
            )
        )}
      </div>

      <div className='flex flex-row'>
        <div className='flex flex-[1.5] flex-col'>
          <div className='flex flex-col'>
            <p className='mb-2 mt-3'>Select an option to display animals</p>
            <div className='flex flex-row items-center justify-between'>
              <div className='relative w-40'>
                <select
                  data-testid='Start'
                  value={range.start}
                  onChange={handleChangeStart}
                  className='block w-full appearance-none rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-400 focus:border-blue-500 focus:outline-none focus:ring'
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num + ' start'} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                  <svg
                    className='h-4 w-4 fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                  >
                    <path d='M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z' />
                  </svg>
                </div>
              </div>
              <p>to</p>
              <div className='relative w-40'>
                <select
                  data-testid='End'
                  value={range.end}
                  onChange={handleChangeEnd}
                  className='block w-full appearance-none rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-400 focus:border-blue-500 focus:outline-none focus:ring'
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num + ' end'} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                  <svg
                    className='h-4 w-4 fill-current'
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
        <div className='ml-2 flex flex-[0.5] flex-col'>
          <p className='mb-2 mt-3'>Sum of animals</p>

          <p className='flex flex-row justify-start py-1'>
            {arraySum(getRangeWithStep(range.start, range.end))}
          </p>
        </div>
      </div>
    </div>
  );
}
