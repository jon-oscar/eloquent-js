import React, { useEffect, useState } from 'react';
import './Recursion.css';

export function isEven(param: number): boolean {
  if (param == 0) {
    return true;
  } else if (param == 1) {
    return false;
  } else if (param < 0) {
    return isEven(-param);
  } else {
    return isEven(param - 2);
  }
}

const petals: JSX.Element[] = [];

const Recursion = () => {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      addPetal();
      setTimeRemaining(
        timeRemaining === 8 ? timeRemaining + 0 : timeRemaining + 1
      );
    }, 1000);
    return () => clearTimeout(timer);
  });

  const addPetal = () => {
    if (isEven(timeRemaining) === false) {
      petals.push(<div className='petal bg-[#b2990b9f]' />);
    } else {
      petals.push(<div className='petal bg-[#b2430b9f]' />);
    }
  };

  return (
    <div className='wrap'>
      {petals.map((petal) => petal)}
      <div className='center'></div>
    </div>
  );
};

export default Recursion;
