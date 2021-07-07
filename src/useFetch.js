import { useState, useEffect } from "react";

export const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`;
export const API_MOST_RECENT = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`;

export const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState();
  const fetchMovies = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.results) {
        setData(data.results);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.errors });
      }
      setIsLoading(false);
    } catch (errors) {
      alert("check back later");
    }
  };

  useEffect(() => {
    fetchMovies(`${API_MOST_RECENT}`);
    fetchMovies(`${API_SEARCH}${urlParams}`);
  }, [urlParams]);

  return { isLoading, error, data };
};

export default useFetch;
