import { useEffect, useState } from "react";

export function useFetch(fetchFunction, initialData) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fetchedData, setFetchedData] = useState(initialData);

  useEffect(() => {
    async function getFetchedData() {
      try {
        const data = await fetchFunction();
        setFetchedData(() => {
          return data;
        });
      } catch (e) {
        setError({ message: `error fetching data` });
      } finally {
        setIsLoading(false);
      }
    }

    getFetchedData();
  }, [fetchFunction]);

  return {
    isLoading,
    error,
    setError,
    fetchedData,
    setFetchedData,
  };
}
