import React, { useState } from 'react';

interface FizzBuzzProps {
  phraseValue: string;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const getPhrase = (phrase: string) => {
  let fizzBuzzedPhrase = [];
  const toArray = phrase.split(' ');

  for (let i = 1; i <= toArray.length; i++) {
    if (i % 3 == 0) {
      fizzBuzzedPhrase.push('Fizz');
    } else if (i % 5 == 0) {
      fizzBuzzedPhrase.push('Buzz');
    } else {
      fizzBuzzedPhrase.push(toArray[i - 1]);
    }
  }
  return fizzBuzzedPhrase.join(' ');
};

const FizzBuzz = ({ phraseValue }: FizzBuzzProps) => {
  const [state, setState] = useState(phraseValue);

  return (
    <div className='flex flex-col text-center gap-2 items-center'>
      <h1 className='font-semibold'>Live typing display</h1>
      <input
        type='text'
        value={state}
        placeholder='Enter your phrase here'
        onChange={(e) => setState(e.target.value)}
        className='text-center bg-[#FEFCF3] border-2 border-black-50 rounded-3xl w-full h-[50px]'
      />
      <span className='text-center bg-white border-2 border-black-100 rounded-3xl w-full h-[50px] overflow-hidden'>
        {getPhrase(state)}
      </span>
    </div>
  );
};

export default FizzBuzz;
