import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

const useFetchData = <T>(url: string) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    axios
      .get<T>(url, { signal: controller.signal })
      .then((response) => setData(response.data))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, [url]);

  return { data, error, isLoading };
};

export default useFetchData;
