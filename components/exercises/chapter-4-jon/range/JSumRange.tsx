import { useState } from 'react';
import jGetRange from './jGetRange';
import jSumNumberRange from './jSumNumberRange';

export const MIN_VALUE = -100;
export const MAX_VALUE = 100;
export const INITIAL_MIN_VALUE = -25;
export const INITIAL_MAX_VALUE = 42;

/**
 * Renders a component that allows the user to select a range of numbers and displays the sum of the selected range.
 * @returns The JSX element representing the JSumRange component.
 */
export default function JSumRange(): React.JSX.Element {
  const [minValue, setMinValue] = useState(INITIAL_MIN_VALUE);
  const [maxValue, setMaxValue] = useState(INITIAL_MAX_VALUE);

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    if (newValue <= maxValue) {
      setMinValue(newValue);
    }
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    if (newValue >= minValue) {
      setMaxValue(newValue);
    }
  };

  return (
    <div data-testid='j-sum-range'>
      <div className='flex flex-col align-middle'>
        <div className='flex flex-col align-middle'>
          <label className='m-2' htmlFor='min'>
            From {minValue}
          </label>
          <input
            id='min'
            max={MAX_VALUE}
            min={MIN_VALUE}
            onChange={handleMinChange}
            type='range'
            value={minValue}
          />
        </div>
        <div className='flex flex-col align-middle'>
          <label className='m-2' htmlFor='max'>
            To {maxValue}
          </label>
          <input
            id='max'
            max={MAX_VALUE}
            min={MIN_VALUE}
            onChange={handleMaxChange}
            type='range'
            value={maxValue}
          />
        </div>
      </div>
      <p>Sum: {jSumNumberRange(jGetRange(minValue, maxValue))}</p>
    </div>
  );
}
