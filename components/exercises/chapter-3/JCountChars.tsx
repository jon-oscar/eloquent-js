import CheckIcon from '@/components/icons/CheckIcon';
import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';
import jGetNumberOfChars from './jGetNumberOfChars';

const WORDS = ['BBC', 'kakkerlak', 'chase', 'prejudice', 'revival', 'sacred'];
const COUNTED_CHARACTERS = ['a', 'B', 'c'];

/**
 * Renders a component that displays a table of word counts for a selected character.
 * @returns JSX.Element
 */
export default function JCountChars() {
  const [countedCharacter, setCountedCharacter] = useState(
    COUNTED_CHARACTERS[0]
  );

  return (
    <div data-testid='j-count-chars'>
      <div className='w-full'>
        <RadioGroup onChange={setCountedCharacter} value={countedCharacter}>
          <div className='flex justify-center space-x-2'>
            {COUNTED_CHARACTERS.map((char) => (
              <RadioGroup.Option
                className={({ checked }) =>
                  `${checked ? 'bg-[#B2980B] text-white' : 'bg-white'}
              relative flex cursor-pointer rounded-full px-5 py-4 shadow-md focus:outline-none`
                }
                data-testid={`j-count-chars-${char}-radio`}
                key={char}
                value={char}
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
        <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
          <thead className='bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th className='px-6 py-3' scope='col'>
                Word
              </th>
              <th className='px-6 py-3' scope='col'>
                Count
              </th>
            </tr>
          </thead>
          <tbody>
            {WORDS.map((word) => (
              <tr
                className='border-b bg-white dark:border-gray-700 dark:bg-gray-800'
                data-testid={`j-count-chars-${word}-row`}
                key={word}
              >
                <th
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
                  data-testid={`j-count-chars-${word}-word`}
                  scope='row'
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
