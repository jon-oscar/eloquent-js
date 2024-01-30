type PicnicBasket = {
  cheese: boolean;
  wine: boolean;
};

export type PicnicBasketWithOverride = PicnicBasket & {
  hasOwnProperty: boolean;
};

export type Basket = PicnicBasket | PicnicBasketWithOverride;

function jListObjectsHelper(
  basket: Basket,
  isItemInBasketFn: (basket: Basket, item: keyof Basket) => boolean
): string {
  const message = 'In this basket, I have:';
  const list: string[] = [];
  try {
    for (const item in basket) {
      if (
        basket[item as keyof Basket] === true &&
        isItemInBasketFn(basket, item as keyof Basket)
      ) {
        list.push(item);
      }
    }
    return `${message} ${list.join(', ')}`;
  } catch (error) {
    return `${message} an Error!`;
  }
}

/**
 * Returns a string representation of the objects in the picnic basket.
 */
export function jListObjectsInBasket(basket: Basket): string {
  return jListObjectsHelper(basket, (basket, item) =>
    basket.hasOwnProperty(item)
  );
}

/**
 * Returns a string representation of the objects in the picnic basket.
 * This version also lists the hasOwnProperty property if it has been overridden.
 */
export function jListObjectsInBasketOverrideSafe(basket: Basket): string {
  return jListObjectsHelper(basket, (basket, item) =>
    Object.prototype.hasOwnProperty.call(basket, item)
  );
}
