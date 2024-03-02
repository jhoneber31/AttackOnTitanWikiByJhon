import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    result: null,
    isLoading: true,
    error: null,
  });


  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      const characters = result.results;
      setState({
        data: result,
        result: characters,
        isLoading: false,
        error: null
      });
    } catch (error) {
      console.log('Error fetching data: ', error);
      setState({
        data: null,
        result: null,
        isLoading: false,
        error: error
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);


  return {
    data: state.data,
    result: state.result,
    isLoading: state.isLoading,
    error: state.error,
  };
};
