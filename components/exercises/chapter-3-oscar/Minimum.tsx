import React from 'react';

const getMinimum = (a: number, b: number) => {
  const result = Math.min(a, b);

  return result;
};

console.log(getMinimum(1, 3));

const Minimum = () => {
  return <div>Minimum</div>;
};

export default Minimum;
