import React from 'react';

import { arrayToList, listToArray, nth, prepend } from './Utils';

const Alist = () => {
  return (
    <div>
      <div>arrayToList([10, 20])</div>
      <div>{listToArray(arrayToList([10, 20, 30]))}</div>
      <div>prepend(10, prepend(20, null))</div>
      <div>{nth(arrayToList([10, 20, 30]), 1)}</div>
    </div>
  );
};

export default Alist;
