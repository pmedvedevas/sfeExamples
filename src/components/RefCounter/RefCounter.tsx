import { useRef } from 'react';

const RefCounter = () => {
  const ref = useRef(0);

  const handleClick = () => {
    ref.current = ref.current + 1;
    if (ref.current > 5) {
      alert(`You clicked ${ref.current} times!`);
    }
  };

  return <button onClick={handleClick}>Click me! Ref counter: {ref.current}</button>;
};

export default RefCounter;
