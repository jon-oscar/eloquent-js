/**
 * Determines the dominant writing direction of a given text.
 * @param text - The text to analyze.
 * @returns The dominant writing direction, which can be "ltr" (left-to-right), "rtl" (right-to-left),
 * or "ttb" (top-to-bottom).
 */
import characterScript from '@/constants/chapter-5/characterScript';
import countBy from '@/constants/chapter-5/countBy';

export default function dominantWritingDirection(
  text: string
): 'ltr' | 'rtl' | 'ttb' {
  const counted = countBy(text.split(''), (char) => {
    const script = characterScript(char.codePointAt(0) as number); // Add type assertion
    return script ? script.direction : 'none';
  }).filter(({ name }) => name !== 'none');

  if (counted.length === 0) return 'ltr';

  return counted.reduce((a, b) => (a.count > b.count ? a : b)).name as
    | 'ltr'
    | 'rtl'
    | 'ttb';
}
