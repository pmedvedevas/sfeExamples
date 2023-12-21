import { useEffect, useState } from 'react';

interface UseFetchActivity {
  activity?: string;
  isLoading: boolean;
  isError: boolean;
}

const useFetchAnyActivity = (): UseFetchActivity => {
  const [activity, setActivity] = useState<string>();
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
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAndSetData();
  }, []);
  return { activity, isLoading, isError };
};

export default useFetchAnyActivity;
