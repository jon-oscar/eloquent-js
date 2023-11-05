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

  let keysA = Object.keys(a),
    keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

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
