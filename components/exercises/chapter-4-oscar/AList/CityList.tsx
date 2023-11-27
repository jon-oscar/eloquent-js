import React, { useState, ReactNode } from 'react';
import { arrayToList } from './arrayToList';
import { listToArray } from './listToArray';
import { prepend } from './prepend';
import { getFood } from './getFood';

export type List = {
  value: string | number;
  rest: List | null;
};

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
              {item.rest && `${item.rest.value} and the rest of the cities`}
            </span>
          </summary>
          <div className='bg-white p-4'>
            {item.rest ? <ListItem item={item.rest} /> : null}
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

    // Assuming items is an array of strings, use a type assertion
    if (items) {
      const itemsArray = items && listToArray(items);

      // Check if the randomly selected city is already in the list
      const newCity = randomCity();
      const cityAlreadyExists = itemsArray.includes(newCity);

      if (!cityAlreadyExists) {
        // If it doesn't exist, prepend it to the list
        return setItems((prev) => prepend(newCity, prev));
      }
    }
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
            {listToArray(items).map((item) => {
              if (item === 'Paris') {
                return <div key={item.toString()}>France 🇫🇷</div>;
              } else if (item === 'London') {
                return <div key={item.toString()}>United Kingdom 🇬🇧</div>;
              } else if (item === 'Barcelona') {
                return <div key={item.toString()}>Spain 🇪🇸</div>;
              } else if (item === 'Porto') {
                return <div key={item.toString()}>Portugal 🇵🇹</div>;
              } else if (item === 'Milan') {
                return <div key={item.toString()}>Italy 🇮🇹</div>;
              } else if (item === 'Geneva') {
                return <div key={item.toString()}>Switzerland 🇨🇭</div>;
              } else if (item === 'Budapest') {
                return <div key={item.toString()}>Hungary 🇭🇺</div>;
              } else {
                return <div key={item?.toString()}>No city decided</div>;
              }
            })}
          </div>
          <div className='flex flex-1 flex-col justify-center'>
            <div className='rounded-md bg-blue-300 p-4 '>
              <span className=' font-semibold'>
                The main dish is <p>{getFood(items)}</p>
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
