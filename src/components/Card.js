import React from "react";

const Card = ({ movie }) => {
  if (movie !== undefined) {
    return (
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="Girl in a jacket"
          width="500"
          height="600"
        ></img>
        <h1>{movie.title}</h1>
        <p>{movie.release_date}</p>
        <h2>{movie.vote_average}</h2>
        <h2>{movie.genre_ids}</h2>
      </div>
    );
  }
};

export default Card;
