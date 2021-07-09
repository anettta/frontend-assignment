import React from "react";

import { useGlobalContext } from "./context";

// import useFetch from "./useFetch";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const SingleMovie = ({ movie }) => {
  const {
    poster_path: poster,
    vote_average: rating,
    title: movieTitle,
  } = movie;

  // const { openModal } = useGlobalContext();

  return (
    <div className="movie-group">
      <button className="btn">
        {/* onClick={openModal} */}
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
};

export default SingleMovie;
