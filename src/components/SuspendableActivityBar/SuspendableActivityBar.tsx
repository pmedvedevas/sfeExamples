interface ActivityData {
  activity: string;
}

let activity: string;
let error: unknown;

const fetchActivity = async (): Promise<ActivityData> => {
  const response = await fetch('https://www.boredapi.com/api/activity').then();
  return await response.json();
};

const SuspendableActivityBar = () => {
  const suspender = fetchActivity().then(
    (res) => (activity = res.activity),
    (err) => (error = err)
  );
  if (error) {
    throw error;
  }
  if (!activity?.length) {
    throw suspender;
  }

  return <div style={{ color: 'red' }}>Suspense activity: {activity}</div>;
};

export default SuspendableActivityBar;
