import useIsOnline from '../../hooks/useIsOnline.tsx';

const StatusBar = () => {
  const isOnline = useIsOnline();

  return (
    <div>
      <div>Try switching off your wi-fi and see what happens</div>
      <div>{isOnline ? '✅ Online' : '❌ Disconnected'}</div>
    </div>
  );
};

export default StatusBar;
