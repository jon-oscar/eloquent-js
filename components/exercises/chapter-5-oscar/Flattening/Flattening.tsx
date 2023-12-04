import React from 'react';

const arrays = [
  ['❤️✨👍', '🚀🌟', '💭💪'],
  ['🌅🔄', '💪😃'],
  ['🚫🙅‍♂️', '💪🏆'],
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

export function getFlattenedArray(
  arrays: (string | number)[][]
): (string | number)[] {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

console.log(getFlattenedArray(arrays));

export default function Flattening() {
  return (
    <div>
      <div className='upper bg-orange-300 max-w-lg rounded-md'>
        <div className='paramwrapper p-4 flex gap-2'>
          <div className='iteration-1 flex border-solid p-2 border-2 rounded-sm'>
            <div className='innerArrayParam-1'>
              <span>❤️‍🔥</span>
            </div>
            <div className='innerArrayParam-2'>
              <span>❤️‍🔥</span>
            </div>
            <div className='innerArrayParam-3'>
              <span>❤️‍🔥</span>
            </div>
          </div>
          <div className='iteration-2 flex border-solid p-2 border-2 rounded-sm'>
            <div className='innerArrayParam-1'>
              <span>❤️‍🔥</span>
            </div>
            <div className='innerArrayParam-2'>
              <span>❤️‍🔥</span>
            </div>
            <div className='innerArrayParam-3'>
              <span>❤️‍🔥</span>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom bg-red-300 max-w-lg rounded-md mt-2'>
        <div className='paramwrapper p-4 flex gap-2'>
          <div className=' bg-white p-2 rounded-sm'>
            <span>This is an example of sentence</span>
          </div>
          <div className=' bg-white p-2 rounded-sm'>
            <span>This is an example of sentence</span>
          </div>
        </div>
      </div>
    </div>
  );
}
