import Image from 'next/image';
import React, { useState } from 'react';
import {
  Basket,
  jListObjectsInBasket,
  jListObjectsInBasketOverrideSafe,
} from './jListBasket';

const BASKET_ITEMS = [
  {
    icon: '🧀',
    value: 'cheese',
  },
  {
    icon: '🍷',
    value: 'wine',
  },
  {
    icon: '🤖',
    value: 'hasOwnProperty',
  },
];

const topAndLeftStylesByIndex = [
  { left: '40%', top: '40%' },
  { left: '20%', top: '20%' },
  { left: '60%', top: '10%' },
];

/**
 * JBasket component.
 */
export default function JBasket(): JSX.Element {
  const [basketItems, setBasketItems] = useState<Basket>({});
  const [showOverrideProtection, setShowOverrideProtection] = useState(false);

  const isItemInBasket = (item: string): boolean =>
    Object.prototype.hasOwnProperty.call(basketItems, item);

  const toggleItemInBasket = (item: string): void => {
    const newBasketItems = { ...basketItems };
    if (isItemInBasket(item)) {
      delete newBasketItems[item];
    } else {
      newBasketItems[item] = true;
    }
    setBasketItems(newBasketItems);
  };

  const toggleOverrideProtection = (): void => {
    setShowOverrideProtection((prevValue) => !prevValue);
  };

  // class="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"

  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex gap-2'>
        {BASKET_ITEMS.map(({ icon, value }) => (
          <button
            className={`rounded bg-blue-500 px-4 py-2 hover:bg-blue-700 ${
              isItemInBasket(value) ? 'bg-blue-700' : ''
            }`}
            key={icon}
            onClick={() => toggleItemInBasket(value)}
          >
            {icon}
          </button>
        ))}
      </div>
      <div className='relative'>
        <Image alt='Basket' height={500} src='/basket.png' width={500} />
        {BASKET_ITEMS.map(
          ({ icon, value }, i) =>
            isItemInBasket(value) && (
              <div
                className='absolute'
                key={icon}
                style={topAndLeftStylesByIndex[i]}
              >
                <span
                  className={`text-3xl ${
                    isItemInBasket(value) ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {icon}
                </span>
              </div>
            )
        )}
      </div>
      <div className='flex flex-col gap-2'>
        <label>
          <input
            checked={!showOverrideProtection}
            name='basketCheck'
            onChange={toggleOverrideProtection}
            type='radio'
          />
          List basket
        </label>
        <label>
          <input
            checked={showOverrideProtection}
            name='basketCheck'
            onChange={toggleOverrideProtection}
            type='radio'
          />
          List basket with override protection
        </label>
      </div>
      <div>
        <p>
          {showOverrideProtection
            ? jListObjectsInBasketOverrideSafe(basketItems)
            : jListObjectsInBasket(basketItems)}
        </p>
      </div>
    </div>
  );
}
