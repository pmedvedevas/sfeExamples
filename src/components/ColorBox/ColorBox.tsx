import { useState } from 'react';

const ColorBox = () => {
  const [color, setColor] = useState<string>();

  const handleClick = () => {
    const randomHexColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor(`#${randomHexColor}`);
  };

  return (
    <div style={{ height: 200, width: 200, backgroundColor: color }}>
      <button onClick={handleClick}>Set random color</button>
    </div>
  );
};

export default ColorBox;
