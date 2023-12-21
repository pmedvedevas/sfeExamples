import { useState } from 'react';

const ContentShifter = () => {
  const [showAltContent, setShowAltContent] = useState(false);

  const handleClick = () => {
    setShowAltContent((prevState) => !prevState);
  };

  const renderAltContent = (content?: string) => {
    if (!content) {
      throw Error('alternative content is not defined');
    }
    return <div>{content}</div>;
  };

  return (
    <div>
      <div>{showAltContent ? renderAltContent() : 'regular content'}</div>
      <button onClick={handleClick}>Shift content</button>
    </div>
  );
};

export default ContentShifter;
