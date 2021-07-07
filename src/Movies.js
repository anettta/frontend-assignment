import React from "react";
import { useGlobalContext } from "./context";
import "./Movies.css";
import SingleMovie from "./SingleMovie";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { openModal } = useGlobalContext();

  const { movies, isLoading } = useGlobalContext();
  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="movies">
      {movies && movies.map((movie) => <SingleMovie movie={movie} />)}
    </section>
  );
};

export default Movies;
