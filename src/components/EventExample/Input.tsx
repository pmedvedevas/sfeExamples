/* prettier-ignore */

const EventExample = () => {
  const handleFocus = () => {
    console.log('focused');
  };
  const handleMouseOver = () => {
    console.log('hovering');
  };
  return (
    <div>
      <input
        type='text'
        onFocus={handleFocus}
        onMouseOver={handleMouseOver} />
    </div>
  );
};

export default EventExample;
