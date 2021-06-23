import React from "react";
import { useGlobalContext } from "./context";
import "./Movies.css";

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
      {movies.map((movie) => {
        const {
          poster_path: poster,
          vote_average: rating,
          title: movieTitle,
        } = movie;

        return (
          <div className="movie-group">
            <button className="btn" onClick={openModal}>
              <div className="row">
                <div className="card">
                  <div className="box">
                    <article key={movie.id} className="movie">
                      <div className="poster">
                        <img
                          className="poster"
                          src={
                            `https://image.tmdb.org/t/p/w500${poster}` ===
                            `https://image.tmdb.org/t/p/w500null`
                              ? url
                              : `https://image.tmdb.org/t/p/w500${poster}`
                          }
                          alt={movieTitle}
                        />
                      </div>

                      <div className="movie-info">
                        <h4 className="title">{movieTitle}</h4>
                        <div className="rating">
                          <div className="ellipse">
                            <p>{rating}</p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default Movies;
