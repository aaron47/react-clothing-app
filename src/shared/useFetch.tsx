import { useEffect, useState } from "react";

const useFetch = (
  url: string
): {
  data: any;
  isLoading: boolean;
  error: string | null;
} => {
  const [data, setData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortCtrl = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCtrl.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsLoading(false);
            setError(err.message);
          }
        });
    }, 1000);

    return () => abortCtrl.abort();
  }, [url]);

  return { data, isLoading, error };
};
export default useFetch;
