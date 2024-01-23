import { useEffect, useState } from 'react';

interface UseFetchActivity {
  activity: string | null;
  isLoading: boolean;
  isError: boolean;
}

const useFetchAnyActivity = (): UseFetchActivity => {
  const [activity, setActivity] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchAndSetData = async () => {
    try {
      const response = await fetch('https://www.boredapi.com/api/activity');
      const data = await response.json();
      setActivity(data?.activity);
    } catch {
      console.log('Error occurred while fetching the data');
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAndSetData();
  }, []);
  return { activity, isLoading, isError };
};

export default useFetchAnyActivity;
