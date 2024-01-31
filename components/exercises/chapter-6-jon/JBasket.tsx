import Image from 'next/image';
import React, { useState } from 'react';
import {
  Basket,
  PicnicBasketWithOverride,
  jListObjectsInBasket,
  jListObjectsInBasketOverrideSafe,
} from './jListBasket';

const BASKET_ITEMS: {
  icon: string;
  value: keyof PicnicBasketWithOverride;
}[] = [
  {
    icon: '🍷',
    value: 'wine',
  },
  {
    icon: '🧀',
    value: 'cheese',
  },
  {
    icon: '🤖',
    value: 'hasOwnProperty',
  },
];

/**
 * Renders a basket image with items that can be added or removed from the basket on button press. One of the items is
 * "hasOwnProperty" which is a reserved property name in JavaScript.
 * The contents of the basket are displayed below the basket. To demonstrate errors that can occur when overriding a reserved property name,
 * the contents can be displayed with or without override protection.
 */
export default function JBasket(): JSX.Element {
  const [basketItems, setBasketItems] = useState<Basket>({
    wine: true,
    cheese: true,
    hasOwnProperty: undefined,
  });
  const [showOverrideProtection, setShowOverrideProtection] = useState(false);

  const isItemInBasket = (item: string): boolean =>
    Object.prototype.hasOwnProperty.call(basketItems, item);

  const toggleItemInBasket = (item: keyof PicnicBasketWithOverride): void => {
    const newBasketItems = { ...basketItems };
    if (isItemInBasket(item)) {
      delete newBasketItems[item];
    } else {
      // Trick for TS to accept the overriding of property "hasOwnProperty"
      newBasketItems[item] = true as boolean &
        (
          | ((v: PropertyKey) => boolean)
          | (((v: PropertyKey) => boolean) & boolean)
        );
    }
    setBasketItems(newBasketItems);
  };

  const toggleOverrideProtection = (): void => {
    setShowOverrideProtection((prevValue) => !prevValue);
  };

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
                style={
                  [
                    { left: '10%', top: '25%' },
                    { left: '35%', top: '28%' },
                    { left: '60%', top: '24%' },
                  ][i]
                }
              >
                <span data-testid='basket-icon' style={{ fontSize: '80px' }}>
                  {icon}
                </span>
              </div>
            )
        )}
      </div>
      <div>
        <p>
          {showOverrideProtection
            ? jListObjectsInBasketOverrideSafe(basketItems)
            : jListObjectsInBasket(basketItems)}
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <label>
          <input
            checked={showOverrideProtection}
            onChange={toggleOverrideProtection}
            type='checkbox'
          />
          Use override protection
        </label>
      </div>
    </div>
  );
}
