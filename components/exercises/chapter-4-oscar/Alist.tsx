import React from 'react';

import { arrayToList, listToArray, nth, prepend } from './Utils';

// const list = [
//   { city: 'Paris', country: '🇫🇷' },
//   { city: 'London', country: '🇬🇧' },
//   { city: 'Barcelona', country: '🇪🇸' },
//   { city: 'Caracas', country: '🇻🇪' },
// ];

const list = arrayToList(['Paris', 'London', 'Barcelona']);

const Alist = () => {
  return (
    <div className=' p-4 max-w-lg mx-auto'>
      <details className='mb-2'>
        <summary className='bg-red-300 p-4 rounded-lg cursor-pointer shadow-md mb-4'>
          <span className='font-semibold'>Main Dropdown</span>
        </summary>
        <ul className='ml-8 space-y-4'>
          <li>
            <p className='text-gray-800'>{list?.value}</p>
            <details className='mb-2'>
              <summary className='bg-red-600 p-3 rounded-lg cursor-pointer shadow'>
                <span className='font-semibold'>
                  {Object.getOwnPropertyNames(list?.rest)[1]}
                </span>
              </summary>
              <div className='bg-white p-4'>
                <p className='text-gray-800'>{list?.rest?.value}</p>
                <details className='mb-2'>
                  <summary className='bg-orange-600 p-3 rounded-lg cursor-pointer shadow'>
                    <span className='font-semibold'>
                      {Object.getOwnPropertyNames(list?.rest?.rest)[1]}
                    </span>
                  </summary>
                  <div className='bg-white p-4'>
                    <p className='text-gray-800'>{list?.rest?.rest?.value}</p>
                    {/* <details className='mb-2'>
                      <summary className='bg-yellow-600 p-3 rounded-lg cursor-pointer shadow'>
                        <span className='font-semibold'>Nested Dropdown 2</span>
                      </summary>
                      <div className='bg-white p-4'>
                        <p className='text-gray-800'></p>
                      </div>
                    </details> */}
                  </div>
                </details>
              </div>
            </details>
          </li>
        </ul>
      </details>

      {/* <details className='mb-2'>
        <summary className='bg-gray-200 p-4 rounded-lg cursor-pointer shadow-md mb-4'>
          <span className='font-semibold'>Another Dropdown</span>
        </summary>
        <ul className='ml-8 space-y-4'>
          <li>
            <details className='mb-2'>
              <summary className='bg-gray-100 p-3 rounded-lg cursor-pointer shadow'>
                <span className='font-semibold'>Nested Item 1</span>
              </summary>
              <div className='bg-white p-4'>
                <p className='text-gray-800'>Content for Nested Item 1</p>
              </div>
            </details>
          </li>
          <li>
            <details className='mb-2'>
              <summary className='bg-gray-100 p-3 rounded-lg cursor-pointer shadow'>
                <span className='font-semibold'>Nested Item 2</span>
              </summary>
              <div className='bg-white p-4'>
                <p className='text-gray-800'>Content for Nested Item 2</p>
              </div>
            </details>
          </li>
        </ul>
      </details> */}
    </div>
  );
};

export default Alist;
