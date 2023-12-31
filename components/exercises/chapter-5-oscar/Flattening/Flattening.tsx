import { getFlattenedArray } from './getFlattenedArray';

const arraysOfIcons = [
  ['❤️✨', '🚀🌟', '💭💪'],
  ['🌅🔄', '💪😃'],
  ['🚫🙅‍♂️', '💪🏆'],
];

export const iconsWithPhrases = [
  { icon: '❤️✨', phrase: 'Believe in yourself, and you are halfway there.' },
  { icon: '🚀🌟', phrase: 'Success is a journey, not a destination.' },
  { icon: '💭💪', phrase: 'Dream big and dare to fail.' },
  { icon: '🌅🔄', phrase: 'Every setback is a setup for a comeback.' },
  { icon: '💪😃', phrase: 'You are stronger than you think.' },
  { icon: '🚫🙅‍♂️', phrase: 'The only limit is the one you set for yourself.' },
  {
    icon: '💪🏆',
    phrase: 'Hard work beats talent when talent does not work hard.',
  },
];

/**
 * Renders a component that displays flattened phrases from an array of arrays.
 * Each phrase is represented by a JSX element containing an icon and a corresponding phrase.
 */
export default function Flattening(): JSX.Element {
  /**
   * Retrieves the flattened array of phrases from the given array of arrays, and maps each phrase to a JSX element containing the corresponding icon and phrase.
   * @param arrays - The array of arrays to be flattened.
   * @returns An array of JSX elements representing the phrases for the flattened icons.
   */
  const getPhrase = getFlattenedArray(arraysOfIcons).map((icon) => {
    const matchingIconWithPhrase = iconsWithPhrases.find(
      (iconWitPhraseObject) => iconWitPhraseObject.icon === icon
    );
    return (
      matchingIconWithPhrase && (
        <div
          className='m-2 rounded-sm bg-white p-4'
          key={matchingIconWithPhrase.icon}
        >
          <span className='mr-2'>{matchingIconWithPhrase.icon}</span>
          <span>{matchingIconWithPhrase.phrase}</span>
        </div>
      )
    );
  });

  return (
    <div className='flex flex-col items-center'>
      <div className='max-w-lg rounded-md bg-blue-300'>
        <div className='flex p-4'>
          <div className=' flex justify-between gap-2 rounded-sm'>
            {arraysOfIcons.map((icons) => {
              return (
                <span
                  className='rounded-md bg-white p-3'
                  key={icons.toString()}
                >
                  <span>{icons}</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className='mt-2 max-w-lg rounded-md bg-green-300'>
        <div className='flex flex-col gap-2 p-4'>{getPhrase}</div>
      </div>
    </div>
  );
}
