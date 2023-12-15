import { useState } from 'react';

type FizzBuzzProps = {
  phraseValue: string;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

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
    <div className='flex flex-col items-center gap-2 text-center'>
      <h1 className='font-semibold'>Live typing display</h1>
      <input
        aria-label='Phrase'
        className='h-[50px] w-full rounded-3xl border-2 bg-[#FEFCF3] text-center'
        onChange={(e) => setState(e.target.value)}
        placeholder='Enter your phrase here'
        type='text'
        value={state}
      />
      <span className='h-[50px] w-full overflow-hidden rounded-3xl border-2 border-[#B2980B] bg-white text-center'>
        {getPhrase(state)}
      </span>
    </div>
  );
};

export default FizzBuzz;
