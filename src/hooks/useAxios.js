import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (dataUrl) => {
  const [data, setData] = useState([]);
  const [fetchErr, setFetchErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const abortController = new AbortController();
  useEffect(() => {
    const abortSignal = abortController.signal;
    const axiosFetch = async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, { abortSignal });
        setData(response.data);
        setFetchErr(null);
      } catch (err) {
        setFetchErr(err.message);
      } finally {
        setTimeout(() => setIsLoading(false), 1500);
      }
    };
    axiosFetch(dataUrl);

    return () => abortController.abort();
  }, [dataUrl]);
  return { data, fetchErr, isLoading };
};

export default useAxios;
