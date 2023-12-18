import { ReactNode, useState } from 'react';
import { JList } from './JList';
import jArrayToList from './jArrayToList';
import jPrepend from './jPrepend';

/**
 * Recursively renders a linked list of React nodes connected by arrows.
 * @param list The linked list to render.
 * @returns A React node representing the linked list.
 */
function ListNode({ list }: { list: JList<ReactNode> | null }): ReactNode {
  if (list === null) return null;
  return (
    <>
      <div className='m-2 rounded border border-gray-500 p-2' role='listitem'>
        {list.value}
      </div>
      {list.rest && (
        <>
          <div className='text-3xl text-gray-500'>&darr;</div>{' '}
          <ListNode list={list.rest} />
        </>
      )}
    </>
  );
}

export const INITIAL_LIST_ITEMS = [
  'May',
  'the Force',
  '🚀',
  'be',
  'with',
  'you 🫵',
];

/**
 * Renders a linked list of items and a form to prepend new items to the list.
 * @returns A React node representing the linked list.
 */
export default function JAList(): ReactNode {
  const [list, setList] = useState(jArrayToList(INITIAL_LIST_ITEMS));
  const [newItem, setNewItem] = useState('');

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItem.trim() !== '') {
      setList((prevList) => {
        const newList = jPrepend(newItem, prevList);
        setNewItem('');
        return newList;
      });
    }
  };

  return (
    <div className='flex flex-col items-center' data-testid='j-a-list'>
      {/* Input form */}
      <div className='w-full max-w-xs'>
        <form
          className='mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md'
          onSubmit={handleAddItem}
        >
          <div className='mb-4'>
            <label
              className='mb-2 block text-sm font-bold text-gray-700'
              htmlFor='newItem'
            >
              New item
            </label>
            <input
              className='w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
              id='newItem'
              onChange={(e) => setNewItem(e.target.value)}
              type='text'
              value={newItem}
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none'
              type='submit'
            >
              Add
            </button>
          </div>
        </form>
      </div>

      {/* List */}
      <ListNode list={list} />
    </div>
  );
}
