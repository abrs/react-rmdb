import { useState, useEffect } from "react";
import Api from "../Api";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      //use try, catch with any api usage
      setError(false);
      setLoading(true);

      const movies = await Api.fetchMovies(searchTerm, page);
      //   console.log("movies", movies);

      setState((prev) => ({
        //this syntax used to return an object rather than premitiv value
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };

  //   initial render
  useEffect(() => {
    fetchMovies(1);
  }, []);

  //   custom hook returned values
  return { state, loading, error };
};
