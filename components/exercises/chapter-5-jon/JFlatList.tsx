import React, { useState } from 'react';
import jFlattening from './jFlattening';

const PREFIXES = ['un', 'dis', 'super'];
const WORD = 'like';
const SUFFIXES = ['able', 'ful', 'ment', 'ness', 'ly'];

type ButtonGroupProps = {
  color: 'blue' | 'green';
  items: string[];
  setSelectedItems: (items: string[]) => void;
  selectedItems: string[];
  title: string;
};

/**
 * Renders a group of buttons that can be selected. Has different styling based on selected state.
 * @returns {JSX.Element}
 */
function ButtonGroup({
  color,
  items,
  setSelectedItems,
  selectedItems,
  title,
}: ButtonGroupProps): JSX.Element {
  const bgColor = color === 'blue' ? 'bg-blue-300' : 'bg-green-300';
  const selectedBgColor = color === 'blue' ? 'bg-blue-500' : 'bg-green-500';

  const handleClick = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div className={`rounded-xl ${bgColor}`}>
      <h3 className='m-2 text-center text-xl font-bold'>{title}</h3>
      <div className='flex flex-wrap justify-center'>
        {items.map((item) => (
          <button
            className={`m-2 rounded-xl px-3 py-1 ${
              selectedItems.includes(item)
                ? selectedBgColor
                : 'bg-white hover:bg-gray-200'
            }`}
            key={item}
            onClick={() => handleClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

/**
 * Renders a list of prefixes and suffixes that can be selected to create a new word.
 * @returns {JSX.Element}
 */
export default function JFlatList(): JSX.Element {
  const [selectedPrefixes, setSelectedPrefixes] = useState<string[]>(['un']);
  const [selectedSuffixes, setSelectedSuffixes] = useState<string[]>(['ly']);

  return (
    <div data-testid='j-flat-list'>
      <div className='flex gap-4'>
        <ButtonGroup
          color='blue'
          items={PREFIXES}
          selectedItems={selectedPrefixes}
          setSelectedItems={setSelectedPrefixes}
          title='Prefixes'
        />
        <ButtonGroup
          color='green'
          items={SUFFIXES}
          selectedItems={selectedSuffixes}
          setSelectedItems={setSelectedSuffixes}
          title='Suffixes'
        />
      </div>
      <div className='mt-4 rounded-xl bg-yellow-300 p-4'>
        <h3 className='m-2 text-center text-xl font-bold'>Result</h3>
        <div>
          <p className='m-2 text-center'>
            {jFlattening([selectedPrefixes, [WORD], selectedSuffixes])}
          </p>
        </div>
      </div>
    </div>
  );
}
