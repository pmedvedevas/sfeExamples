import { useState } from 'react';

const CrashOnRenderComponent = () => {
  const [shouldCrash, setShouldCrash] = useState(false);
  const handleClick = () => {
    setShouldCrash(true);
  };

  if (shouldCrash) {
    throw Error('Component crashed after state has changed!');
  }

  return <button onClick={handleClick}>Crash me! And see fallback content</button>;
};

export default CrashOnRenderComponent;
