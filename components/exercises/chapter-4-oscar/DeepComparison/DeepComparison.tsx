import React, { useState } from 'react';
import { isDeepEqual } from './isDeepEqual';

/**
 * Represents the properties of a week item.
 */
export type ShopItem = {
  name: string;
  description: string;
  price: number;
};

/**
 * This represents an array of arrays of WeekItem objects, essentially creating a two-dimensional array of WeekItem objects. Each element of the outer array is an array of WeekItem objects.
 */
type GroceryList = ShopItem[][];

const newElement: ShopItem = {
  name: '🍅 Tomatoes',
  description: '1kg Fresh tomatoes',
  price: 0.5,
};

export const lastWeekShoppingList: ShopItem[] = [
  {
    name: '🥚 Eggs',
    description: '6x Large class A free range eggs',
    price: 2.5,
  },
  {
    name: '🐓 Chicken',
    description: '650gr Fresh Class A skinless chicken breast fillet portions.',
    price: 4.7,
  },
  {
    name: '🍚 Basmati rice',
    description:
      '1kg Aromatic & fluffy A long, slender grain grown in the foothills of the Himalayas',
    price: 2.5,
  },
  {
    name: '🥔 Potatoes',
    description: '1kg White potatoes',
    price: 1.5,
  },
];

export const currentWeekShoppingList: ShopItem[] = [
  {
    name: '🥚 Eggs',
    description: '6x Large class A free range eggs',
    price: 2.5,
  },
  {
    name: '🐓 Chicken',
    description: '650gr Fresh Class A skinless chicken breast fillet portions.',
    price: 4.7,
  },
  {
    name: '🍚 Basmati rice',
    description:
      '1kg Aromatic & fluffy A long, slender grain grown in the foothills of the Himalayas',
    price: 2.5,
  },
  {
    name: '🥔 Potatoes',
    description: '1kg White potatoes',
    price: 1.5,
  },
];

/**
 * Renders a component that compares two grocery lists and allows adding/removing items and checks for deep equality of both grocery lists.
 */
export default function DeepComparison(): JSX.Element {
  const [groceryList, setGroceryList] = useState<GroceryList>([
    lastWeekShoppingList,
    currentWeekShoppingList,
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
              <ul key={item.name}>
                <li className='relative mt-[24px] rounded-lg bg-yellow-200 p-2 pl-[16px] font-[16px] leading-[20px] text-black'>
                  <strong>{item.name}</strong>
                  <p className='mt-2 text-sm'>{item.description}</p>
                  <p className='mt-1 text-right'>{item.price} $</p>
                </li>
              </ul>
            ))}
        </div>

        <div className='mx-[10px] my-auto flex w-[300px] flex-1 flex-col rounded-md border-solid p-[10px] shadow-lg'>
          <div className='flex flex-row justify-between'>
            <strong>Grocery of this week</strong>
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
              <ul key={item.name}>
                <li className='relative mt-[24px] rounded-lg bg-blue-200 p-2 pl-[16px] font-[16px] leading-[20px] text-black'>
                  <strong>{item.name}</strong>
                  <p className='mt-2 text-sm'>{item.description}</p>
                  <p className='mt-1 text-right'>{item.price} $</p>
                </li>
              </ul>
            ))}
        </div>
      </div>

      {isDeepEqual(groceryList[0], groceryList[1]) === true ? (
        <span className='mt-4 rounded-lg bg-green-300 p-2 shadow-md'>
          It is the same list
        </span>
      ) : (
        <span className='mt-4 rounded-lg bg-red-300 p-2 shadow-md '>
          It is not the same list
        </span>
      )}
    </div>
  );
}