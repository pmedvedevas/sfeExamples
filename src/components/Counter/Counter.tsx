import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount((prev) => ++prev);
  };
  const handleDecrease = () => {
    setCount((prev) => --prev);
  };

  return (
    <div>
      <span>Current count: {count}</span>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
};

export default Counter;
