import React, { useState } from 'react';
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
const mockedData = [];
mockedData.push(arrays[0]);
mockedData.push(arrays[1]);

export default function Flattening() {
  const [phraseBoard, setPhraseBoard] = useState(mockedData);

  const getPhrase = getFlattenedArray(phraseBoard).map((icon, index) => {
    const matchingIcon = phrases.find((phrase) => phrase.icon === icon);
    if (matchingIcon) {
      return (
        <div className='bg-white m-5 p-4 rounded-sm' key={index}>
          {matchingIcon.phrase}
        </div>
      );
    }
    return null;
  });

  return (
    <div className='flex flex-col items-center'>
      <div className='upper bg-orange-300 max-w-lg rounded-md'>
        <div className='paramwrapper p-4 flex'>
          <div className='iteration-1 flex justify-between border-solid gap-2 border-2 rounded-sm'>
            {arrays.map((icons) => {
              return (
                <span className='bg-white p-3 rounded-md' key={icons}>
                  <span>{icons}</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className='bottom bg-red-300 max-w-lg rounded-md mt-2'>
        <div className='paramwrapper p-4 flex flex-col gap-2'>{getPhrase}</div>
      </div>
    </div>
  );
}
