import React, { useState } from 'react';

const ColorChanger = () => {
  const [color, setColor] = useState<string>('red');

  const changeColor = () => {
    const newColor = color === 'red' ? 'blue' : 'red';
    setColor(newColor);
  };

  return (
    <div>
      <h1 style={{ color }}>{color} Text</h1>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default ColorChanger;
