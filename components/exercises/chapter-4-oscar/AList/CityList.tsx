import React, { useState } from 'react';
import { arrayToList } from './arrayToList';
import { listToArray } from './listToArray';
import { cityGenerator } from './cityGenerator';
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
            {item.rest ? <ListItem item={item.rest} /> : null}
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
        <div className='flex'>
          <div className='flex h-[200px] flex-1 flex-col'>
            {listToArray(items).map((item) => {
              if (item === 'Paris') {
                return (
                  <div data-testid='France' key={item.toString()}>
                    France 🇫🇷
                  </div>
                );
              } else if (item === 'London') {
                return (
                  <div data-testid='United-Kingdom' key={item.toString()}>
                    United Kingdom 🇬🇧
                  </div>
                );
              } else if (item === 'Barcelona') {
                return (
                  <div data-testid='Spain' key={item.toString()}>
                    Spain 🇪🇸
                  </div>
                );
              } else if (item === 'Porto') {
                return (
                  <div data-testid='Portugal' key={item.toString()}>
                    Portugal 🇵🇹
                  </div>
                );
              } else if (item === 'Milan') {
                return (
                  <div data-testid='Italy' key={item.toString()}>
                    Italy 🇮🇹
                  </div>
                );
              } else if (item === 'Geneva') {
                return (
                  <div data-testid='Switzerland' key={item.toString()}>
                    Switzerland 🇨🇭
                  </div>
                );
              } else if (item === 'Budapest') {
                return (
                  <div data-testid='Hungary' key={item.toString()}>
                    Hungary 🇭🇺
                  </div>
                );
              } else {
                return (
                  <div data-testid='None' key={item?.toString()}>
                    No city decided
                  </div>
                );
              }
            })}
            {listToArray(items).length === 7 ? (
              <span
                data-testid='no-more-cities-message'
                className=' bg-red-300 p-2 text-white text-sm mt-2 rounded-md'
              >
                No more cities to add
              </span>
            ) : (
              <span
                data-testid='more-clicks-message'
                className=' bg-green-300 p-2 text-black text-sm mt-2 rounded-md'
              >
                There are more cities to add!
              </span>
            )}
          </div>
          <div className='flex flex-1 justify-center items-start'>
            <div className='rounded-md bg-blue-300 p-5'>
              <span className='font-semibold' data-testid='main-dish'>
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
          data-testid='add-button'
        >
          +
        </button>
      </div>
    </div>
  );
}
