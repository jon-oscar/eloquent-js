import React, { useState } from 'react';
import { checkEqual, lastWeekList, currentWeekList, WeekItem } from './Utils';

/**
 * This represents an array of arrays of WeekItem objects, essentially creating a two-dimensional array of WeekItem objects. Each element of the outer array is an array of WeekItem objects.
 */
type GroceryList = WeekItem[][];

const newElement: WeekItem = {
  name: '🍅 Tomatoes',
  description: '1kg Fresh tomatoes',
  price: 0.5,
};

/**
 * Renders a component that compares two grocery lists and allows adding/removing items.
 */
export default function DeepComparison(): JSX.Element {
  const [groceryList, setGroceryList] = useState<GroceryList>([
    lastWeekList,
    currentWeekList,
  ]);

  /**
   * Handles the click event for adding a new element to the grocery list.
   */
  function handleClickAdd(): void {
    setGroceryList((prevGroceryList) => {
      const updatedGroceryList: GroceryList = [...prevGroceryList];
      updatedGroceryList[1] = [...updatedGroceryList[1], newElement];
      return updatedGroceryList;
    });
  }

  /**
   * Handles the click event for removing the last element of the grocery list.
   */
  function handleClickRemove(): void {
    setGroceryList((prevGroceryList) => {
      const updatedGroceryList: GroceryList = [...prevGroceryList];
      updatedGroceryList[1] = updatedGroceryList[1].slice(0, -1);
      return updatedGroceryList;
    });
  }

  return (
    <div className='flex flex-col'>
      <div className='mt-2 flex flex-row'>
        <div className='mx-[10px] my-auto flex w-[300px] flex-1 flex-col rounded-md border-solid p-[10px] shadow-lg'>
          <strong>Grocery of last week</strong>

          {groceryList &&
            groceryList[0].map((item) => (
              <ol key={item.name}>
                <li className='relative mt-[24px] rounded-lg bg-yellow-200 p-2 pl-[16px] font-[16px] leading-[20px] text-black'>
                  <strong>{item.name}</strong>
                  <p className='mt-2 text-sm'>{item.description}</p>
                  <p className='mt-1 text-right'>{item.price} $</p>
                </li>
              </ol>
            ))}
        </div>

        <div className='mx-[10px] my-auto flex w-[300px] flex-1 flex-col rounded-md border-solid p-[10px] shadow-lg'>
          <div className='flex flex-row justify-between'>
            <strong>Grocery of last week</strong>
            <div>
              <button
                className='rounded-s-full bg-green-300 p-1'
                onClick={handleClickAdd}
              >
                +
              </button>
              <button
                className='rounded-e-full bg-red-300 p-1'
                onClick={handleClickRemove}
              >
                -
              </button>
            </div>
          </div>

          {groceryList &&
            groceryList[1]?.map((item) => (
              <ol key={item.name}>
                <li className='relative mt-[24px] rounded-lg bg-blue-200 p-2 pl-[16px] font-[16px] leading-[20px] text-black'>
                  <strong>{item.name}</strong>
                  <p className='mt-2 text-sm'>{item.description}</p>
                  <p className='mt-1 text-right'>{item.price} $</p>
                </li>
              </ol>
            ))}
        </div>
      </div>

      {checkEqual(groceryList[0], groceryList[1]) === true ? (
        <span className='mt-4 cursor-pointer rounded-lg bg-green-300 p-2 shadow-md'>
          It is the same list
          {checkEqual(lastWeekList, currentWeekList)}
        </span>
      ) : (
        <span className='cursor-pointer rounded-lg bg-red-300 p-2 shadow-md '>
          It is not the same list
          {checkEqual(groceryList[1], groceryList[2])}
        </span>
      )}
    </div>
  );
}
