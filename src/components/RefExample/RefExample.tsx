import { useEffect, useRef } from 'react';

const RefExample = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(`text div width is: ${textRef.current?.offsetWidth}`);
  }, []);

  return <div ref={textRef}>Some Text</div>;
};

export default RefExample;
