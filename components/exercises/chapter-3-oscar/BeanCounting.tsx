import React from 'react';

const countBs = (param: string): number => {
  let count = 0;
  for (let i = 0; i < param.length; i++) {
    if (param[i] === 'B') {
      count++;
    }
  }
  return count;
};

const countChar = (param: string, char: string): number => {
  let count = 0;
  for (let i = 0; i < param.length; i++) {
    if (param[i] === char) {
      count++;
    }
  }
  return count;
};

const BeanCounting = () => {
  return (
    <div>
      <div>{countBs('BBC')}</div>
      <div>{countChar('Mi primera chamba', 'm')}</div>
    </div>
  );
};

export default BeanCounting;
