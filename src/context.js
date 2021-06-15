import React, { useState, useContext } from "react";
import useFetch from "./useFetch";
export const API_MOST_RECENT = `https://api.themoviedb.org/3/now_playing/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { isLoading, error, data: movies, movie_id } = useFetch(
    `${query}` === "" ? `${API_MOST_RECENT}` : `&query=${query}`
  );
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        error,
        movies,
        query,
        setQuery,
        isModalOpen,
        openModal,
        closeModal,
        movie_id,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
