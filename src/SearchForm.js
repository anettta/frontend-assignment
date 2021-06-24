import React from "react";
import { useGlobalContext } from "./context";
import searchIcon from "./searchIcon.svg";

// export const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`;

const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();

  return (
    <>
      <h2 className="heading">Most Recent Movies</h2>
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="search-icon">
          <img className="search-icon" src={searchIcon} alt="search icon"></img>
        </div>
        <input
          type="text"
          className="form-input"
          placeholder="Search for a movie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {error.show && <div className="error">{error.msg}</div>}
      </form>
    </>
  );
};

export default SearchForm;
