import React, { useState } from 'react';
import { Vec } from './Vec'; // Import the Vec class

function VectorType() {
  const [vector, setVector] = useState(new Vec(60, 60)); // Initial vector with width and height

  const handleWidthChange = (event) => {
    const newWidth = Number(event.target.value);
    setVector((prevVector) => new Vec(newWidth, prevVector.y));
  };

  const handleHeightChange = (event) => {
    const newHeight = Number(event.target.value);
    setVector((prevVector) => new Vec(prevVector.x, newHeight));
  };

  const handlePlus = () => {
    setVector((prevVector) => prevVector.plus(new Vec(10, 10)));
  };

  const handleMinus = () => {
    setVector((prevVector) => prevVector.minus(new Vec(10, 10)));
  };

  const handleLength = () => {
    alert(`Length: ${vector.length}`);
  };

  return (
    <div>
      <div
        className={`w-${vector.x} h-${vector.y} bg-blue-500`}
        style={{ width: `${vector.x}px`, height: `${vector.y}px` }}
      ></div>
      <div>
        <label>Width:</label>
        <input type='number' value={vector.x} onChange={handleWidthChange} />
      </div>
      <div>
        <label>Height:</label>
        <input type='number' value={vector.y} onChange={handleHeightChange} />
      </div>
      <div>
        <button onClick={handlePlus}>Increase by 10</button>
        <button onClick={handleMinus}>Decrease by 10</button>
        <button onClick={handleLength}>Get Length</button>
      </div>
    </div>
  );
}

export default VectorType;
