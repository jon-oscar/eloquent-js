import React from 'react';
import { getFlattenedArray } from './getFlattenedArray';

const arrays = [
  ['❤️✨👍', '🚀🌟', '💭💪'],
  ['🌅🔄', '💪😃'],
  ['🚫🙅‍♂️', '💪🏆'],
  ['💪🏋️‍♂️', '📈🔑', '🏃‍♂️🎯'],
];

const phrases = [
  { icon: '❤️✨👍', phrase: 'Believe in yourself, and you are halfway there.' },
  { icon: '🚀🌟', phrase: 'Success is a journey, not a destination.' },
  { icon: '💭💪', phrase: 'Dream big and dare to fail.' },
  { icon: '🌅🔄', phrase: 'Every setback is a setup for a comeback.' },
  { icon: '💪😃', phrase: 'You are stronger than you think.' },
  { icon: '🚫🙅‍♂️', phrase: 'The only limit is the one you set for yourself.' },
  {
    icon: '💪🏆',
    phrase: 'Hard work beats talent when talent does not work hard.',
  },
  { icon: '💪🏋️‍♂️', phrase: 'Embrace the challenges; they make you stronger.' },
  { icon: '📈🔑', phrase: 'Progress, not perfection, is the key to success.' },
  {
    icon: '🏃‍♂️🎯',
    phrase: 'Keep moving forward, you are closer to your goals than you think.',
  },
];

const arrayToEvaluate = [];
arrayToEvaluate.push(arrays[0]);
arrayToEvaluate.push(arrays[1]);
console.log(arrayToEvaluate);

const getPhrase = getFlattenedArray(arrayToEvaluate).map((icon, index) => {
  const matchingIcon = phrases.find((phrase) => phrase.icon === icon);
  if (matchingIcon) {
    return (
      <div className='bg-white m-5 p-2' key={index}>
        {matchingIcon.phrase}
      </div>
    );
  }
  return null;
});
console.log(getPhrase);

export default function Flattening() {
  return (
    <div>
      <div className='upper bg-orange-300 max-w-lg rounded-md'>
        <div className='paramwrapper p-4 flex gap-2'>
          <div className='iteration-1 flex justify-between border-solid p-2 border-2 rounded-sm'>
            {arrays.map((icons) => {
              return (
                <div className='innerArrayParam-2' key={icons}>
                  <span>{icons}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='bottom bg-red-300 max-w-lg rounded-md mt-2'>
        <div className='paramwrapper p-4 flex gap-2'>
          <div className='p-2 rounded-sm'>{getPhrase}</div>
        </div>
      </div>
    </div>
  );
}
