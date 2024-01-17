import CustomButton from '@/components/CustomButton';
import Image from 'next/image';
import { useState } from 'react';

const initialPeople = [
  {
    name: 'Josh',
    age: 35,
    image: '/avatar1.png',
    phrase: 'Hi there! I am Josh, I am 35 years old.',
  },
  {
    name: 'Jacob',
    age: 23,
    image: '/avatar2.png',
    phrase: 'Hi there! I am Jacob, I am 23 years old.',
  },
];

/**
 * Returns the minimum value between two numbers.
 * @param a - The first number to compare.
 * @param b - The second number to compare.
 * @returns The minimum value between `a` and `b`.
 */
const getMinimum = (a: number, b: number) => (a < b ? a : b);

/**
 * Filters an array of people objects to return only the objects with the minimum age.
 * @param {number} age1 - The age of the first person.
 * @param {number} age2 - The age of the second person.
 * @returns {number} - The minimum age between the two given ages.
 */
const stateFiltered = initialPeople.filter((item) =>
  item.age === getMinimum(initialPeople[0].age, initialPeople[1].age)
    ? item
    : null
);

/**
 * Renders a component that displays a list of people with their images and phrases.
 * @returns JSX.Element
 */
export default function Minimum() {
  const [people, setPeople] = useState(initialPeople);

  return (
    <div className='flex flex-col' data-testid='minimum'>
      <div className='flex flex-row justify-between'>
        {people.map((item) => (
          <div
            className='m-2 flex flex-1 flex-col items-center justify-center'
            key={item.name}
          >
            <div className='h-32 w-32'>
              <Image
                alt={`Avatar for ${item.name}}`}
                className='rounded-full'
                height={128}
                src={item.image}
                width={128}
              />
            </div>
            <p className='mt-2 text-center'>{item.phrase}</p>
          </div>
        ))}
      </div>
      <>
        <CustomButton
          btnType='button'
          containerStyles='text-white rounded-full bg-[#B2980B] min-w-[150px] max-h-[48px]'
          handleClick={() => setPeople(stateFiltered)}
          title='Click me'
        />
      </>
    </div>
  );
}
