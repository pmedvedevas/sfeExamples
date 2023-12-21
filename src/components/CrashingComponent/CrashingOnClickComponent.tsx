const CrashingOnClickComponent = () => {
  const handleClick = () => {
    try {
      throw Error('Something is wrong');
    } catch (e) {
      console.log('Error was caught inside of an event handler');
    }
  };

  return <button onClick={handleClick}>Catch error in event handler!</button>;
};

export default CrashingOnClickComponent;
