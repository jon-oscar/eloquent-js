import React, { useState } from 'react';
import Image from 'next/image';
import CustomButton from '@/components/CustomButton';

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
    <div className='wrapper flex flex-col'>
      <div className='flex flex-row justify-between'>
        {people.map((item) => (
          <div
            key={item.name}
            className='flex-1 flex flex-col flex1 justify-center items-center m-2'
          >
            <div className='w-32 h-32'>
              <Image
                src={item.image}
                alt={`Avatar for ${item.name}}`}
                width={128}
                height={128}
                className='rounded-full'
              />
            </div>
            <p className='text-center mt-2'>{item.phrase}</p>
          </div>
        ))}
      </div>
      <>
        <CustomButton
          title='Click me'
          btnType='button'
          containerStyles='text-white rounded-full bg-[#B2980B] min-w-[150px] max-h-[48px]'
          handleClick={() => setPeople(stateFiltered)}
        />
      </>
    </div>
  );
}
