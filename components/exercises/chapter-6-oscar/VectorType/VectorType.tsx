import React, { useState } from 'react';
import { Vec } from './Vec'; // Import the Vec class

/**
 * Represents a square and provides controls to increase or decrease the size.
 */
export default function VectorType() {
  const [vector, setVector] = useState(new Vec(60, 60)); // Initial vector with width and height

  // Event handler for changing the width input
  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newWidth = Number(event.target.value);
    setVector((prevVector) => new Vec(newWidth, prevVector.y));
  };

  // Event handler for changing the height input
  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newHeight = Number(event.target.value);
    setVector((prevVector) => new Vec(prevVector.x, newHeight));
  };

  // Event handler for increasing the vector by 10 in both width and height
  const handlePlus = () => {
    setVector((prevVector) => prevVector.plus(new Vec(10, 10)));
  };

  // Event handler for decreasing the vector by 10 in both width and height
  const handleMinus = () => {
    setVector((prevVector) => prevVector.minus(new Vec(10, 10)));
  };

  // Event handler for displaying an alert with the length of the vector
  const handleLength = () => {
    alert(`Length: ${vector.length}`);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <div
        className='bg-blue-500'
        style={{ width: `${vector.x}px`, height: `${vector.y}px` }}
      ></div>
      <div>
        <label htmlFor='widthInput'>Width:</label>
        <input
          id='widthInput'
          onChange={handleWidthChange}
          type='number'
          value={vector.x}
        />
      </div>
      <div>
        <label htmlFor='heightInput'>Height:</label>
        <input
          id='heightInput'
          onChange={handleHeightChange}
          type='number'
          value={vector.y}
        />
      </div>
      <div className='mt-4 space-x-4'>
        <button
          className='rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'
          onClick={handlePlus}
        >
          Increase by 10
        </button>
        <button
          className='rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600'
          onClick={handleMinus}
        >
          Decrease by 10
        </button>
        <button
          className='rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600'
          onClick={handleLength}
        >
          Get Length
        </button>
      </div>
    </div>
  );
}
