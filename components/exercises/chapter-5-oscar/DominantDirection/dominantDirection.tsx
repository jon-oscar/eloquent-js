import { SCRIPTS } from './scripts';

type CharacterScript = {
  name: string;
  count: number;
};
type Script = {
  ranges: number[][];
  direction: string;
};

export function countBy(
  items: string[],
  groupName: (item: string) => string
): CharacterScript[] {
  // store name and count
  let counts: CharacterScript[] = []; // [{ name: boolean; count: number }]

  for (let item of items) {
    // check the condition and assign the name
    let name = groupName(item);

    // find the position of the name in the counts array
    let position = counts.findIndex((c) => c.name === name);

    // if the name is not in the counts array, add it with a count of 1, else increment the count
    position === -1
      ? counts.push({ name, count: 1 })
      : counts[position].count++;
  }
  return counts;
}

/**
 * Returns the script object that corresponds to the given Unicode code point.
 * If no script is found, returns null.
 * @param code - The Unicode code point.
 * @returns The script object or null.
 */
export function characterScript(code: number): Script | null {
  for (let script of SCRIPTS) {
    if (
      // check if the code is within the range of the script
      script.ranges.some(([from, to]) => {
        code >= from && code < to;
        return code;
      })
    ) {
      // if it is, return the script object
      return script;
    }
  }
  // if it is not, return null
  return null;
}

/**
 * Determines the dominant direction of a given text.
 * @param text - The text to analyze.
 * @returns The dominant direction of the text.
 */
export function dominantDirection(text: string): string {
  // count the number of characters that belong to each script
  let counted: CharacterScript[] = countBy(Array.from(text), (char) => {
    // get the code point of the character
    let codePoint = char.codePointAt(0);

    // get the script object that corresponds to the code point
    let script = codePoint !== undefined ? characterScript(codePoint) : null;

    // return the direction of the script object
    return script ? script.direction : 'none';
  });

  // filter out the characters that don't belong to a script
  let filteredCounted: CharacterScript[] = counted.filter(
    ({ name }) => name !== 'none'
  );

  // find the script with the highest count and return its direction
  let directionResult = filteredCounted.reduce((a, b) =>
    a.count > b.count ? a : b
  ).name;

  return directionResult;
}
