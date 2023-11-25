import React, { useState } from 'react';
import { arrayToList, prepend, listToArray, getFood, List } from './Utils';

export const initialItems = arrayToList(['Paris', 'London', 'Barcelona']);

/**
 * Represents a list item.
 * @param item - The item to be rendered.
 * @returns The rendered list item.
 */

export function ListItem({ item }: { item: List }): JSX.Element {
  return (
    <li>
      <p className='text-gray-800'>{item.value}</p>
      {item.rest === null ? (
        <div className='mb-2'>
          <div className='cursor-pointer rounded-lg bg-red-600 p-3 shadow'>
            <p className='font-semibold'>No more cities to visit</p>
          </div>
        </div>
      ) : (
        <details className='mb-2'>
          <summary className='cursor-pointer rounded-lg bg-yellow-600 p-3 shadow'>
            <span className='font-semibold'>
              {item.rest && Object.getOwnPropertyNames(item?.rest)[1]}
            </span>
          </summary>
          <div className='bg-white p-4'>
            <ListItem item={item.rest} />
          </div>
        </details>
      )}
    </li>
  );
}

/**
 * CityList component displays a list of cities and their corresponding countries.
 * It allows adding new cities to the list randomly.
 */
export default function CityList() {
  const [items, setItems] = useState(initialItems);

  function handleClick(): void {
    /**
     * Generates a random city from a predefined list of cities.
     * @returns {string} The randomly selected city.
     */
    function randomCity(): string {
      const cities = ['Porto', 'Milan', 'Geneva', 'Budapest'];
      const randomIndex = Math.floor(Math.random() * cities.length);
      return cities[randomIndex];
    }

    return setItems((prev) => prepend(randomCity(), prev));
  }

  return (
    <div className='flex'>
      <div className='max-w-lg flex-[1.8] p-4'>
        <details className='mb-2'>
          <summary className='mb-4 cursor-pointer rounded-lg bg-yellow-300 p-4 shadow-md'>
            <span className='font-semibold'>Cities I would like to visit</span>
          </summary>
          <ul className='ml-8 max-h-[366px] space-y-4 overflow-hidden'>
            {items && <ListItem item={items} />}
          </ul>
        </details>
        <p className=' mb-2 font-semibold'>
          Countries of the listed cities above
        </p>
        <div className='flex'>
          <div className='flex h-[100px] flex-1 flex-col overflow-hidden'>
            {listToArray(items).map((item, index) => {
              if (item === 'Paris') {
                return <div key={index}>France 🇫🇷</div>;
              } else if (item === 'London') {
                return <div key={index}>United Kingdom 🇬🇧</div>;
              } else if (item === 'Barcelona') {
                return <div key={index}>Spain 🇪🇸</div>;
              } else if (item === 'Porto') {
                return <div key={index}>Portugal 🇵🇹</div>;
              } else if (item === 'Milan') {
                return <div key={index}>Italy 🇮🇹</div>;
              } else if (item === 'Geneva') {
                return <div key={index}>Switzerland 🇨🇭</div>;
              } else {
                return <div key={index}>{'Hungary 🇭🇺'}</div>;
              }
            })}
          </div>
          <div className='flex flex-1 flex-col justify-center'>
            <div className='rounded-md bg-blue-300 p-4 '>
              <span className=' font-semibold'>
                The main dish is {getFood(items)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-sm flex-[0.2] p-4'>
        <button
          className='mb-4 cursor-pointer rounded-lg bg-green-300 p-4 shadow-md'
          onClick={handleClick}
        >
          +
        </button>
      </div>
    </div>
  );
}
