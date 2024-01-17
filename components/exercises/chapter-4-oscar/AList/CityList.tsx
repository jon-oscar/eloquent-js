import React, { useState } from 'react';
import { arrayToList } from './arrayToList';
import { listToArray } from './listToArray';
import { cityGenerator, cities } from './cityGenerator';
import { prepend } from './prepend';
import { getFood } from './getFood';

export type List = {
  value: string | number;
  rest: List | null;
};

export const initialItems = arrayToList(['Paris']);

/**
 * Represents a recursive list.
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
            {item.rest && <ListItem item={item.rest} />}
          </div>
        </details>
      )}
    </li>
  );
}

export const cityGen = cityGenerator();

/**
 * It displays a list of cities and their corresponding main food.
 * It allows adding new cities to the list.
 */
export default function CityList() {
  const [items, setItems] = useState(initialItems);

  /**
   * It adds a new city.
   */
  function handleClick(): void {
    if (items) {
      const itemsArray = listToArray(items);

      // Check if the current city is already in the list
      const currentCity = cityGen(); // Get the next city in the sequence
      const cityAlreadyExists = itemsArray.includes(currentCity);

      // If the city is not in the list, add it
      if (!cityAlreadyExists) {
        setItems((prev) => prepend(currentCity, prev));
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
        <div className='flex gap-2'>
          <div className='flex h-[200px] flex-1 flex-col'>
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
            {listToArray(items).length === cities.length ? (
              <span className='mt-2 rounded-md bg-red-300 p-2 text-sm text-white'>
                No more cities to add
              </span>
            ) : (
              <span className='mt-2 rounded-md bg-green-300 p-2 text-sm text-black'>
                There are more cities to add!
              </span>
            )}
          </div>
          <div className='flex flex-1 items-start justify-center'>
            <div className='rounded-md bg-blue-300 p-5'>
              <span className='font-semibold'>
                The main dish is {getFood(items)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-sm flex-[0.2] p-4'>
        <button
          className='mb-4 cursor-pointer rounded-lg bg-green-300 p-4 shadow-md'
          data-testid='add-button'
          onClick={handleClick}
        >
          +
        </button>
      </div>
    </div>
  );
}
