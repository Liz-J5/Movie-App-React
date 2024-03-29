import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = ({ movie }) => {
  const [movieGenreData, setMovieGenreData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=4d27c7ec90a5e3ee4d34208989344060&query=code&language=fr"
      )
      .then((res) => setMovieGenreData(res.data.genres));
  }, []);

  if (movie !== undefined && movieGenreData.length !== 0) {
    // get the list of genre names for each movie
    let genreArray = [];

    if (movie.genre_ids !== undefined) {
      for (let index = 0; index < movieGenreData.length; index++) {
        for (let index2 = 0; index2 < movie.genre_ids.length; index2++) {
          if (movie.genre_ids[index2] === movieGenreData[index].id) {
            genreArray.push(movieGenreData[index].name);
          }
        }
      }
    }

    let storedData;
    const addStorage = () => {
      storedData = window.localStorage.movies ? window.localStorage.movies.split(",") : [];

      if (!storedData.includes(movie.id.toString())) {
        storedData.push(movie.id);
        window.localStorage.movies = storedData.toString();
      }
    };

    let index;
    const removeStorage = () => {
      storedData = window.localStorage.movies ? window.localStorage.movies.split(",") : [];
      console.log(storedData);
      if (storedData.includes(movie.id.toString())) {
        index = storedData.indexOf(movie.id.toString());
        storedData.splice(index, 1).toString();
        window.localStorage.movies = storedData;
      }
    };

    // let movieId = test.find((element) => element == movie.id);

    return (
      <div className="movieCard">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
          width="500"
          height="600"
        ></img>
        <h1>{movie.title}</h1>
        <p>{movie.release_date}</p>
        <h2>{Math.round(movie.vote_average * 10) / 10}/10</h2>
        <ul>
          {genreArray.map((element) => {
            return <li key={element}>{element}</li>;
          })}
        </ul>
        <h3>Synopsis</h3>
        <p>{movie.overview}</p>

        <button
          type="button"
          onClick={() => {
            addStorage();
          }}
        >
          Ajouter aux coups de coeur
        </button>

        <button
          type="button"
          onClick={() => {
            removeStorage();
          }}
        >
          Supprimer des coups de coeur
        </button>
      </div>
    );
  }
};

export default Card;
