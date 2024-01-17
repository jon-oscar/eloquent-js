import { useState } from 'react';
import jDeepEqual from './jDeepEqual';

const FONT_FAMILIES = ['Impact', 'Bodoni', 'Helvetica'];
const COLORS = ['hotpink', 'turquoise', 'lime'];

/**
 * Renders two buttons with different text styles. When a button is clicked, its style
 * is randomly changed. A message is displayed below the buttons indicating whether
 * the styles of the two buttons match.
 * @returns JSX.Element
 */
export default function JDeepComparison(): JSX.Element {
  type Style = {
    fontFamily: string;
    color: string;
  };
  const [text1Style, setText1Style] = useState<Style>({
    fontFamily: FONT_FAMILIES[0],
    color: COLORS[0],
  });
  const [text2Style, setText2Style] = useState<Style>({
    fontFamily: FONT_FAMILIES[1],
    color: COLORS[1],
  });
  const [match, setMatch] = useState<boolean>(false);

  const generateRandomStyle = (prevStyle: Style): Style => {
    const randomFontFamily =
      FONT_FAMILIES[Math.floor(Math.random() * FONT_FAMILIES.length)];
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];

    // Generate a new style until all properties of the new are different from the previous
    if (
      randomFontFamily === prevStyle.fontFamily ||
      randomColor === prevStyle.color
    ) {
      return generateRandomStyle(prevStyle);
    } else {
      return { fontFamily: randomFontFamily, color: randomColor };
    }
  };

  const handleText1Click = () => {
    const randomText1Style = generateRandomStyle(text1Style);
    setText1Style(randomText1Style);
    setMatch(jDeepEqual(randomText1Style, text2Style));
  };

  const handleText2Click = () => {
    const randomText2Style = generateRandomStyle(text2Style);
    setText2Style(randomText2Style);
    setMatch(jDeepEqual(text1Style, randomText2Style));
  };

  const buttonClassNames =
    'border border-gray p-2 m-2 rounded-md shadow-md hover:shadow-lg w-60 text-center h-14 text-xl';

  return (
    <div data-testid='j-deep-comparison'>
      <div className='flex items-center justify-center'>
        <button
          className={buttonClassNames}
          onClick={handleText1Click}
          style={text1Style}
        >
          {"I don't do fashion."}
        </button>
        <button
          className={buttonClassNames}
          onClick={handleText2Click}
          style={text2Style}
        >
          {'I am fashion.'}
        </button>
      </div>
      <div className='mt-4 flex justify-center'>
        {match ? (
          <span>{'✅ Text styles match'}</span>
        ) : (
          <span>{'❌ Text styles do not match'}</span>
        )}
      </div>
    </div>
  );
}
