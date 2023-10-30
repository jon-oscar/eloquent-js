import React from 'react';

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

console.log(isEven(50));

const Recursion = () => {
  return <div>Recursion</div>;
};

export default Recursion;
