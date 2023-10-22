import React from 'react';

interface FizzBuzzProps {
  phraseValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

const FizzBuzz = ({ phraseValue, onChange }: FizzBuzzProps) => {
  return (
    <>
      <h1>Live typing display</h1>
      <input
        type='text'
        value={phraseValue}
        placeholder='Enter your phrase here'
        onChange={onChange}
      />
      <p>{getPhrase(phraseValue)}</p>
    </>
  );
};

export default FizzBuzz;
