import React from 'react';
import './Recursion.css';

const isEven = (param: number): boolean => {
  if (param == 0) {
    return true;
  } else if (param == 1) {
    return false;
  } else if (param < 0) {
    return isEven(-param);
  } else {
    return isEven(param - 2);
  }
};

const Recursion = () => {
  return (
    <div className='wrap'>
      <div className='petal'></div>
      <div className='petal'></div>
      <div className='petal'></div>
      <div className='petal'></div>
      <div className='petal'></div>
      <div className='petal'></div>
      <div className='petal'></div>
      <div className='petal'></div>
      <div className='center'></div>
    </div>
  );
};

export default Recursion;
