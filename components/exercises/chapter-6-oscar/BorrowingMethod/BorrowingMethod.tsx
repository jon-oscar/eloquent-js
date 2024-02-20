import { useState } from 'react';

const foodList = {
  hotdog: true,
  chips: true,
  hamburger: true,
  hasOwnProperty: true,
};

/**
 * Checks if an object has a specific key.
 * @param list - The object to check.
 * @param key - The key to check for.
 * @returns A boolean indicating whether the object has the specified key.
 */
export function checkIfExist(list: object, key: string) {
  return Object.prototype.hasOwnProperty.call(list, key);
}

const keysArray: string[] = [];

Object.keys(foodList).forEach((key) => {
  keysArray.push(key);
});

/**
 * Renders a component that evaluates if input exist in the list display below.
 * If it exist it will display a message
 * @returns JSX.Element
 */
export default function BorrowingMethod(): JSX.Element {
  const [input, setInput] = useState('');

  return (
    <div className='container'>
      <div className='mb-2 flex flex-row gap-x-2'>
        <input
          aria-label='Phrase'
          className='h-[50px] w-full rounded bg-[#FEFCF3] px-4 py-2 text-center'
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder='Type a food'
          type='text'
          value={input}
        />
      </div>
      {checkIfExist(foodList, input) && (
        <p className='my-2 text-red-500'>The food is already in the list</p>
      )}
      <ul key={'name'}>
        <li className='mt-4 rounded-lg bg-yellow-200 p-2 pl-4 font-[16px] text-black'>
          {keysArray.map((value) => (
            <h3 className='font-semibold' key={value}>
              {value}
            </h3>
          ))}
        </li>
      </ul>
    </div>
  );
}
