import CheckIcon from '@/components/icons/CheckIcon';
import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';
import jGetNumberOfChars from './jGetNumberOfChars';

const WORDS = ['BBC', 'kakkerlak', 'chase', 'prejudice', 'revival', 'sacred'];
const COUNTED_CHARACTERS = ['a', 'B', 'c'];

export default function JCountChars() {
  const [countedCharacter, setCountedCharacter] = useState(
    COUNTED_CHARACTERS[0]
  );

  return (
    <div data-testid='j-count-chars'>
      <div className='w-full'>
        <RadioGroup value={countedCharacter} onChange={setCountedCharacter}>
          <div className='space-x-2 flex justify-center'>
            {COUNTED_CHARACTERS.map((char) => (
              <RadioGroup.Option
                key={char}
                value={char}
                data-testid={`j-count-chars-${char}-radio`}
                className={({ checked }) =>
                  `${checked ? 'bg-[#B2980B] text-white' : 'bg-white'}
              relative flex cursor-pointer rounded-full px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ checked }) => (
                  <div className='flex w-10 items-center justify-between'>
                    <div className='text-sm'>
                      <RadioGroup.Label
                        as='p'
                        className={`font-medium  ${
                          checked ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {char}
                      </RadioGroup.Label>
                    </div>
                    {checked && (
                      <div className='shrink-0 text-white'>
                        <CheckIcon className='h-6 w-6' />
                      </div>
                    )}
                  </div>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>

      <div className='mt-4'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Word
              </th>
              <th scope='col' className='px-6 py-3'>
                Count
              </th>
            </tr>
          </thead>
          <tbody>
            {WORDS.map((word) => (
              <tr
                key={word}
                className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
                data-testid={`j-count-chars-${word}-row`}
              >
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  data-testid={`j-count-chars-${word}-word`}
                >
                  {word}
                </th>
                <td
                  className='px-6 py-4'
                  data-testid={`j-count-chars-${word}-count`}
                >
                  {jGetNumberOfChars(word, countedCharacter)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
