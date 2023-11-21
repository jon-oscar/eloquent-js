import React, { ReactNode, useState } from 'react';
import { arrayToList, prepend, listToArray } from './Utils';

type ListItem = {
  value: ReactNode;
  rest: ListItem | null;
};

const ListItem = ({ item }: { item: ListItem }) => {
  return (
    <li>
      <p className='text-gray-800'>{item.value}</p>
      {item.rest && (
        <details className='mb-2'>
          <summary className='bg-red-600 p-3 rounded-lg cursor-pointer shadow'>
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
};

const initialItems = arrayToList(['Paris', 'London', 'Barcelona']);

const Alist = () => {
  const [items, setItems] = useState(initialItems);

  return (
    <div className='flex'>
      <div className='p-4 max-w-lg flex-[1.8]'>
        <details className='mb-2'>
          <summary className='bg-red-300 p-4 rounded-lg cursor-pointer shadow-md mb-4'>
            <span className='font-semibold'>Cities I would like to visit</span>
          </summary>
          <ul className='ml-8 space-y-4'>
            {items && <ListItem item={items} />}
          </ul>
        </details>
        <p>Countries of the listed cities:</p>
        {listToArray(items).map((item, index) => (
          <p key={item}>{item}</p>
        ))}
      </div>
      <div className='p-4 max-w-sm flex-[0.2]'>
        <button
          className='bg-green-300 p-4 rounded-lg cursor-pointer shadow-md mb-4'
          onClick={() => {
            function randomCity() {
              const cities = [
                'Porto',
                'Valencia',
                'Milan',
                'Geneva',
                'Stockholm',
              ];
              const randomIndex = Math.floor(Math.random() * cities.length);
              return cities[randomIndex];
            }

            return setItems(prepend(randomCity(), items));
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Alist;
