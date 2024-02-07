import { useState } from 'react';
import Group from './JGroup';
import Image from 'next/image';

type Parrot =
  | 'banana parrot'
  | 'coffee parrot'
  | 'fix parrot'
  | 'lucky parrot'
  | 'pizza parrot'
  | 'portal parrot';

const parrots: Parrot[] = [
  'banana parrot',
  'coffee parrot',
  'fix parrot',
  'lucky parrot',
  'pizza parrot',
  'portal parrot',
];

/**
 * Component that displays a list of party parrots and allows adding/removing parrots.
 */
export default function JParrots(): JSX.Element {
  const [shownParrots, setShownParrots] = useState<Group>(new Group());

  /**
   * Event handler for adding a parrot to the shown parrots list.
   * @param parrot The parrot to add.
   */
  const handleButtonClick = (parrot: Parrot) => {
    const newShownParrots = Group.from(shownParrots.members);
    newShownParrots.add(parrot);
    setShownParrots(newShownParrots);
  };

  /**
   * Event handler for removing a parrot from the shown parrots list.
   * @param parrot The parrot to remove.
   */
  const handleParrotClick = (parrot: Parrot) => {
    const newShownParrots = Group.from(shownParrots.members);
    newShownParrots.delete(parrot);
    setShownParrots(newShownParrots);
  };

  return (
    <div>
      <div className='flex gap-2'>
        {parrots.map((parrot) => (
          <button
            className='rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400'
            disabled={shownParrots.has(parrot)}
            key={parrot}
            onClick={() => handleButtonClick(parrot)}
          >
            {parrot.replace(' parrot', '')}
          </button>
        ))}
      </div>
      <div className='mt-4 flex gap-2' style={{ minHeight: '60px' }}>
        {shownParrots.members.length > 0 &&
          shownParrots.members.map((parrot) => (
            <span
              className='cursor-pointer text-4xl'
              key={parrot}
              onClick={() => handleParrotClick(parrot)}
            >
              <Image
                alt={parrot}
                height={60}
                src={`/${parrot}.gif`}
                width={60}
              />
            </span>
          ))}
      </div>
    </div>
  );
}
