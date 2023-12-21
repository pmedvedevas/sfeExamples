import useFetchAnyActivity from '../../hooks/useFetchAnyActivity.tsx';
import Loader from '../Loader';
import ErrorAlert from '../ErrorAlert';

const ActivityBar = () => {
  const { activity, isLoading, isError } = useFetchAnyActivity();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorAlert message="Error occurred while fetching activity" />;
  }

  return <div>Suggested activity: {activity}</div>;
};

export default ActivityBar;
