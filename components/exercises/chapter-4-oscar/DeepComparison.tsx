import React from 'react';

/**
 * Compares two values deeply to determine if they are equivalent.
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @returns True if the values are equivalent, false otherwise.
 */

const deepEqual = (a: any, b: any) => {
  if (a === b) return true;

  if (a == null || typeof a != 'object' || b == null || typeof b != 'object')
    return false;

  let keysA = Object.keys(a);
  let keysB = Object.keys(b);

  // compare the total number of keys, if it is not the same it's false
  if (keysA.length != keysB.length) return false;

  // for each key, it checks if the key is not present in keysB or if the values associated with the same key in a and b are not deeply equal.
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
  return true;
};

let obj = { here: { is: 'an' }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }));

const DeepComparison = () => {
  return <div>DeepComparison</div>;
};

export default DeepComparison;
