import React, { useState } from 'react';
import { arrayToList, prepend, listToArray, getFood, ListItem } from './Utils';

export const initialItems = arrayToList(['Paris', 'London', 'Barcelona']);

/**
 * Alist component displays a list of cities and their corresponding countries.
 * It allows adding new cities to the list randomly.
 */
export default function Alist() {
  const [items, setItems] = useState(initialItems);

  return (
    <div className='flex'>
      <div className='p-4 max-w-lg flex-[1.8]'>
        <details className='mb-2'>
          <summary className='bg-yellow-300 p-4 rounded-lg cursor-pointer shadow-md mb-4'>
            <span className='font-semibold'>Cities I would like to visit</span>
          </summary>
          <ul className='ml-8 space-y-4 max-h-[366px] overflow-hidden'>
            {items && <ListItem item={items} />}
          </ul>
        </details>
        <p className=' font-semibold mb-2'>
          Countries of the listed cities above
        </p>
        <div className='flex'>
          <div className='flex flex-col flex-1 h-[100px] overflow-hidden'>
            {listToArray(items).map((item, index) => {
              if (item === 'Paris') {
                return <div key={index}>{'France 🇫🇷'}</div>;
              } else if (item === 'London') {
                return <div key={index}>{'United Kingdom 🇬🇧'}</div>;
              } else if (item === 'Barcelona') {
                return <div key={index}>{'Spain 🇪🇸'}</div>;
              } else if (item === 'Porto') {
                return <div key={index}>{'Portugal 🇵🇹'}</div>;
              } else if (item === 'Milan') {
                return <div key={index}>{'Italy 🇮🇹'}</div>;
              } else if (item === 'Geneva') {
                return <div key={index}>{'Switzerland 🇨🇭'}</div>;
              } else {
                return <div key={index}>{'Hungary 🇭🇺'}</div>;
              }
            })}
          </div>
          <div className='flex flex-col flex-1 justify-center'>
            <div className='bg-blue-300 p-4 rounded-md '>
              <span className=' font-semibold'>
                The main dish is {getFood(items)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='p-4 max-w-sm flex-[0.2]'>
        <button
          className='bg-green-300 p-4 rounded-lg cursor-pointer shadow-md mb-4'
          onClick={() => {
            /**
             * Generates a random city from a predefined list of cities.
             * @returns {string} The randomly selected city.
             */
            function randomCity() {
              const cities = ['Porto', 'Milan', 'Geneva', 'Budapest'];
              const randomIndex = Math.floor(Math.random() * cities.length);
              return cities[randomIndex];
            }

            return setItems((prev) => prepend(randomCity(), prev));
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
