import React, { useState } from 'react';
import JVec from './JVec';

const CHART_SIZE = 300;

/**
 * Renders a vector component with interactive controls and a chart.
 * @returns JSX.Element
 */
export default function JVector(): JSX.Element {
  const [inputX, setInputX] = useState<number>(0);
  const [inputY, setInputY] = useState<number>(0);
  const [vector, setVector] = useState<JVec>(new JVec(0, 0));

  const handleAdd = () => {
    const newVector = vector.plus(new JVec(inputX, inputY));
    if (isWithinBounds(newVector)) {
      setVector(newVector);
    }
  };

  const handleSubtract = () => {
    const newVector = vector.minus(new JVec(inputX, inputY));
    if (isWithinBounds(newVector)) {
      setVector(newVector);
    }
  };

  const isWithinBounds = (newVector: JVec): boolean => {
    const maxX = CHART_SIZE / 2;
    const maxY = CHART_SIZE / 2;
    return (
      newVector.x >= -maxX &&
      newVector.x <= maxX &&
      newVector.y >= -maxY &&
      newVector.y <= maxY
    );
  };

  const btnClassName =
    'rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed';

  const inputClassName =
    'w-20 appearance-none rounded border p-2 text-gray-700 shadow focus:outline-none';

  return (
    <div className='flex flex-col items-center gap-4'>
      {/* Form */}
      <div className='flex items-center gap-4'>
        <label className='font-bold text-gray-700' htmlFor='x-input'>
          x
        </label>
        <input
          className={inputClassName}
          id='x-input'
          onChange={(e) => setInputX(Number(e.target.value))}
          type='number'
          value={inputX}
        />
        <label className='font-bold text-gray-700' htmlFor='y-input'>
          y
        </label>
        <input
          className={inputClassName}
          id='y-input'
          onChange={(e) => setInputY(Number(e.target.value))}
          type='number'
          value={inputY}
        />
      </div>
      <div className='flex items-center justify-between gap-2'>
        <button
          className={btnClassName}
          disabled={!isWithinBounds(vector.plus(new JVec(inputX, inputY)))}
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          className={btnClassName}
          disabled={!isWithinBounds(vector.minus(new JVec(inputX, inputY)))}
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>

      {/* Chart */}
      <div
        className='relative mt-8'
        style={{ height: CHART_SIZE, width: CHART_SIZE }}
      >
        {/* x axis */}
        <div className='absolute left-1/2 top-1/2 h-[1px] w-full -translate-x-1/2 -translate-y-1/2 bg-black' />
        {/* x legend */}
        <div className='absolute left-0 top-1/2 -translate-x-full -translate-y-1/2'>
          x ({CHART_SIZE / 2}px)
        </div>
        {/* y axis */}
        <div className='absolute left-1/2 top-1/2 h-full w-[1px] -translate-x-1/2 -translate-y-1/2 bg-black' />
        {/* y legend */}
        <div className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full'>
          y ({CHART_SIZE / 2}px)
        </div>
        {/* vector dot */}
        <div
          className='absolute h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black'
          style={{
            left: `${vector.x + CHART_SIZE / 2}px`,
            top: `${-vector.y + CHART_SIZE / 2}px`,
          }}
        />
      </div>
      <div className='mt-4'>
        <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
          <tbody>
            <tr className='border-b bg-white dark:border-gray-700 dark:bg-gray-800'>
              <th
                className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
                scope='row'
              >
                Vector position
              </th>
              <td className='px-6 py-4'>
                ({vector.x}, {vector.y})
              </td>
            </tr>
            <tr className='border-b bg-white dark:border-gray-700 dark:bg-gray-800'>
              <th
                className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
                scope='row'
              >
                Distance to center (length)
              </th>
              <td className='px-6 py-4'>{Math.round(vector.length)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
