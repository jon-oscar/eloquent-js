import React, { useState } from 'react';
import Group from './Group';

/**
 * Renders a component that allows to add and remove members from a group.
 * @returns JSX.Element
 */
export default function MembersGroup(): JSX.Element {
  const initialState = ['Oscar', 'Luis', 'Maria'];
  const [members, setMembers] = useState(Group.from(initialState));
  const [input, setInput] = useState('');

  /**
   * Disable if the input is empty, contains only whitespace, or already exists in the group.
   */
  const isInputEmptyOrExists = input.trim() === '' || members.has(input);

  /**
   * Adds the input value to the members list and updates the state.
   */
  function handleAdd() {
    members.add(input);
    setMembers(members);
    setInput('');
  }

  /**
   * Adds the input value to the members list and updates the state.
   */
  function handleRemove() {
    members.delete(input);
    setMembers(members);
    setInput('');
  }

  return (
    <div className='container'>
      <div className='mb-2 flex flex-row gap-x-2'>
        <input
          aria-label='Phrase'
          className='h-[50px] w-full rounded bg-[#FEFCF3] px-4 py-2 text-center'
          onChange={(e) => setInput(e.target.value)}
          placeholder='Enter your member name'
          type='text'
          value={input}
        />
        <div className='flex gap-x-2'>
          <button
            className={`h-[50px] w-full rounded px-4 py-2 text-center text-sm text-white ${
              isInputEmptyOrExists
                ? 'cursor-not-allowed bg-gray-300'
                : 'bg-green-500'
            }`}
            disabled={isInputEmptyOrExists}
            onClick={handleAdd}
          >
            Add Member
          </button>
          <button
            className={`h-[50px] w-full rounded px-4 py-2 text-center text-sm text-white ${
              !input.trim() ? 'cursor-not-allowed bg-gray-300' : 'bg-red-500'
            }`}
            disabled={!input.trim()} // Disable the button if input is empty or whitespace
            onClick={handleRemove}
          >
            Delete Member
          </button>
        </div>
      </div>
      {members.has(input) && (
        <p className='my-2 text-red-500'>Member is already in the list</p>
      )}
      <ul>
        {[...members].map((value) => (
          <li
            className='mb-2 rounded-lg bg-white p-2 shadow-md hover:shadow-lg'
            key={value}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
