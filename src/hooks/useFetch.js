import { useEffect, useState } from "react";

// const API_ENDPOINT = "https://api.themoviedb.org/3/search/movie?query=";
const API_ENDPOINT = "https://api.themoviedb.org/3/";
const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjE0ZGM2YjhjY2UwODI0YzJiNmI0N2ExY2M3MWM5NSIsInN1YiI6IjY1Zjc4ZTBlYTZmZGFhMDE3ZDZlN2IxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NNXsCgXn-Q_Zh6lxy4IlZwIiLaomiOCA2gvaSe_zmU8";

export const useFetch = (params) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const fetchMovie = (url) => {
    console.log(url);
    try {
      setIsLoading(true);
      fetch(url, {
        headers: {
          Authorization: "Bearer " + API_KEY,
        },
      })
        .then((response) => response.json())
        .then((dataResponse) => {
          setData(dataResponse.results);
          setError(false);

          setIsLoading(false);
          console.log("data: ", dataResponse.results);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}${params}`);
  }, [params]);

  return {
    isLoading,
    error,
    data,
  };
};
