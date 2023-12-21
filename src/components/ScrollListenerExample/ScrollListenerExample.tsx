import { useEffect, useRef } from 'react';

const ScrollListenerExample = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const containerElement = containerRef.current;
      const handleScroll = () => {
        console.log('Scrolling');
      };
      containerElement.addEventListener('scroll', handleScroll);
      return () => containerElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div ref={containerRef} style={{ height: 100, backgroundColor: 'red', overflow: 'auto' }}>
      <div style={{ height: 200 }}>Hello World!</div>
    </div>
  );
};

export default ScrollListenerExample;
