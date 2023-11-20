import React from 'react';
import { deepEqual } from './Utils';

let obj = { here: { is: 'an' }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }));

const DeepComparison = () => {
  return <div>{deepEqual(obj, obj)}</div>;
};

export default DeepComparison;
