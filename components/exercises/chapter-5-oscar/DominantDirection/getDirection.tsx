import characterScript from '@/constants/chapter-5/characterScript';
import countBy from '@/constants/chapter-5/countBy';

type CharacterScript = {
  name: string;
  count: number;
};

/**
 * Determines the dominant direction of a given text.
 * @param text - The text to analyze.
 * @returns The dominant direction of the text.
 */
export function getDirection(text: string): 'ltr' | 'rtl' | 'none' {
  // count the number of characters that belong to each script
  const counted: CharacterScript[] = countBy(Array.from(text), (char) => {
    // get the code point of the character
    let codePoint = char.codePointAt(0);

    // get the script object that corresponds to the code point
    let script = codePoint ? characterScript(codePoint) : null;

    // return the direction of the script object
    return script?.direction ?? 'none';
  });

  // filter out the characters that don't belong to a script
  let filteredCounted: CharacterScript[] = counted.filter(
    ({ name }) => name !== 'none'
  );

  if (filteredCounted.length === 0) return 'none';

  // find the script with the highest count and return its direction
  let directionResult = filteredCounted.reduce((a, b) =>
    a.count > b.count ? a : b
  ).name;

  return directionResult as 'ltr' | 'rtl' | 'none';
}
