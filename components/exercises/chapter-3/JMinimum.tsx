import CustomButton from '@/components/CustomButton';
import { useState } from 'react';
import jGetMinimumNumber from './JGetMinimumNumber';

const BUG_CONTAINER_SIZE = 500;
const INITIAL_NUMBER_OF_BUGS_1 = 5;
const INITIAL_NUMBER_OF_BUGS_2 = 3;

/**
 * Renders a bug emoji with hatching and skull emojis to indicate the bug's state.
 * @param type - The type of bug to render.
 * @returns The JSX element representing the bug.
 */
function Bug({ type }: { type: 'appearing' | 'disappearing' | 'default' }) {
  switch (type) {
    case 'appearing':
      return <span className='text-sm'>🐣</span>;
    case 'disappearing':
      return <span>💀🔨</span>;
    default:
      return <span>🐛</span>;
  }
}

/**
 * Renders a component that displays a counter of bugs.
 * @param bugs - The bugs to display in the counter.
 * @param incrementBugs - The function to call when the user clicks the increment button.
 * @param decrementBugs - The function to call when the user clicks the decrement button.
 * @returns The JSX element representing the BugCounter component.
 */
function BugCounter({
  bugs,
  incrementBugs,
  decrementBugs,
}: {
  bugs: { x: number; y: number; rotation: number }[];
  incrementBugs: () => void;
  decrementBugs: () => void;
}) {
  // Track button mouse down to add a intermediate state of appearing/disappearing
  const [incrementMouseDown, setIncrementMouseDown] = useState(false);
  const [decrementMouseDown, setDecrementMouseDown] = useState(false);

  const handleIncrementMouseUp = () => {
    if (incrementMouseDown) {
      incrementBugs();
    }
    setIncrementMouseDown(false);
  };

  const handleDecrementMouseUp = () => {
    if (decrementMouseDown && bugs.length > 0) {
      decrementBugs();
    }
    setDecrementMouseDown(false);
  };

  /**
   * Determines the type of bug to render based on its index in the counter.
   * @param index - The index of the bug in the counter.
   * @returns The type of bug to render.
   */
  const getBugType = (
    index: number
  ): 'appearing' | 'disappearing' | 'default' => {
    if (index === bugs.length - 1) {
      if (incrementMouseDown) {
        return 'appearing';
      } else if (decrementMouseDown) {
        return 'disappearing';
      }
    }
    return 'default';
  };

  const buttonStyles = 'text-white rounded-full bg-[#B2980B] m-2';

  return (
    <div className='flex flex-col items-center'>
      <div className='flex justify-center items-center'>
        <CustomButton
          handleMouseDown={() => setIncrementMouseDown(true)}
          handleMouseUp={handleIncrementMouseUp}
          title='+'
          containerStyles={buttonStyles}
        />
        <CustomButton
          handleMouseDown={() => setDecrementMouseDown(true)}
          handleMouseUp={handleDecrementMouseUp}
          title='-'
          containerStyles={buttonStyles}
        />
      </div>
      <div
        className='border-2 border-[#B2990B9F] rounded-lg p-10 relative m-4'
        style={{ width: BUG_CONTAINER_SIZE, height: BUG_CONTAINER_SIZE }}
      >
        {bugs.map((bug, i) => (
          <div
            key={`${i}-${bug.x}-${bug.y}-${bug.rotation}`}
            className='absolute'
            style={{
              left: bug.x,
              top: bug.y,
              transform: `rotate(${bug.rotation}deg)`,
            }}
          >
            <Bug type={getBugType(i)} />
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Renders a component that compares two bug counters and displays which one has fewer bugs.
 * @returns The JSX element representing the JMinimum component.
 */
export default function JMinimum() {
  // Create a bug with a random position and rotation
  const createBug = () => ({
    x: Math.random() * (BUG_CONTAINER_SIZE - 30),
    y: Math.random() * (BUG_CONTAINER_SIZE - 30),
    rotation: Math.random() * 360,
  });

  const [bugs1, setBugs1] = useState(
    [...Array(INITIAL_NUMBER_OF_BUGS_1)].map(createBug)
  );
  const [bugs2, setBugs2] = useState(
    [...Array(INITIAL_NUMBER_OF_BUGS_2)].map(createBug)
  );

  const [minimumBugCounter, setMinimumBugCounter] = useState(0);

  const handleMinButtonClick = () => {
    const min = jGetMinimumNumber(bugs1.length, bugs2.length);
    if (min === bugs1.length) {
      setMinimumBugCounter(1);
    } else if (min === bugs2.length) {
      setMinimumBugCounter(2);
    }
    setTimeout(() => {
      setMinimumBugCounter(0);
    }, 1000);
  };

  const handleIncrementBugs1 = () => {
    setBugs1([...bugs1, createBug()]);
  };

  const handleIncrementBugs2 = () => {
    setBugs2([...bugs2, createBug()]);
  };

  const handleDecrementBugs1 = () => {
    if (bugs1.length > 0) {
      setBugs1(bugs1.slice(0, bugs1.length - 1));
    }
  };

  const handleDecrementBugs2 = () => {
    if (bugs2.length > 0) {
      setBugs2(bugs2.slice(0, bugs2.length - 1));
    }
  };

  const defaultBorderStyles = 'border-4 rounded-lg border-transparent';
  // Border style for the counter with the fewest bugs (when the button is clicked)
  const minBorderStyles = `${defaultBorderStyles} border-[#B2430B9F]`;

  return (
    <div className='flex flex-col items-center' data-testid='j-minimum'>
      <div
        data-testid='bug-counter-1'
        className={
          minimumBugCounter === 1 ? minBorderStyles : defaultBorderStyles
        }
      >
        <BugCounter
          bugs={bugs1}
          incrementBugs={handleIncrementBugs1}
          decrementBugs={handleDecrementBugs1}
        />
      </div>
      <CustomButton
        handleClick={handleMinButtonClick}
        title='Which code has fewer bugs?'
        containerStyles='text-white rounded-full bg-[#B2980B] m-6'
      />
      <div
        data-testid='bug-counter-2'
        className={
          minimumBugCounter === 2 ? minBorderStyles : defaultBorderStyles
        }
      >
        <BugCounter
          bugs={bugs2}
          incrementBugs={handleIncrementBugs2}
          decrementBugs={handleDecrementBugs2}
        />
      </div>
    </div>
  );
}
