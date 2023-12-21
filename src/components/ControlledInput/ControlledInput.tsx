import { ChangeEvent, useEffect, useState } from 'react';

const ControlledInput = () => {
  const [input, setInput] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (input.length > 10) {
      console.log("You've reached 10 characters");
    }
  }, [input]);

  return (
    <div>
      <input onChange={handleChange} value={input} />
      <span>Input length: {input.length}</span>
    </div>
  );
};

export default ControlledInput;
